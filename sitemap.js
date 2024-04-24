const https = require('https');
const fs = require('fs');

https.get('https://api.boxxerworld.com/sitemap', (res) => {
  let body = '';
  let i = 0;
  res.on('data', (d) => {
    i++;
    body += d;
  });
  res.on('error', (err) => {
    console.log(err);
  });
  res.on('end', () => {
    fs.writeFileSync('./dist/client/sitemap.xml', body);
  });
});
