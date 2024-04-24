import { FeathersSocketService } from '@admin/shared/services/feathers.service';
import { APP_INITIALIZER, Injectable } from '@angular/core';

@Injectable()
export class AppInitService {
  constructor(private feathers: FeathersSocketService) {}

  authenticate() {
    return this.feathers.authenticate().catch(err => err);
  }
}

export function appInitServiceFactory(provider: AppInitService) {
  return () => provider.authenticate();
}

export const appInitServiceInitProvider = {
  provide: APP_INITIALIZER,
  useFactory: appInitServiceFactory,
  deps: [AppInitService],
  multi: true
};
