// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  host: 'http://10.0.2.2:3030',
  api_url: 'http://10.0.2.2:3030/',
  site: 'http://10.0.2.2:4200',
  image_cdn: 'https://img.boxxerworld.com',
  stripe_key: 'pk_test_gm5ngDkM9un8t17TjhnvqhLh',
  admin: 'http://10.0.2.2:4201',
  domain: 'localhost',
};
