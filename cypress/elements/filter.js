class Filter {

    get sort(){return cy.get('[data-test="product_sort_container"]')}
    get span(){return cy.get('.active_option')}
    get sort2(){return cy.get('.select_container')}
    get sort3(){return cy.get('.active_option')}

}
export default new Filter()
