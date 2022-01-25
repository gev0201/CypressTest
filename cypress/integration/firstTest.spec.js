/// <reference types="Cypress" />

// describe("Open guru99 Demo", () => {
//     context("login", () => {
//         it("aaaaaaaaa", () => {});
//     });
// });

// it('By Tag value', () => {
//     cy.visit("https://demo.guru99.com/")
//     cy.get('[name = "emailid"]')
// })

// it.only("Open the Guru99 and register", () => {
//     // cy.viewport(1800, 700)
//     cy.visit("https://demo.guru99.com/")
// })

it("Open the Guru99 and register", () => {
    cy.visit("http://demo.guru99.com/")
    cy.get("[name='emailid']")
        .type("gev@mail.com")
        // .should('have.value', "gev@mail.com")
        // .and('be.visible')
        .then( input=>{
            expect(input).to.have.value("gev@mail.com")
        })
    cy.get("[name='btnLogin']").click()
    cy.get("tbody").find('td').eq(2).then(function(txt){
        cy.contains('Bank Project').click()
        cy.get('[name="uid"]').type(txt.text())
    })
})