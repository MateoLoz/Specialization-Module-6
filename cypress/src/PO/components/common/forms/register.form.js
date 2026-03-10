import { InputComponent } from "../inputs/input.component";
import { ButtonSubmit } from "../buttons/button.submit";
import { HelperComponent } from "../helpers/helper.component";
import { SelectComponent } from "../selects/select.component";

export default class RegisterForm {
    constructor(page) {
        this.page = page;
        this.fname = new InputComponent('input[data-test="first-name"]');
        this.fnameErr = new HelperComponent('div[data-test="first-name-error"] > div');
        this.lname = new InputComponent('input[data-test="last-name"]');
        this.bday = new InputComponent('input[data-test="dob"]');
        this.address = new InputComponent('input[data-test="street"]');
        this.city = new InputComponent('input[data-test="city"]');
        this.state = new InputComponent('input[data-test="state"]');
        this.code = new InputComponent('input[data-test="postal_code"]');
        this.country = new SelectComponent('select[data-test="country"]');
        this.phone = new InputComponent('input[data-test="phone"]');
        this.email = new InputComponent('#email');
        this.password = new InputComponent('#password');
        this.button = new ButtonSubmit('button[data-test="register-submit"]');
    }

    enterAllCredentials(credentials) {
        this.fname.fill(credentials.firstName);
        this.lname.fill(credentials.lastName);
        this.bday.fill(credentials.bday);
        this.address.fill(credentials.address);
        this.city.fill(credentials.city);
        this.state.fill(credentials.state);
        this.code.fill(credentials.postalCode);
        this.country.fill(credentials.country);
        this.phone.fill(credentials.phone);
        this.email.fill(credentials.email);
        this.password.fill(credentials.password);
    }

    async enterCredentialsWithoutName(credentials) {
        this.lname.fill(credentials.lastName);
        this.bday.fill(credentials.bday);
        this.address.fill(credentials.address);
        this.city.fill(credentials.city);
        this.state.fill(credentials.state);
        this.code.fill(credentials.postalCode);
        this.country.fill(credentials.country);
        this.phone.fill(credentials.phone);
        this.email.fill(credentials.email);
        this.password.fill(credentials.password);
    }

    register() {
        this.button.submit();
    }
}