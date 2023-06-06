const { homePage } = inject();

Feature('Tour section');

Before(({ I }) => {
    I.navigateToHomePage();
  });

Scenario('Validate the presence of the tours section on the home page.', ({ I }) => {
  I.seeElement(homePage.tourSection);
  I.seeElement(homePage.tourPicture);
  I.seeElement(homePage.tourName);
  I.seeElement(homePage.downloadBrochureButton);

  // Similarily add more assertions for all tour details...
});