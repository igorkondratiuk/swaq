import Page from './page'

class AuthPage extends Page {
    get inputUsername() {return cy.get('[data-test="username"]')}
    get inputPassword() {return cy.get('[data-test="password"]')}
    get buttonLogIn() {return cy.get('[data-test="login-button"]')}
    get containerError() {return cy.get('[data-test="error"]')}

    open() {
        return super.open('/')
    }

    logIn(username, password) {
        this.inputUsername.type(username)
        this.inputPassword.type(password)
        this.buttonLogIn.click()
    }
}

export default new AuthPage()
