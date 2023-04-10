import AuthPage from '../pages/auth.page'
import user from '../fixtures/user.json'
import error from '../fixtures/error.json'
import ProductsPage from "../pages/products.page";

describe('Authentication', () => {
  beforeEach(() => {
    AuthPage.open()
  })

  it('With existing credentials', () => {
    //AuthPage.logIn(user.username, user.password)
    cy.logIn( Cypress.env('username'),  Cypress.env('password') )
    ProductsPage.path.should('include', 'inventory')
    ProductsPage.shopingCart.should('be.visible')


  })

  it('With non-existing credentials', () => {
    AuthPage.logIn('foo', 'bar')
    AuthPage.containerError
        .should('have.text', error.credentials)
  })


})
