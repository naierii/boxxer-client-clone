import { enableProdMode } from '@angular/core';
export { AppServerModule } from './app/app.server.module';
export { ngExpressEngine } from '@nguniversal/express-engine';
export { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
export { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
enableProdMode();
