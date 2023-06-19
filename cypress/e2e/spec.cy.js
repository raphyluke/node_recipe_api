describe('Check if server is open and display without problem', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})