/// <reference types = "cypress" />
import { checkStock } from "../../support/pages/aliExpressPage";

describe('Modak Challenge - Ali Express', () => {
    it('Validate second item from second results page when searching for "instax mini" has at least 1 item to be bought', () => {
    
        cy.visit("/");
        
        checkStock.inputSearchText("instax mini{enter}");
        
        checkStock.clickOnPagination("2");
        
        checkStock.clickOnItemCard(1)
        
        checkStock.elements.stockAmount().then(value => {
            expect(parseInt(value)).to.be.greaterThan(0);
        })
    });
});