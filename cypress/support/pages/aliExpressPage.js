class aliExpress {

    // selectors

    elements = {
        searchField: () => cy.get('#search-words'),
        paginationBar: () => cy.get('li[class^="comet-pagination-item"]'),
        itemCard: () => cy.get('#card-list > :nth-child(2)').click()
    }


    // methods

    inputSearchText(searchText) {
        this.elements.searchField().type(searchText);
    };

    clickOnPagination(pageNum) {
        this.elements.paginationBar().contains(pageNum).click();
    };

    clickOnItemCard() {
        this.elements.itemCard().click();
    };
};

export const checkStock = new aliExpress()