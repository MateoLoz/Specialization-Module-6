import { InputComponent } from "../inputs/input.component";
import { ButtonSubmit } from "../buttons/button.submit";
import { HelperComponent } from "../helpers/helper.component";
import { SelectComponent } from "../selects/select.component";

export default class RegisterForm {

    get fname() {
        return cy.get('input[data-test="first-name"]', { timeout: 10000 })
    }

    get fnameErr() {
        return cy.get('div[data-test="first-name-error"] > div', { timeout: 10000 })
    }

    get lname() {
        return cy.get('input[data-test="last-name"]', { timeout: 10000 })
    }

    get bday() {
        return cy.get('input[data-test="dob"]', { timeout: 10000 })
    }

    get address() {
        return cy.get('input[data-test="street"]', { timeout: 10000 })
    }

    get city() {
        return cy.get('input[data-test="city"]', { timeout: 10000 })
    }

    get state() {
        return cy.get('input[data-test="state"]', { timeout: 10000 })
    }

    get code() {
        return cy.get('input[data-test="postal_code"]', { timeout: 10000 })
    }

    get country() {
        return cy.get('select[data-test="country"]', { timeout: 10000 })
    }

    get phone() {
        return cy.get('input[data-test="phone"]', { timeout: 10000 })
    }

    get email() {
        return cy.get('#email')
    }

    get emailErr() {
        return cy.get('div[data-test="email-error"] > div')
    }

    get password() {
        return cy.get('#password')
    }

    get passwordErr() {
        return cy.get('div[data-test="password-error"] > div')
    }

    get button() {
        return cy.get('button[data-test="register-submit"]')
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