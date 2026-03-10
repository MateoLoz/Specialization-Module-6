export class InputComponent {

    constructor(selector) {
        this.input = cy.get(selector)
    }

    element() {
        return cy.get(this.selector)
    }

    fill(value) {
        this.element().clear().type(value)
    }

    clear() {
        this.element().clear()
    }

    getValue() {
        return this.element().invoke('val')
    }
}