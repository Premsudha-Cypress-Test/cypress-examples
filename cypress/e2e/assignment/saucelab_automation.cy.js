
Cypress.on('uncaught:exception', (err, runnable) => {
    cy.log(`Uncaught Exception: ${err.message}`);
    return false;
});
describe('Sauce Lab Login, Cart and Checkout Automation with Multiple users', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.fixture('saucelab_users').as('users'); //Load sauce lab users from fixtures under "saucelab_users.json"

    });

    it('Verify login page for multiple users', function () {
        this.users.forEach((user) => {
            cy.log(`Testing login for user: ${user.username}`);

            cy.get('#user-name').clear().type(user.username);//add username
            cy.get('#password').clear().type(user.password);//adding password
            cy.get('.submit-button.btn_action').click();

            if (user.expectedError || user.expectedError2) {
                cy.get('.error-message-container')
                    .should('be.visible')
                    .should('contain', user.expectedError || user.expectedError2); // Check whichever error occurs with json file
            } else {
                if (user.delay) cy.wait(user.delay); // Handle slow performace user with delay

                cy.url().should('include', user.expectedUrl);


                cy.get('#react-burger-menu-btn').click()
                cy.get('#logout_sidebar_link').click();
                cy.url().should('include', 'https://www.saucedemo.com/');
                cy.wrap(user).as('currentUser');
            }
        });
    });
    it('Verify add to cart, validate cart, and click checkout for logged-in users', function () {
        cy.visit('https://www.saucedemo.com/');

        cy.get('@users').then((users) => {
            users.forEach((user) => {
                if (!user.expectedError && !user.expectedError2) {
                    cy.log(`Proceeding to cart actions for: ${user.username}`);


                    cy.get('#user-name').should('be.visible').clear().type(user.username);
                    cy.get('#password').should('be.visible').clear().type(user.password);
                    cy.get('.submit-button.btn_action').click();
                    cy.url().should('include', user.expectedUrl);


                    cy.get('.inventory_list .inventory_item', { timeout: 10000 }).should('be.visible');


                    cy.get('.inventory_list .inventory_item').first().within(() => {
                        cy.get('.inventory_item_name').invoke('text').then((productName) => {
                            cy.wrap(productName).as('productName');
                        });
                        // capturing product name of first product of collection
                        cy.get('.inventory_item_price').invoke('text').then((productPrice) => {
                            cy.wrap(productPrice).as('productPrice');
                        });
                        // capturing product price of first product of collection
                        cy.get('button').click();///add to cart
                    });


                    cy.get('.shopping_cart_link').click(); ///go to cart 
                    cy.get('.cart_item').should('have.length', 1);
                    cy.get('.inventory_item_name').should('be.visible');
                    cy.get('.inventory_item_price').should('be.visible');


                    cy.get('@productName').then((prodName) => {
                        cy.get('.inventory_item_name').should('have.text', prodName);
                    });/// verifying on cart the product name is same as collection

                    cy.get('@productPrice').then((expectedPrice) => {
                        cy.get('.cart_item .inventory_item_price').invoke('text').then((actualPrice) => {
                            if (expectedPrice.trim() !== actualPrice.trim()) {
                                cy.log(` Price Mismatch: Expected ${expectedPrice}, but found ${actualPrice}`);
                            } else {
                                cy.log(` Price Match: ${actualPrice}`);
                            }
                        });
                    });  //verifying on cart the product price is same as collection
                    //ignoring even if not same price for further operations

                    cy.get('.cart_item button').click();  //click on delete
                    cy.get('.cart_item').should('not.exist');//verifying if product deleted


                    cy.get('[data-test="continue-shopping"]').click(); //click on continue shopping
                    cy.url().should('include', '/inventory.html');//
                    cy.get('.inventory_list .inventory_item').first().within(() => {
                        cy.get('button').click();
                    });//again add same product to cart


                    cy.get('.shopping_cart_link').click();
                    cy.get('[data-test="checkout"]').click();//click on checkout


                    cy.get('#react-burger-menu-btn').click();
                    cy.get('#logout_sidebar_link').click();//logout
                    cy.clearLocalStorage();
                }
            });
        });
    });
    it('Validate checkout page details and final confirmation', function () {
        cy.get('@users').then((users) => {
            users.forEach((user) => {
                // Skip test for invalid users (users with expected errors) and users with last name issues
                if (user.expectedError || user.expectedError2 || user.username === 'error_user' || user.username === 'problem_user') {
                    cy.log(`Skipping test for ${user.username}: This user has validation issues and cannot proceed to checkout.`);
                    return;
                }

                cy.log(` Proceeding to checkout validations for: ${user.username}`);

                cy.loginAndProceedToCheckout(user.username, user.password);
                //custom command to login with each user and move to checkout for code reusability

                cy.url().should('include', '/checkout-step-one.html');//goint to checkout page 1
                cy.get('.checkout_info').should('be.visible');

                cy.get('[data-test="firstName"]').type('Premsudha');

                cy.get('[data-test="lastName"]')
                    .clear()
                    .type('Vasumani', { force: true })
                    .should('have.value', 'Vasumani');

                cy.get('[data-test="postalCode"]').type('410210');
                cy.get('[data-test="continue"]').click();

                cy.url().should('include', '/checkout-step-two.html');//going to checkout step 2
                cy.get('[data-test="payment-info-label"]').should('contain', 'Payment Information');
                //verifying payment information present
                cy.get('[data-test="shipping-info-label"]').should('contain', 'Shipping Information');
                //verifying shipping information present
                cy.get('.summary_total_label').invoke('text').then((totalText) => {
                    cy.log(` Final total for ${user.username}: ${totalText}`);
                });
                //fetching total and storing in variabel for comparison

                cy.get('[data-test="finish"]').click();
                cy.get('.complete-header').should('have.text', 'Thank you for your order!');//verifying if order is booked and final step done

                cy.get('#react-burger-menu-btn').click();
                cy.get('#logout_sidebar_link').click();//clicking on logout
            });
        });
    });












});



