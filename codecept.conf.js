const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'store/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      timeout: 20000,
      waitForTimeout: 10000,
      waitForNavigation: 'networkidle',
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home.js',
    authenticationPage: './pages/authentication.js',
    registrationPage: './pages/registration.js',
    myAccountPage: './pages/myAccount.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'JS_vmytrokhin'
}