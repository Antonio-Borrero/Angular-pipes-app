import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import localeEs  from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import { LocalService } from './services/local.service';

registerLocaleData(localeEs, "es");
registerLocaleData(localeFr, "fr")

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    {
      provide: LOCALE_ID,
      deps: [LocalService],
      useFactory: (localService: LocalService) => localService.getLocale,
    }
  ]
};
