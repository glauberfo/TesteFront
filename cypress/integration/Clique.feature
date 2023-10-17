#language: pt
@Cliques
Funcionalidade: Clique
Como usuário, desejo realizar um clique em todos os botoes da pagina

    Contexto:  
    Dado que eu esteja na tela home

    @automatizado
    Cenário: Realizar um clique em cada botao
    Quando realizo um clique em "Challenging DOM"
    Então devo clicar nos tres botoes disponiveis

    @automatizado
    Cenário: Clicar em todos os botões edit
    Quando realizo um clique em "Challenging DOM"
    Então devo clicar em todos os botoes edit
    
    @automatizado
    Cenário: Clicar em todos os botões delet
    Quando realizo um clique em "Challenging DOM"
    Então devo clicar em todos os botoes delete