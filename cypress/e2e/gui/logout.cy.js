//Define a pre condição pra executar o teste (IT)
describe('Logout', () => {
    beforeEach(() => {
      cy.login()
      cy.visit('/')
    })
  
//Executa o teste de logout e valida a URL (baseURL + ...)
    it('successfully', () => {
      cy.logout()
  
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
  })