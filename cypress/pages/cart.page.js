import Page from './page'
import Navbar from '../elements/navbar'

export const CartPage = new class extends Page {
    navbar = Navbar

    open() {
        return super.open('/cart.html')
    }
}
