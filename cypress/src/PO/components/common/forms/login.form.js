import { InputComponent } from "../inputs/input.component";
import { ButtonSubmit } from "../buttons/button.submit";

export default class LoginForm {
    constructor() {
        this.email = new InputComponent('#email');
        this.password = new InputComponent('#password');
        this.button = new ButtonSubmit('input[data-test="login-submit"]');
    }

    enterEmail(email) {
        this.email.fill(email);
    }

    enterPassword(password) {
        this.password.fill(password);
    }

    login() {
        this.button.submit();
    }
}