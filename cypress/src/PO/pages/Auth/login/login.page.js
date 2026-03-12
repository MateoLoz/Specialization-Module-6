import LoginForm from '../../../components/common/forms/login.form';

export default class LoginPage {

    loginForm;

    constructor() {
        this.loginForm = new LoginForm();
    }
    open() {
        cy.visit('/auth/login', { failOnStatusCode: false, timeout: 15000 })
    }
}