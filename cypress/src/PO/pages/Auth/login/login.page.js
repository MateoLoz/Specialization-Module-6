import 'dotenv/config';
import LoginForm from '../../../components/common/forms/login.form';

export default class LoginPage {

    loginForm;
    url = `${process.env.BASE_URL}`;

    constructor() {
        this.loginForm = new LoginForm();
    }
    open(route) {
        cy.visit(`${this.url}${route}`);
    }
}