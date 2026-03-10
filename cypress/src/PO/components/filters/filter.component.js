export default class Filter {

    constructor() {
        this.sortFilter = cy.locator('.form-select');
        this.rangeFilter = cy.locator('.input-group.mb-3');
        this.clearFilter = cy.locator('.search-reset');
        this.searchFilter = cy.locator('.search-submit');
    }

    sortByValue(value) {
        cy.get(this.sortFilter).select(value)
    }

}