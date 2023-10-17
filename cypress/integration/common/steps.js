const faker = require('faker')
faker.locale = "pt_BR";
import Home from '../../support/pages/HomePage';

Given(/^que eu esteja na tela home$/, () => {
	cy.visit('/');
});

When(/^realizo um clique em "([^"]*)"$/, (pesquisa) => {
	Home.acessarPaginaTeste(pesquisa)
});


