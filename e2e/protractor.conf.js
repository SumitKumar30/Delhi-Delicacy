<<<<<<< HEAD
// @ts-check
=======
>>>>>>> 6dedf18043536ca5d441a56ff49e8082f9e5cfac
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

<<<<<<< HEAD
/**
 * @type { import("protractor").Config }
 */
=======
>>>>>>> 6dedf18043536ca5d441a56ff49e8082f9e5cfac
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
<<<<<<< HEAD
    browserName: 'chrome'
=======
    'browserName': 'chrome'
>>>>>>> 6dedf18043536ca5d441a56ff49e8082f9e5cfac
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
<<<<<<< HEAD
      project: require('path').join(__dirname, './tsconfig.json')
=======
      project: require('path').join(__dirname, './tsconfig.e2e.json')
>>>>>>> 6dedf18043536ca5d441a56ff49e8082f9e5cfac
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};