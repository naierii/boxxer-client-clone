import { Inject, Injectable } from '@angular/core';
import { environment } from '@env/environment';
import feathers from '@feathersjs/client';

import * as io from 'socket.io-client';
import { AppStorage } from '@global/forStorage/universal.inject';
import { feathersRx } from '@admin/shared/services/feathers-rx';

@Injectable()
export class FeathersService {
  _feathers: any;
  constructor() {}

  public get app() {
    return this._feathers;
  }

  // expose services
  public service(name: string) {
    return this._feathers.service(name);
  }

  // expose authentication
  public authenticate(credentials?): Promise<any> {
    return this._feathers.authenticate(credentials);
  }

  // expose logout
  public logout() {
    return this._feathers.logout();
  }
}

@Injectable()
export class FeathersSocketService extends FeathersService {
  private _socket: any;
  constructor(@Inject(AppStorage) private appStorage: Storage) {
    super();
    this._socket = io(environment.host, {
      transports: ['websocket'],
      upgrade: false
    });
    this._feathers = feathers();
    this._feathers
      .configure(feathers.socketio(this._socket, { timeout: 60000 }))
      .configure(
        feathers.authentication({
          cookie: 'boxxer-auth-token',
          storageKey: 'boxxer-auth-token',
          storage: appStorage
        })
      )
      .configure(feathersRx());
  }
}
