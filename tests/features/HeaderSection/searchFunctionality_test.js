const { headerSectionPage } = inject();

Feature('Search Functionality');

Before(({ I }) => {
  I.navigateToHomePage();
});

Scenario('Perform a search using valid input and verify search results page', async ({ I }) => {

  const searchInput = 'Italy';
  
  headerSectionPage.performASearchWithSearchCriteria(searchInput);
  I.seeInCurrentUrl(searchInput);
  I.see(searchInput);

  // Add more assertions based on what you want to acheive with the test...
});
