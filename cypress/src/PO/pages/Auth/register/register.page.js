import 'dotenv/config';
import RegisterForm from '../../../components/common/forms/register.form';
export default class RegisterPage {
    RegisterForm;
    url = `${process.env.BASE_URL}`;

    constructor() {
        this.registerForm = new RegisterForm();
    }
    async open() {
        cy.visit('/auth/register', { failOnStatusCode: false, timeout: 15000 });
        cy.reload()
    }
}