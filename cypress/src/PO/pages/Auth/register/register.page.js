import RegisterForm from '../../../components/common/forms/register.form';

const maxInstance = null;
class RegisterPage {
    RegisterForm;

    constructor() {
        if (!maxInstance) {
            this.registerForm = new RegisterForm();
        } else {
            return this;
        }
    }
    async open() {
        cy.visit('/auth/register', { failOnStatusCode: false, timeout: 15000 });
    }
}

export default new RegisterPage();