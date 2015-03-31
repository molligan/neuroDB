/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'neuro-db',
    environment: environment,
    firebase: 'https://neuro-db.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
     'script-src': "'self' 'unsafe-inline' 'unsafe-eval' http://use.typekit.net",
      'font-src': "'self' https://fonts.gstatic.com data:",
      'connect-src': "'self' http://localhost:1337 wss://s-dal5-nss-17.firebaseio.com/.ws?v=5&ns=neuro-db",
      'img-src': "'self' http://p.typekit.net",
      'style-src': "'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com http://use.typekit.net",
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
