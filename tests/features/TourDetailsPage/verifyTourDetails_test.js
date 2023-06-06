const { homePage, tourDetailsPage } = inject();
const assert = require('assert');

Feature('Navigate to tour details page');

Before(({ I }) => {
    I.navigateToHomePage();
  });

Scenario('Navigate to tour details page and assert tour details', async ({ I }) => {

  let tourNameHomePage = await I.grabTextFrom(homePage.tourName);

  homePage.clickOnViewTourButton();
 
  let tourNameTourDetailsPage = await I.grabTextFrom(tourDetailsPage.tourName);

  assert.equal(tourNameHomePage,tourNameTourDetailsPage);

 // Similarily add more assertions for all tour details...
});
