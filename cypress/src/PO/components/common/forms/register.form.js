export default class RegisterForm {

    get fname() {
        return cy.get('#first_name', { timeout: 15000 }).should('be.visible')
    }

    get fnameErr() {
        return cy.get('div[data-test="first-name-error"] > div', { timeout: 15000 }).should('be.visible')
    }

    get lname() {
        return cy.get('input[data-test="last-name"]', { timeout: 15000 }).should('be.visible')
    }

    get bday() {
        return cy.get('input[data-test="dob"]', { timeout: 15000 }).should('be.visible')
    }

    get address() {
        return cy.get('input[data-test="street"]', { timeout: 15000 }).should('be.visible')
    }

    get city() {
        return cy.get('input[data-test="city"]', { timeout: 15000 }).should('be.visible')
    }

    get state() {
        return cy.get('input[data-test="state"]', { timeout: 15000 }).should('be.visible')
    }

    get code() {
        return cy.get('input[data-test="postal_code"]', { timeout: 15000 }).should('be.visible')
    }

    get country() {
        return cy.get('select[data-test="country"]', { timeout: 15000 }).should('be.visible')
    }

    get phone() {
        return cy.get('input[data-test="phone"]', { timeout: 15000 }).should('be.visible')
    }

    get email() {
        return cy.get('#email', { timeout: 15000 }).should('be.visible')
    }

    get emailErr() {
        return cy.get('div[data-test="email-error"] > div', { timeout: 15000 }).should('be.visible')
    }

    get password() {
        return cy.get('#password', { timeout: 15000 }).should('be.visible')
    }

    get passwordErr() {
        return cy.get('div[data-test="password-error"] > div', { timeout: 15000 }).should('be.visible')
    }

    get button() {
        return cy.get('button[data-test="register-submit"]', { timeout: 15000 }).should('be.visible')
    }


    enterAllCredentials(credentials) {
        cy.log(credentials.firstName);
        this.fname.type(credentials.firstName);
        this.lname.type(credentials.lastName);
        this.bday.type(credentials.bday);
        this.address.type(credentials.address);
        this.city.type(credentials.city);
        this.state.type(credentials.state);
        this.code.type(credentials.postalCode);
        this.country.select(credentials.country);
        this.phone.type(credentials.phone);
        this.email.type(credentials.email);
        this.password.type(credentials.password);
    }

    async enterCredentialsWithoutName(credentials) {
        this.lname.type(credentials.lastName);
        this.bday.type(credentials.bday);
        this.address.type(credentials.address);
        this.city.type(credentials.city);
        this.state.type(credentials.state);
        this.code.type(credentials.postalCode);
        this.country.select(credentials.country);
        this.phone.type(credentials.phone);
        this.email.type(credentials.email);
        this.password.type(credentials.password);
    }


    async enterCredentialsWithoutpassword(credentials) {
        this.fname.type(credentials.firstName);
        this.lname.type(credentials.lastName);
        this.bday.type(credentials.bday);
        this.address.type(credentials.address);
        this.city.type(credentials.city);
        this.state.type(credentials.state);
        this.code.type(credentials.postalCode);
        this.country.select(credentials.country);
        this.phone.type(credentials.phone);
        this.email.type(credentials.email);
    }

    getEmailMsgError() {
        return this.emailErr.invoke('text');
    }

    getPasswordError() {
        return this.passwordErr.invoke('text');
    }

    register() {
        this.button.click();
    }
}