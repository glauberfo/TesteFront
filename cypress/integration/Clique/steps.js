const faker = require('faker')
faker.locale = "pt_BR";
import Cliques from '../../support/pages/CliquePage';

Then(/^devo clicar nos tres botoes disponiveis$/, () => {
	Cliques.clicarTodosBotoes();
});

Then(/^devo clicar em todos os botoes edit$/, () => {
	Cliques.clicaTodosBotoesEdit();
});

Then(/^devo clicar em todos os botoes delete$/, () => {
	Cliques.clicaTodosBotoesDelete();
});
