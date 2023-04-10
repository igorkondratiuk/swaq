import Page from "./page";
import Navbar from '../elements/navbar'
import Menubar from "../elements/menubar";
import Filter from "../elements/filter";

class ProductsPage extends Page {

    navbar = Navbar
    menubar = Menubar
    filter = Filter

    get shopingCart(){return cy.get('#shopping_cart_container')}

    open() {
        return super.open('/inventory.html')
    }

}
export default new ProductsPage()
