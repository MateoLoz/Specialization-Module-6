export default class Products {

    get sortingCompleted() {
        return cy.get('[data-test="sorting_completed"]')
    }

    get productItems() {
        return cy.get('a.card')
    }

    get productNames() {
        return cy.get('[data-test="product-name"]')
    }

    get productPrices() {
        return cy.get('[data-test="product-price"]')
    }

    get productCo2() {
        return cy.get('[data-test="co2-rating-badge"]')
    }

    waitForSorting() {
        this.sortingCompleted
            .should('be.visible')
    }

    getAllNames() {
        this.waitForSorting()

        return this.productNames.then($els => {
            return [...$els].map(el => el.innerText.trim())
        })
    }

    getAllPrices() {
        this.waitForSorting()

        return this.productPrices.then($els => {
            return [...$els].map(el =>
                parseFloat(el.innerText.replace('$', '').trim())
            )
        })
    }

    getAllCo2() {
        this.waitForSorting()

        return this.productCo2.then($els => {
            return [...$els].map(el => el.innerText.trim())
        })
    }

}