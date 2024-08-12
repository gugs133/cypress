Cypress.Commands.add("invalidlogin", (email,password) => {
    

    cy.contains('Home')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form > h2').should('be.visible')
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)
    cy.get('[data-qa="login-button"]').click()

    
})