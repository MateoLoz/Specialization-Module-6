export default class LoginForm {

    get email() {
        return cy.get('#email');
    }

    get emailErr() {
        return cy.get('#email-error > div');
    }

    get password() {
        return cy.get('input[id="password"]');
    }

    get button() {
        return cy.get('input[data-test="login-submit"]')
    }

    getEmailErrorMsg() {
        return this.emailErr.invoke('text');
    }

    enterEmail(email) {
        this.email.type(email);
    }

    enterPassword(password) {
        this.password.type(password);
    }

    login() {
        this.button.click();
    }
}