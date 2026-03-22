import LoginForm from '../../../components/common/forms/login.form';

const maxInstace = null;
class LoginPage {

    loginForm;

    constructor() {
        if (!maxInstace) {
            this.loginForm = new LoginForm();
        } else {
            return this;
        }

    }
    open() {
        cy.visit('/auth/login', { failOnStatusCode: false, timeout: 15000 })
    }
}

export default new LoginPage();