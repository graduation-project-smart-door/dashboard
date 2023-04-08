describe('Testing User Service', () => {
  it('should get users', () => {
    cy.request('GET', 'http://localhost:8000/api/v1/users').then((response) => {
      expect(response).to.have.property('status', 200)

      expect(response.body).to.not.be.null

      expect(response.body).to.have.property('id')

      expect(response.body).to.have.property('first_name')

      expect(response.body).to.have.property('last_name')

      expect(response.body).to.have.property('patronymic')

      expect(response.body).to.have.property('email')

      expect(response.body).to.have.property('phone')

      expect(response.body).to.have.property('role')

      expect(response.body).to.have.property('created_at')
    })
  })

  it('should get user by id', () => {
    cy.request('GET', 'http://localhost:8000/api/v1/users').then((response) => {
      expect(response).to.have.property('status', 200)

      expect(response.body).to.not.be.null

      expect(response.body).to.have.property('id')

      expect(response.body).to.have.property('first_name')

      expect(response.body).to.have.property('last_name')

      expect(response.body).to.have.property('patronymic')

      expect(response.body).to.have.property('email')

      expect(response.body).to.have.property('phone')

      expect(response.body).to.have.property('role')

      expect(response.body).to.have.property('created_at')
    })
  })
})
