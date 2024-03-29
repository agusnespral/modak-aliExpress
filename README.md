# modak-aliExpress

**Important documents for review:**
TEST CASE - modak-aliExpress/cypress/e2e/aliExpress/checkStock.cy.js
POM - modak-aliExpress/cypress/support/pages/aliExpressPage.js

**Challenges of this challenge:**

1. The main challenge for this exercise was an issue related to the interaction between the AliExpress page and Cypress. Many times, step 1 (visiting the URL) didn't finish loading, causing the test to fail. I tried to fix this and only found a partial solution that could work for a local run, but it might generate issues on a CI (Continuous Integration) server. Despite this, I decided to proceed with the partial solution to complete the exercise.

2. Another challenge was working with a new tab in Cypress. On AliExpress, when a user clicks on an item, it opens in a new tab. Cypress has the limitation that doesn't work well with a second tab. As a workaround, you can remove the target attribute and force it to open in the same tab. However, in this case, I had to change the selector. The one I was using was an ID (more stable and recommended as a good practice in Cypress) useful for clicking on the item, but it didn't have the "target" label on it. I had to use one that doesn't seem very stable, and this could cause a future issue if the class used changes.

3. Pending task to enhance quality and good practices -> cypress recomends the use of Fixtures, where you can store static data and then called it from test case. While this exercise requests the search for a specific text (instax mini), I completed it so that it can be replaced with any other item  (same idea for the pagination selection or the ItemCard). So in the fixture (json) we could store different texts for different searches. E.g. {'searchOne': 'instax mini', 'searchTwo': 'another search text'}, and then call this texts from the test case.  
