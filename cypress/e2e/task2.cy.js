

describe('Registration and then login', () => {
    it('Valid Rergistration', () => {
        cy.visit('/')

        cy.registration2()

    })

    
    it('Login with valid credentials', () => {
        cy.visit('/')
        cy.fixture("example.json").then((userData)=>{

            cy.validlogin(userData.email,userData.password)
        })



        
       
            })
            it.only('Login with invalid credentials', () =>{
                cy.visit('/')
                cy.fixture("invalidlog.json").then((userData)=>{
    
                    cy.invalidlogin(userData.email,userData.password)
        })
    })
})




        
        
    
        
        

    
