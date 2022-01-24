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

it.only("Open the Guru99 and register", () => {
    cy.viewport(1800, 700)
    cy.visit("https://demo.guru99.com/")
})

