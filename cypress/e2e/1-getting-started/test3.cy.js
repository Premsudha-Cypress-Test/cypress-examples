describe('This is api testing', function () {
    it('test 1', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users'
        }).then((response) => {
            expect(response.status).to.eq(200)
            response.body.forEach((users) => {
                cy.log(`user names= ${users.name}`)
                expect(users).to.have.property('email')
                expect(users.email).to.include('@')
            })
        })
    })
})