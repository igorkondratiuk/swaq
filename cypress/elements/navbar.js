class Navbar {
    get menu() {return cy.get('#react-burger-menu-btn')}
    get cart() {return cy.get('#shopping_cart_container')}
}

export default new Navbar()
