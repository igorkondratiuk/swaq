import AuthPage from "../pages/auth.page";
import Menubar from "../elements/menubar";
import Navbar from "../elements/navbar";

describe('game vith clothes',()=>{


    beforeEach('Login',()=>{
        AuthPage.open()
        cy.logIn( Cypress.env('username'),  Cypress.env('password') )
    })

    beforeEach('Clear cart',()=>{
        cy.get('.shopping_cart_link').then(el=>{
            if(+el.text() > 0){
                cy.get('btn btn_primary btn_small btn_inventory')
                    .each(buttons=>{
                        buttons.click()
                    })
            }
        })
    })

    it('add clothes in cart',()=>{

        cy.get('.inventory_item').eq(0)
            .find('.pricebar')
            .find("button")
            .click()
        //cy.get('button').contains('Add to cart').eq(0).click()
        cy.get('.shopping_cart_badge').should('be.visible')//.click()
        //--------------to cart----------------------------
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_quantity').should('be.visible')
        //-----------------delete-------------------------------
        cy.get('.item_pricebar').find('button').click()
        //--------------------------------------------------
        cy.go(-1)

    })

    afterEach('Logout',()=>{
        Navbar.menu.click()
        Menubar.logOut.click()
    })

})
