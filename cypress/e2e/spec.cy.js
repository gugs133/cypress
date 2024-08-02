describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com')
    
    //1. Launch browser
//2. Navigate to url 'http://automationexercise.com'
//3. Verify that home page is visible successfully
cy.contains("Full-Fledged practice website for Automation Engineers")
//4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
//5. Verify 'New User Signup!' is visible
cy.get('.signup-form > h2').should("have.text", "New User Signup!")
//6. Enter name and email address 
cy.get('[data-qa="signup-name"]').type("guga")
cy.get('[data-qa="signup-email"]').type("gk11vits13@gmail.com")
//7. Click 'Signup' button
cy.get('[data-qa="signup-button"]').click()
//8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
cy.contains("Enter Account Information")
//9. Fill details: Title, Name, Email, Password, Date of birth
cy.get('#id_gender1').check()
cy.get('[data-qa="password"]').type("passsworrd")
cy.get('[data-qa="days"]').select(13)
cy.get('[data-qa="months"]').select("December")
cy.get('[data-qa="years"]').select("2000")
//10. Select checkbox 'Sign up for our newsletter!'
cy.get('#newsletter').click()
//11. Select checkbox 'Receive special offers from our partners!'
cy.get('form > :nth-child(8)').click()
//12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
cy.get('[data-qa="first_name"]').type("Guga")
cy.get('[data-qa="last_name"]').type("Kvitsinadze")
cy.get('[data-qa="company"]').type("Smart Academy")
cy.get('[data-qa="address"]').type("Tbilisi.Georgia")
cy.get('[data-qa="address2"]').type("Tbilisi.Georgia")
cy.get('[data-qa="country"]').select("India")
cy.get('[data-qa="state"]').type("State")
cy.get('[data-qa="city"]').type("Goa")
cy.get('[data-qa="zipcode"]').type(2178210)
cy.get('[data-qa="mobile_number"]').type(128193724908)
//13. Click 'Create Account button'
cy.get('[data-qa="create-account"]').click()
//14. Verify that 'ACCOUNT CREATED!' is visible
cy.get('b')
//15. Click 'Continue' button
cy.get('[data-qa="continue-button"]').click()
//16. Verify that 'Logged in as username' is visible
//17. Click 'Delete Account' button
//18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  })
})

