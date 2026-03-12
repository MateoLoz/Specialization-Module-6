import RegisterForm from '../../../components/common/forms/register.form';
export default class RegisterPage {
    RegisterForm;

    constructor() {
        this.registerForm = new RegisterForm();
    }
    async open() {
        cy.visit('/auth/register', { failOnStatusCode: false, timeout: 15000 });
    }
}