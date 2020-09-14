/// <reference types="cypress" />

it("should display header", () => {
  cy.visit("http://localhost:8080");
  cy.findByText("My App");
  cy.findByLabelText("Enter your name:").type("Cory");
  cy.findByText("Say my name!").click();
  cy.findByText("Hi Cory");
});
