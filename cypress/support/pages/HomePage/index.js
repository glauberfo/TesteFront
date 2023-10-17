/// <reference types="cypress" />
const el = require('./elements').ELEMENTS;

/**
 * @author Glauber Oliveira
 */

class Home {
 
acessarPaginaTeste( termoPesquisa){

cy.contains(termoPesquisa)
.click();
}

}
export default new Home();