describe('Создание администратора', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:4173/admins/create')
  })

  it('looks inside the head content using `cy.document()`', () => {
    cy.document()
  })

  it('Отправляет данные на сервер', () => {
    cy.intercept('POST', 'https://jsonplaceholder.typicode.com/users').as('createAdmin')
    // Задаем данные для формы

    const firstName = 'Александр'
    const lastName = 'Малеев'
    const patronymic = 'Вадимович'
    const email = 'alexgay@im.ya'
    const phone = '8 800 555 3535'

    // Используем метод cy.intercept() для перехвата запросов

    // Заполняем форму данными
    cy.get('input[placeholder="Имя"]').type(firstName)

    cy.get('input[placeholder="Фамилия"]').type(lastName)

    cy.get('input[placeholder="Отчество"]').type(patronymic)

    cy.get('input[data-testid="email"]').type(email)

    cy.get('input[placeholder="Телефон"]').type(phone)

    // Нажимаем кнопку "Создать"
    cy.get('button[data-testid="submit"]').click()

    // Ожидаем отправки запроса
    cy.wait('@createAdmin').then(({ response }) => {
      if (!response) return

      expect(response.statusCode).to.equal(201)
    })
  })
})
