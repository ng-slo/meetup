import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // It contains the client side code that processes templates (bindings, components, ...) and reflective dependency injection.
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

// https://angular.io/docs/ts/latest/api/core/index/enableProdMode-function.html
// In development mode, change detection does a 2nd run immediately after the first run and produces an error if any bound value has changed between the first and the second run.
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

// AOT version - you can run it with ng serve --aot or ng build --aot
// import { platformBrowser} from '@angular/platform-browser'; // It contains code shared for browser execution (DOM thread, WebWorker)
// import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';
// ... rest is the same ...
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
