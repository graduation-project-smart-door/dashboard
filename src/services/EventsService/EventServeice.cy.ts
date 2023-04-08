describe('test testing', () => {
  it('should get posts', () => {
    cy.request('GET', 'http://localhost:8000/api/v1/events').then((response) => {
      expect(response).to.have.property('status', 200)

      expect(response.body).to.not.be.null

      expect(response.body).to.have.property('id')

      expect(response.body).to.have.property('first_name')

      expect(response.body).to.have.property('last_name')

      expect(response.body).to.have.property('patronymic')

      expect(response.body).to.have.property('date')

      expect(response.body).to.have.property('status')
    })
  })
})
