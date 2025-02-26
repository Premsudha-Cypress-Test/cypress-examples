// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// ✅ Function to clear session storage and local storage after logout
Cypress.Commands.add('clearCartData', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => {
        win.sessionStorage.clear();
    });
});
Cypress.Commands.add('loginAndProceedToCheckout', (username, password) => {

    cy.visit('https://www.saucedemo.com/');
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get('#user-name').should('be.visible').clear().type(username);
    cy.get('#password').should('be.visible').clear().type(password);
    cy.get('.submit-button.btn_action').click();


    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list', { timeout: 10000 }).should('be.visible');


    cy.get('.inventory_list .inventory_item').first().within(() => {
        cy.get('.inventory_item_name').invoke('text').then((productName) => {
            cy.wrap(productName).as('productName');
        });

        cy.get('.inventory_item_price').invoke('text').then((productPrice) => {
            cy.wrap(productPrice).as('productPrice');
        });

        cy.get('button').click(); // Add to cart
    });


    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 1);
    cy.get('.inventory_item_name').should('be.visible');
    cy.get('.inventory_item_price').should('be.visible');


    cy.get('[data-test="checkout"]').click();
});
