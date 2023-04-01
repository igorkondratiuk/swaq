declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Log into application
         * @example
         * cy.login('email@example.com', 'qwerty')
         */
        logIn(email: string, password: string): void
        logOut():void
    }
}
