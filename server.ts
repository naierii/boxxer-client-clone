// tslint:disable:no-require-imports
require('dotenv').config({ silent: true });
import 'zone.js/dist/zone-node';
const domino = require('domino');
const fs = require('fs');
const { join } = require('path');
const https = require('https');
const DIST_FOLDER = join(process.cwd(), 'dist');
const MAINTENANCE_FOLDER = join(process.cwd(), 'maintenance');
const template = fs
  .readFileSync(join(DIST_FOLDER, 'client', `index.html`))
  .toString();
const win = domino.createWindow(template);
global['window'] = win;
// not implemented property and functions
Object.defineProperty(win.document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});
// mock documnet
global['document'] = win.document;
// othres mock
global['CSS'] = null;
// global['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest;
global['Prism'] = null;

const vhost = require('vhost');
import * as express from 'express';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import { NgxRequest, NgxResponce } from '@gorniv/ngx-universal';

const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP,
  REQUEST,
  RESPONSE,
  ngExpressEngine,
  provideModuleMap,
} = require('./dist-server/main');

const ms = require('ms');
const isProd = process.env.SERVER === 'flynn' ? true : false;
const staticOptions = {
  maxAge: isProd ? ms('1yr') : ms('0'),
  setHeaders: (res) => {
    res.setHeader(
      'Expires',
      isProd ? ms('1yr').toString() : ms('0').toString()
    );
  },
};

const app = express();
app.use(cookieParser());

const client = express();
client.use(cors());
client.use((req, res, next) => {
  if (req.url === '/healthz') {
    next();
    return;
  }

  if (req.originalUrl === 'admin') {
    return res.redirect(301, 'https://admin.boxxerworld.com');
  }

  // for domain/index.html
  if (req.url === '/index.html') {
    return res.redirect(301, 'https://' + req.hostname);
  }

  next();
});

client.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)],
  })
);

client.set('view engine', 'html');
client.set('views', join(DIST_FOLDER, 'client'));
client.use(
  '/sitemap.xml',
  express.static(process.cwd() + '/dist/client/sitemap.xml')
);
client.use(
  '/.well-known/apple-developer-merchantid-domain-association',
  express.static(
    process.cwd() + '/.well-known/apple-developer-merchantid-domain-association'
  )
);

// // Server static files from /client
client.get(
  '*.*',
  express.static(join(DIST_FOLDER, 'client'), {
    maxAge: '1y',
  })
);

client.get('*', (req, res) => {
  // mock navigator from req.
  global['navigator'] = req['headers']['user-agent'];
  res.render(
    'index',
    {
      req,
      res,
      providers: [
        {
          provide: REQUEST,
          useValue: req,
        },
        {
          provide: RESPONSE,
          useValue: res,
        },
        {
          provide: NgxRequest,
          useValue: req,
        },
        {
          provide: NgxResponce,
          useValue: res,
        },
      ],
    },
    (err, html) => {
      if (!!err) {
        throw err;
      }

      res.send(html);
    }
  );
});

const admin = express();
// Server static files from /admin
admin.get('*.*', express.static(join(DIST_FOLDER, 'admin'), staticOptions));
admin.get('*', (req, res) => {
  res.sendFile(join(DIST_FOLDER, 'admin', 'index.html'));
});

const maintenance = express();

maintenance.get('*.*', express.static(MAINTENANCE_FOLDER, staticOptions));
maintenance.get('*', (req, res) => {
  res.sendFile(join(MAINTENANCE_FOLDER, 'index.html'));
});

app.use((req, res, next) => {
  if (req.query) {
    if (req.query.mc_cid) {
      res.cookie('mailchimp_campaign_id', req.query.mc_cid, {
        maxAge: 2592000000,
      });
    }
  }
  next();
});

app.get('/healthz', (req, res, next) => {
  res.sendStatus(200);
});

app.use(vhost(process.env.ADMIN_DOMAIN, admin));
if (process.env.MAINTENANCE === 'true') {
  app.use(vhost(process.env.CLIENT_DOMAIN, maintenance));
} else {
  app.use(vhost(process.env.CLIENT_DOMAIN, client));
}
app.use(vhost(process.env.CDN_DOMAIN, client));

const PORT =
  process.env.PORT ||
  process.env.BOXXER_CLIENT_TESTING_SERVICE_PORT ||
  process.env.BOXXER_CLIENT_SERVICE_PORT ||
  4200;

if (process.env.SERVER === 'flynn') {
  app.listen(PORT, () => {
    console.log('Listening on http://localhost:' + PORT);
  });
} else {
  const server = https
    .createServer(
      {
        key: fs.readFileSync('ssl/localhost.key.pem'),
        cert: fs.readFileSync('ssl/localhost.cert.pem'),
      },
      app
    )
    .listen(PORT);
}
