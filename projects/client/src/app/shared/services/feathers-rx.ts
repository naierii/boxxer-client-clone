import { from } from 'rxjs';

export function feathersRx(options = {}) {
  const mixin = service => {
    const appMethods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
    const serviceMixin = {
      watch(watchOptions = {}) {
        const methods = {};

        appMethods.forEach(method => {
          if (typeof service[method] === 'function') {
            methods[method] = (...args) => {
              const serviceMethod = service[method].bind(service);
              return from(serviceMethod(...args));
            };
          }
        });

        return methods;
      }
    };

    // get the extended service object
    const newService = service.mixin(serviceMixin);

    // workaround for Firefox
    // FF defines Object.prototype.watch(), so uberproto doesn't recognize the mixin's .watch()
    // see https://github.com/feathersjs-ecosystem/feathers-reactive/issues/67
    if (
      (Object.prototype as any).watch &&
      (Object.prototype as any).watch === newService.watch
    ) {
      newService.watch = serviceMixin.watch;
    }
  };

  return app => {
    app.mixins.push(mixin);
  };
}
