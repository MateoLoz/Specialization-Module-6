import LoginForm from '../../../components/common/forms/login.form';

export default class LoginPage {

    loginForm;
    url = `${process.env.BASE_URL}`;

    constructor() {
        this.loginForm = new LoginForm();
    }
    open() {
        cy.visit('/auth/login', { failOnStatusCode: false, timeout: 15000 });
        cy.reload()
    }
}