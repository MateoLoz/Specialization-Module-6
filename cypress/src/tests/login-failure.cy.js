import LoginPage from "../PO/pages/Auth/login/login.page"
import { validUser } from "../test-data/testData";

describe('Login - Missing Email', () => {
    const loginPage = new LoginPage();
    before(() => {
        loginPage.open()
    })

    it('Attempt login with missing email', () => {

        // When the user leave the email blank
        loginPage.loginForm.enterPassword(validUser.password);
        // And the user click the submit button
        loginPage.loginForm.login();

        // Then the user should see an error message saying the email is required
        loginPage.loginForm.getEmailErrorMsg()
            .should('contain', 'El correo electrónico es obligatorio')

    })

})