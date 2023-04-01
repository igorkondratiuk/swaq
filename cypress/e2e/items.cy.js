import user from '../fixtures/user.json'
import { CartPage} from '../pages'
import AuthPage from "../pages/auth.page";
import ProductsPage from "../pages/products.page";

describe('Items', () => {
    beforeEach('login',() => {
        //cy.login(user.username, user.password)
        AuthPage.open()
        cy.logIn( Cypress.env('username'),  Cypress.env('password') )
    })

    it('Navigate to Cart from the navbar', () => {
        ProductsPage.navbar.cart.click()
        CartPage.path
            .should('eq', '/cart.html')
    })
    it('Navigate to menu from the navbar',()=>{
        ProductsPage.navbar.menu.click()
        ProductsPage.menubar.btnMenu
            .should('be.visible')
            .and('have.attr','aria-hidden','false')
        ProductsPage.menubar.btnCloseMenu.click()
        ProductsPage.menubar.btnMenu
            .should('not.be.visible')
            .and('have.attr','aria-hidden','true')

    })
    it.only('Navigate to sort container',()=>{

        ProductsPage.filter.sort


            //.should('be.visible')
           // .select('lohi')

    })

    afterEach('logout',()=>{
        cy.logOut()
    })
})
