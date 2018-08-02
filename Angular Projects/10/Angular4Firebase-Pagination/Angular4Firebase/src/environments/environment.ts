// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'xxx',
    authDomain: 'javasampleapproach-angular4.firebaseapp.com',
    databaseURL: 'https://javasampleapproach-angular4.firebaseio.com',
    projectId: 'javasampleapproach-angular4',
    storageBucket: 'javasampleapproach-angular4.appspot.com',
    messagingSenderId: 'xxx'
  }
};
