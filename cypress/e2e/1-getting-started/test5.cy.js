describe('User Registration', () => {
    beforeEach(() => {
        cy.visit('/register');
    });

    it('Registers multiple users with dynamic fields', () => {
        cy.fixture('users.json').then((users) => {
            users.forEach((user) => {
                cy.get('#name').type(user.name);
                cy.get('#email').type(user.email);
                cy.get('#password').type(user.password);

                // Handle optional field
                if (user.extraField) {
                    cy.get('#extraField').type(user.extraField);
                }

                cy.get('#submit').click();
                cy.contains('Registration successful').should('be.visible');

                // Reload the page before next iteration
                cy.reload();
            });
        });
    });
});
