export class ButtonSubmit {
    constructor(selector) {
        this.selector = selector
    }

    element() {
        return cy.get(this.selector)
    }

    submit() {
        this.element().click()
    }
}