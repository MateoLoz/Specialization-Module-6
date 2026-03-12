import RegisterPage from '../PO/pages/Auth/register/register.page';
import { invalidEmailRegistration, invalidPasswordRegistration } from '../test-data/testData';

describe('Registration Validation', () => {

    context('Registration negative scenarios', () => {
        const registerPage = new RegisterPage()
        beforeEach(() => {
            registerPage.open();
        })

        it('Registration fails when email format is invalid', () => {
            registerPage.registerForm.enterAllCredentials(invalidEmailRegistration);
            registerPage.registerForm.register();
            registerPage.registerForm.getEmailMsgError()
                .should('contain', 'El formato del correo electrónico no es válido')
        })

        it('Registration fails when password is empty', () => {
            registerPage.registerForm.enterCredentialsWithoutpassword(invalidPasswordRegistration);
            registerPage.registerForm.register();
            registerPage.registerForm.getPasswordError()
                .should('contain', 'La contraseña es obligatoria')
        })
    })

})