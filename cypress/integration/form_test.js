describe("pizza app",() => {

    const nameInput = () => cy.get("input[name=name]");
    const sizeSelect = () => cy.get("select[name=size]");
    const topping1Input = () => cy.get("input[name=topping1]");
    const topping2Input = () => cy.get("input[name=topping2]");
    const topping3Input = () => cy.get("input[name=topping3]");
    const topping4Input = () => cy.get("input[name=topping4]");
    const specialInput = () => cy.get("input[name=special]");
    const orderBtn = () => cy.get('button[id="order-button"]');

    beforeEach(()=>{
        cy.visit("http://localhost:3000/pizzaform")
    });

    it("check if the right elements are showing",() => {
        nameInput().should('exist')
        sizeSelect().should('exist')
        topping1Input().should('exist')
        topping2Input().should('exist')
        topping3Input().should('exist')
        topping4Input().should('exist')
        specialInput().should('exist')
        orderBtn().should('exist')
    });
    it("checking the name&special input and if i can add text",() => {
        nameInput()
          .should("have.value","")
          .type("Greg")
          .should("have.value","Greg")
        specialInput()
          .should("have.value","")
          .type("no cheese")
          .should("have.value","no cheese")
    });

    it("checking topping checkboxs",() => {
        topping1Input().click()
        topping2Input().click()
        topping4Input().click()
    });

    it("check to see if i can submit form",() => {
        nameInput().type("Greg")
        sizeSelect().select("L")
        topping2Input().click()
        topping4Input().click()
        orderBtn().click()
    });
})