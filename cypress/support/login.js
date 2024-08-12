Cypress.Commands.add('login', (name,password) =>{
    cy.visit('https://automationteststore.com/')
    cy.get('#customer_menu_top > li > a').click()
    cy.get('#loginFrm_loginname').type(name)
    cy.get('#loginFrm_password').type(password)
    cy.get('#loginFrm > fieldset > .btn').click()

})