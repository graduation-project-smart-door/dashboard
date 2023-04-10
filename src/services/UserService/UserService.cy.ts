import { ApiUserType } from '@/types/user.type'

describe('Testing User Service', () => {
  let user = {} as ApiUserType

  beforeEach(() => {
    cy.visit('/pages/users')

    cy.fixture('user').then((userData) => {
      user = userData
    })
  })

  it('should get users', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
      expect(response).to.have.property('status', 200)

      expect(response.body).to.not.be.null
    })
  })

  it('should get user by id', () => {
    cy.intercept(
      {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users/1',
      },
      {
        fixture: 'user',
      }
    ).as('getById')

    cy.visit('/sign-in')

    cy.wait('@getById').then(({ response }) => {
      if (!response) return

      expect(response.statusCode).to.be.equal(200)

      expect(response.body).to.have.property('id', user.id)

      expect(response.body).to.have.property('first_name', user.first_name)

      expect(response.body).to.have.property('last_name', user.last_name)

      expect(response.body).to.have.property('patronymic', user.patronymic)

      expect(response.body).to.have.property('created_at', user.created_at)

      expect(response.body).to.have.property('updated_at', user.updated_at)

      expect(response.body).to.have.property('person_id', user.person_id)

      expect(response.body).to.have.property('image', user.image)

      expect(response.body).to.have.property('email', user.email)

      expect(response.body).to.have.property('phone', user.phone)

      expect(response.body).to.have.property('role', user.role)
    })
  })
})
