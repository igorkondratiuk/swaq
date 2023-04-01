// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import AuthPage from '../pages/auth.page'
import Navbar from "../elements/navbar";
import Menubar from "../elements/menubar";

Cypress.Commands.add('logIn', (username, password) => {
    AuthPage.open()
    AuthPage.logIn(username, password)
})
Cypress.Commands.add('logOut',()=>{
    Navbar.menu.click()
    Menubar.logOut.click()

})
