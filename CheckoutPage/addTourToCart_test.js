const { tourDetailsPage, checkoutProcessPage } = inject();
const assert = require('assert');

Feature('Add Tour to Cart');

Before(({ I }) => {
    I.navigateToTourDetailsPage();
  });

Scenario('Add a tour to the cart and verify tour details in the checkout page', async ({ I }) => {

  let tourNameTourDetailsPage = await I.grabTextFrom(tourDetailsPage.tourName);

  tourDetailsPage.addTourToCart();
 
  let tourNameCheckoutPage = await I.grabTextFrom(checkoutProcessPage.tourName);

  assert.equal(tourNameTourDetailsPage,tourNameCheckoutPage);

 // Similarily add more assertions for all tour details...
});
