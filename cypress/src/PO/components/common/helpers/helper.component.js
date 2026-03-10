export class HelperComponent {

    constructor(selector) {
        this.selector = selector
    }

    element() {
        return cy.get(this.selector)
    }

    getMsg() {
        return this.element().invoke('text')
    }

}