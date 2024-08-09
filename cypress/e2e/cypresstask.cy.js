describe('Changing', () => {
    it('Login', () => {
        cy.login('Gugs120.1751900081212947','Kroos777')
        cy.get('.side_account_list > :nth-child(3) > a').click()
        cy.get('#AccountFrm_firstname').clear()
        cy.get('#AccountFrm_firstname').type('Oto') 
        cy.get('#AccountFrm_lastname').clear()    
        cy.get('#AccountFrm_lastname').type('James')
        cy.get('.col-md-12 > .btn-orange').click() 
        cy.contains('Success: Your account has been successfully updated.') 
        cy.get('.side_account_list > :nth-child(5) > a').click()
        cy.get('tr > .pull-right > .btn').click() 
        cy.get('#AddressFrm_address_1').clear()
        cy.get('#AddressFrm_address_1').type('Gmirebi')
        cy.get('#AddressFrm_city').clear()
        cy.get('#AddressFrm_city').type('Gori')
        cy.get('.col-md-12 > .btn-orange').click()
        cy.get('.side_account_list > :nth-child(4) > a').click()
        cy.get('#PasswordFrm_current_password').type('Kroos777')
        cy.get('#PasswordFrm_password').type('Kroos999')
        cy.get('#PasswordFrm_confirm').type('Kroos999')
        cy.get('.col-md-12 > .btn-orange').click()
        cy.contains('Success: Your password has been successfully updated.')
    })
})