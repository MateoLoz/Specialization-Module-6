export default class Filter {

    get sortFilter() {
        return cy.get('.form-select', { timeout: 10000 })
    }

    get rangeFilter() {
        return cy.get('.input-group.mb-3')
    }

    get clearFilter() {
        return cy.get('.search-reset')
    }


}