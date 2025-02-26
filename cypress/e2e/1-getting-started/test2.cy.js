describe('test amazon add to cart scenario',()=>{
    it("Test Case 1",()=>{
        cy.visit("https://www.amazon.in/")
        cy.get('.a-truncate-cut').eq(0).click()
        cy.get('#a-autoid-1-announce').click()
        cy.get('[class="nav-line-2"]').eq(2).click({force:true})
        cy.get('[class="a-icon a-icon-small-trash"]').click()
    })
})