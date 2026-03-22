import Filter from "../components/filters/filter.component";
import Products from "../components/products/product.component";

const maxInstance = null;
class HomePage {

    constructor() {
        if (!maxInstance) {
            this.filter = new Filter();
            this.products = new Products();
        } else {
            return this;
        }

    }
    open() {
        cy.visit('/', { failOnStatusCode: false, timeout: 15000 });
    }
}

export default new HomePage();