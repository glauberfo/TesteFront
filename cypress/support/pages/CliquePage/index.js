/// <reference types="cypress" />
const el = require('./elements').ELEMENTS;

/**
 * @author Glauber Olivera
 */



class Cliques {
 
clicarTodosBotoes( ){

cy.get(el.bt1)
.should("be.visible")
.click();
cy.get(el.bt2)
.should("be.visible")
.click();
cy.get(el.bt3)
.should("be.visible")
.click();

}

clicaTodosBotoesEdit(count = 1){
    
    cy.log(count)
    if (count > 10) 
      cy.log("Todos os cliques foram realizados")
    else {
    
        if (cy.get(':nth-child('+count+') > :nth-child(7) > [href="#edit"]')
            .should("be.visible")
            .scrollIntoView()
            .click()) {
              ++count;
                this.clicaTodosBotoesEdit(count)
        }
        }

}

clicaTodosBotoesDelete(count = 1){
    
    cy.log(count)
    if (count > 10) 
      cy.log("Todos os cliques foram realizados")
    else {
      
        if (cy.get(':nth-child('+count+') > :nth-child(7) > [href="#delete"]')
            .should("be.visible")
            .scrollIntoView()
            .click()) {
              ++count;
                this.clicaTodosBotoesDelete(count)
        }
        }

}

}
export default new Cliques();