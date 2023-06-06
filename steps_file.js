// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    navigateToHomePage: function() {
      this.amOnPage('/d/europe');
      this.see('Europe Tours & Trips');
    }, 

    navigateToTourDetailsPage: function() {
      this.amOnPage('/t/204541#p=1_');
      this.see('Northern Italy Including Cinque Terre');
    }, 
  });
}
