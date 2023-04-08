describe('Testing User Service', () => {
  it('should get statistic', () => {
    cy.request('GET', 'http://localhost:8000/api/v1/statistic').then((response) => {
      expect(response).to.have.property('status', 200)
    })
  })
})
