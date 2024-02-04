class aliExpress {

    // selectors

    elements = {
        searchField: () => cy.get('#search-words'),
        paginationBar: () => cy.get('li[class^="comet-pagination-item"]'),
        itemCard: () => cy.get('[class="multi--container--1UZxxHY cards--card--3PJxwBm search-card-item"]'),
        stockAmount: () => cy.get(".comet-v2-input-number-input").invoke("val")
        }

    // methods

    inputSearchText(searchText) {
        this.elements.searchField().type(searchText);
    };

    clickOnPagination(pageNum) {
        this.elements.paginationBar().contains(pageNum).click();
    };

    clickOnItemCard(cardNum) {
        this.elements.itemCard().eq(cardNum).invoke('removeAttr', 'target').click()
    };

    

};

export const checkStock = new aliExpress()