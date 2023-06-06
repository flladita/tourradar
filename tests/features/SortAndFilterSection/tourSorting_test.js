const { sortAndFilterPage } = inject();
const assert = require('assert');

Feature('Tour Sorting');

Before(({ I }) => {
    I.navigateToHomePage();
  });

Scenario('Sort by Total price: Lowest first and ensure that the prices are sorted correctly', async ({ I }) => {

   I.selectOption(sortAndFilterPage.sortContainer,'Total price: Lowest first');
  
   let numberOfToursDisplayed = await I.grabNumberOfVisibleElements(sortAndFilterPage.priceElements);

   for (let i = 1; i < numberOfToursDisplayed; i++) {

    let loPriceSelector = sortAndFilterPage.tourSelector +i+ sortAndFilterPage.priceSelector;
    let hiPriceSelector = sortAndFilterPage.tourSelector +(i+1)+ sortAndFilterPage.priceSelector;

    let loPrice = await I.grabNumberOfVisibleElements(loPriceSelector);
    let hiPrice = await I.grabNumberOfVisibleElements(hiPriceSelector);

    let result = loPrice <= hiPrice;

    assert.equal(result, true);
  }
});