export default class LoginForm {

    get email() {
        return cy.get('#email', { timeout: 10000 });
    }

    get emailErr() {
        return cy.get('#email-error > div', { timeout: 10000 });
    }

    get password() {
        return cy.get('input[id="password"]', { timeout: 10000 });
    }

    get button() {
        return cy.get('input[data-test="login-submit"]', { timeout: 10000 })
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