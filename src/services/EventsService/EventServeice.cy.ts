describe('test testing', () => {
  it('should get posts', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
      expect(response).to.have.property('status', 200)

      expect(response.body).to.not.be.null
    })
  })
})
