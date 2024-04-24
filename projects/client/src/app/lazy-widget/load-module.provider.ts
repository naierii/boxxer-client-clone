import { InjectionToken } from '@angular/core';

export interface LazyModules {
  CookieLawModule: any;
}

export const lazyMap: LazyModules = {
  CookieLawModule:
    'projects/client/src/app/lazy-widget/cookie-law/cookie-law.module#CookieLawModule'
};

export const LAZY_MODULES_LOADER_MAP = new InjectionToken(
  'LAZY_MODULES_LOADER_MAP',
  {
    factory: () => lazyMap
  }
);
