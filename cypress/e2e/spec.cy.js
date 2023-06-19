describe('Check if server is open and display without problem', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
  it('click on button', () => {
    cy.get('.btn').click()
  })
})