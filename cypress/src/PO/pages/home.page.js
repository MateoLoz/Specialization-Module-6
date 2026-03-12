import Filter from "../components/filters/filter.component";
import Products from "../components/products/product.component";

export class HomePage {

    constructor() {
        this.filter = new Filter();
        this.products = new Products();
    }
    open() {
        cy.visit('/', { failOnStatusCode: false, timeout: 15000 });
    }
}