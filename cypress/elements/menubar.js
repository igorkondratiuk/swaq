class Menubar {

    get allItems() {return cy.get('#inventory_sidebar_link')}
    get about() {return cy.get('#about_sidebar_link')}
    get logOut() {return cy.get('#logout_sidebar_link')}
    get resetAppState() {return cy.get('#reset_sidebar_link')}
    get btnMenu(){return cy.get('.bm-menu-wrap')}
    get btnCloseMenu(){return cy.get('#react-burger-cross-btn')}
}

export default new Menubar()
