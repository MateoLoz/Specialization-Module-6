export default class Filter {

    get sortFilter() {
        return cy.get('select[data-test="sort"]', { timeout: 10000 })
    }

    get rangeFilter() {
        return cy.get('.input-group.mb-3')
    }

    get clearFilter() {
        return cy.get('.search-reset')
    }


}