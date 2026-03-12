import { InputComponent } from "../inputs/input.component";
import { ButtonSubmit } from "../buttons/button.submit";
import { HelperComponent } from "../helpers/helper.component";
import { SelectComponent } from "../selects/select.component";

export default class RegisterForm {

    get fname() {
        return cy.get('input[data-test="first-name"]')
    }

    get fnameErr() {
        return cy.get('div[data-test="first-name-error"] > div')
    }

    get lname() {
        return cy.get('input[data-test="last-name"]')
    }

    get bday() {
        return cy.get('input[data-test="dob"]')
    }

    get address() {
        return cy.get('input[data-test="street"]')
    }

    get city() {
        return cy.get('input[data-test="city"]')
    }

    get state() {
        return cy.get('input[data-test="state"]')
    }

    get code() {
        return cy.get('input[data-test="postal_code"]')
    }

    get country() {
        return cy.get('select[data-test="country"]')
    }

    get phone() {
        return cy.get('input[data-test="phone"]')
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