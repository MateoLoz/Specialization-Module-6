export default class LoginForm {

    get email() {
        return cy.get('#email', { timeout: 15000 }).should('be.visible');
    }

    get emailErr() {
        return cy.get('#email-error > div', { timeout: 15000 }).should('be.visible');
    }

    get password() {
        return cy.get('div[class="input-group"] > input[id="password"]', { timeout: 15000 }).should('be.visible');
    }

    get button() {
        return cy.get('input[data-test="login-submit"]', { timeout: 15000 }).should('be.visible')
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