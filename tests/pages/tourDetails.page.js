const { I } = inject();

module.exports = {

    tourName: '.js-ao-tour-above-fold__tour-name', 
    confirmDatesButton: '[data-cy="tdp-availability--cta-book"]',

    addTourToCart() {
        I.click(this.confirmDatesButton);
        I.switchToNextTab();
    }
}