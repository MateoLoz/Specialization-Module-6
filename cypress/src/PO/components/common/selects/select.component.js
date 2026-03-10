export class SelectComponent {

    constructor(selector) {
        this.selector = selector
    }

    element() {
        return cy.get(this.selector)
    }

    fill(value) {
        return this.element().select(value)
    }

    clear() {
        return this.element().select('')
    }

    getValue() {
        return this.element().invoke('val')
    }

}