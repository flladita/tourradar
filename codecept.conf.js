const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'tests/features/*/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.tourradar.com',
      show: true,
      windowSize: '1200x900', 
      waitForAction: 700
    }
  },
  include: {
    I: './steps_file.js', 
    headerSectionPage: './tests/pages/headerSection.page.js',
    homePage: './tests/pages/home.page.js',
    sortAndFilterPage: './tests/pages/sortAndFilter.page.js',
    tourDetailsPage: './tests/pages/tourDetails.page.js',
    checkoutProcessPage: './tests/pages/checkoutProcess.page.js'
  },
  name: 'tourradar'
}