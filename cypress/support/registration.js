Cypress.Commands.add("registration", () => {
    cy.visit('https://automationteststore.com')


    let email = (Math.random())
    let name = (Math.random())
    
    cy.get('#customer_menu_top > li > a').click()
    cy.get('#customer_menu_top > li > a').click()
    cy.get('#accountFrm > fieldset > .btn').click()
    cy.get('#AccountFrm_firstname').type('Guga')
    cy.get('#AccountFrm_lastname').type('Kvitsinadze')
    cy.get('#AccountFrm_email').type('gkvits'+email+'12@gmail.com')
    cy.get('#AccountFrm_address_1').type('Saakadze')
    cy.get('#AccountFrm_city').type('Tbilisi')
    cy.get('#AccountFrm_country_id').select('Georgia')
    cy.get('#AccountFrm_zone_id').select('Shida Kartli')
    cy.get('#AccountFrm_postcode').type(121231)
    cy.get('#AccountFrm_loginname').type('Gugs12'+ name)
    cy.get('#AccountFrm_password').type('Kroos777')
    cy.get('#AccountFrm_confirm').type('Kroos777')
    cy.get('#AccountFrm_agree').check()
    cy.get('.col-md-2 > .btn').click() 

})

