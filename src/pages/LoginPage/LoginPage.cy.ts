describe('Login testing', () => {
  beforeEach(() => {
    cy.visit('/sign-in')
  })

  it('looks inside the head content using `cy.document()`', () => {
    cy.document()
  })

  it('should login with valid user', () => {
    cy.intercept('POST', 'http://localhost:8000/api/v1/users').as('loginAdmin')

    const email = 'example@test.com'
    const password = 'qwerty123456'

    cy.get('input[placeholder="Введите почту"]').type(email)

    cy.get('input[placeholder="Введите пароль"]').type(password)

    cy.get('button[data-testid="submit"]').click()

    cy.wait('@loginAdmin').then(({ response }) => {
      if (!response) return

      expect(response.statusCode).to.equal(201)
    })
  })

  it('should get error while validation', () => {
    cy.intercept('POST', 'http://localhost:8000/api/v1/users').as('loginAdmin')

    const email = 'exampletest.com'
    const password = 'qwerty123456'

    cy.get('input[placeholder="Введите почту"]').type(email)

    cy.get('input[placeholder="Введите пароль"]').type(password)

    cy.get('button[data-testid="submit"]').click()

    cy.get('.el-form-item__error').contains('email is not a valid email')
  })

  it('should have error duplicate email', () => {
    cy.intercept('POST', 'http://localhost:8000/api/v1/users').as('loginAdmin')

    const email = 'example@test.com'
    const password = 'qwerty123456'

    cy.get('input[placeholder="Введите почту"]').type(email)

    cy.get('input[placeholder="Введите пароль"]').type(password)

    cy.get('button[data-testid="submit"]').click()

    cy.wait('@loginAdmin').then(({ response }) => {
      if (!response) return

      expect(response.statusCode).to.equal(201)
    })

    cy.visit('/sign-in')

    cy.get('input[placeholder="Введите почту"]').type(email)

    cy.get('input[placeholder="Введите пароль"]').type(password)

    cy.get('button[data-testid="submit"]').click()

    cy.wait('@loginAdmin').then(({ response }) => {
      if (!response) return

      expect(response.statusCode).to.equal(400)

      expect(response.body.message).to.equal('email already exists')
    })
  })
})
