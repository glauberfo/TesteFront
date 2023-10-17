Projeto de automação em Cypress

- [Instalação e uso da arquitetura](#instalação-e-uso-da-arquitetura)
- [Camadas da arquitetura](#camadas-da-arquitetura)
- [Plugins Necessários](#plugins-necessários)
- [Execução por tags](#execução-por-tags)
- [Envio de e-mails](#envio-de-e-mails)
- [Configurações Adicionais](#configurações-adicionais)
  - [Geração de arquivos JSON sob demanda](#geração-de-arquivos-json-sob-demanda)
  - [Configuração das variáveis de ambiente](#configuração-das-variáveis-de-ambiente)

---
Para executar o projeto deve ter o node instalado e seguir os seguintes passos:

## Instalação e uso da arquitetura
- Instale no mínimo a versão LTS do [Node.js](https://nodejs.org/en/download/);
- Instale o [Docker](https://docs.docker.com/get-docker/) para poder utilizar o plugin de envio de e-mails;
- Instale o [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) ou [Git for Windows](https://gitforwindows.org/) (para ter acesso ao Git Bash);
  - (Windows apenas) Configure o **npm** para que use o ```bash``` como shell padrão:
    - `npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"` (64 bits)
    - `npm config set script-shell "C:\\Program Files (x86)\\git\\bin\\bash.exe"` (32 bits)
    - Para mais informações, acesse [este link](https://stackoverflow.com/questions/23243353/how-to-set-shell-for-npm-run-scripts-in-windows).
- Baixe este repositório ou faça um ```git clone```;
- Abra o diretório do projeto e execute o comando:
    - `npm install`
- Defina as variáveis de ambiente como demonstrado em [Configurações Adicionais](#configurações-adicionais)
- Para abrir a interface de execução do Cypress, execute no diretório do projeto:
    - `npm run cy:open`

```
cypress4testautomationapi/
	├─  cypress/
		│        
		│  
		│        
		├── fixtures/
		│    ├── *.json      
		│  	 ├── *.csv   	
		│    └── *.png    
		│   
		├── integration/  
		│    ├── <categorias>/   
		│	 │		└── <steps.js>/
		│    └── <Features>Tests.Features
		│        
		├── plugins/
		│    └── index.js 
		│        
		├── reports/
		│	 └── cucumber-json/
		│	 └── cucumberfiles (*.json, *html) 
		│
		├── support/    
		│	 └── Pages/
		│	 │		└── <Menus>/
		│    │    			└── <index>/
		│	 │				└── <elements>/
		│    └── videos/    
	    │   
		├── environmentsConfig/  
		├── node_modules/  
		├── cypress.json  
		├── package-lock.json  
		├── package.json  
		└── README.md```
```


## Camadas da arquitetura
 - **fixtures:** arquivos para massa de dados estática para os testes (csv, png, xlsx, txt);
 - **integration:** arquivos de testes separados em categorias/módulos;
 - **plugins:** plugins que são utilizados na solução ficam dentro do arquivo "plugins/index.js"; -
 - **reports:** diretório com o relatório de execução dos testes; - 
 - **support:** camada com comandos Cypress customizados e sobrescritas globais: -
 - **videos:** geração opcional de videos das execução dos testes; - 
 - **environmentsConfig:** diretório com os arquivos de configuração por ambiente; - 
 - **node_modules:** arquivos ou diretórios que podem ser carregados pelo Node.js; - 
 - **cypress.json:** arquivo de configuração do Cypress; - 
 - **package-lock.json:** gerado automaticamente com as instalações e atualizações de pacotes; -
 
## Plugins Necessários
 - **Cucumber (Gherkin) Full Support** -
 - **Cuke Step Definition Generator** -
 - **Cypress Helper** -
 - **Cypress Snippets** -
 - **YAML** -
