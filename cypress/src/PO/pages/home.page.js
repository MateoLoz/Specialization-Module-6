import Filter from "../components/filters/filter.component";
import Products from "../components/products/product.component";

export class HomePage {
    url = `${process.env.BASE_URL}`;

    constructor() {
        this.filter = new Filter();
        this.products = new Products();
    }
    open() {
        cy.visit('/', { failOnStatusCode: false, timeout: 15000 });
        cy.reload()
    }
}