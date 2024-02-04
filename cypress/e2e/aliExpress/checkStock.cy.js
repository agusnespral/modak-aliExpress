/// <reference types = "cypress" />
import { checkStock } from "../../support/pages/aliExpressPage";

describe('Modak Challenge - Ali Express', () => {
    it('Validate second item from second results page when searching for "instax mini" has at least 1 item to be bought', () => {
    
        // 1. visit page
        cy.visit("/");
        // 2. search bar locator + type instax mini
        checkStock.inputSearchText("instax mini{enter}");
        // 3. second page locator + click
        checkStock.clickOnPagination("2");
        // 4. second item locator + click
        checkStock.clickOnItemCard(2)
        // 5. stock amount locator + assertion to validate that is > 0 

    });
});