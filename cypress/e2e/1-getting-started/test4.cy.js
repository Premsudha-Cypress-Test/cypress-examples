describe('Fixture Testing with forEach', () => {
    it('test 1', () => {
        
        cy.fixtures(users).then((users)=>{
            cy.visit('https://example.com/login')
            users.forEach((users)=>{
                cy.get('').type(users.email)
                cy.get('').type(users.password)
                cy.log(`user emails= ${users.email}`)
            })
        })
    });
});
