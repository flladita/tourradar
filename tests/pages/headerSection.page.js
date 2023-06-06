const { I } = inject();

module.exports = {

    searchInputField: '.tagln-search input.header-top-search__input', 

    performASearchWithSearchCriteria(searchInput) {
        I.click(this.searchInputField);
        I.fillField(this.searchInputField, searchInput);
        I.pressKey('Enter'); 
    },
}

