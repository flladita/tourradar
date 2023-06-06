/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type checkoutProcessPage = typeof import('./tests/pages/checkoutProcess.page.js');
type headerSectionPage = typeof import('./tests/pages/headerSection.page.js');
type homePage = typeof import('./tests/pages/home.page.js');
type sortAndFilterPage = typeof import('./tests/pages/sortAndFilter.page.js');
type tourDetailsPage = typeof import('./tests/pages/tourDetails.page.js.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, checkoutProcessPage: checkoutProcessPage, headerSectionPage: headerSectionPage, homePage: homePage, sortAndFilterPage: sortAndFilterPage, tourDetailsPage: tourDetailsPage }
  interface Methods extends Puppeteer {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
