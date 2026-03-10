export default class Products {

    constructor() {

        this.sortingCompleted = cy.locator('[data-test="sorting_completed"]');
        this.productItems = cy.locator('a.card');
        this.productNames = cy.locator('[data-test="product-name"]');
        this.productPrices = cy.locator('[data-test="product-price"]');
        this.productCo2 = cy.locator('.co2-letter.active');
    }

    waitForSorting() {
        cy.get(this.sortingCompleted, { timeout: 8000 }).should('be.visible')
    }

    getAllNames() {
        this.waitForSorting()

        return cy.get(this.productNames).then($els => {
            return [...$els].map(el => el.innerText.trim())
        })
    }

    getAllPrices() {
        this.waitForSorting()

        return cy.get(this.productPrices).then($els => {
            return [...$els].map(el =>
                parseFloat(el.innerText.replace('$', '').trim())
            )
        })
    }

    getAllCo2() {
        this.waitForSorting()

        return cy.get(this.productCo2).then($els => {
            return [...$els].map(el => el.innerText.trim())
        })
    }

}