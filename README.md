# Predialize

## Conteúdo

1. [Visão Geral](#visão-geral)
2. [Tecnologias](#tecnologias)
3. [Pré-requisitos](#pré-requisitos)
4. [Configuração do Projeto](#configuração-do-projeto)
5. [Executando a API](#executando-a-api)
6. [Executando a Aplicação Angular](#executando-a-aplicação-angular)
7. [Contribuição](#contribuição)
8. [Licença](#licença)

## Visão Geral

Este projeto consiste em uma aplicação Angular (front-end) que se comunica com uma API Node.js (back-end). A API utiliza Express para criar um servidor web simples, enquanto a aplicação Angular é construída usando o Angular CLI.

## Tecnologias

- **Angular CLI**: Ferramenta de linha de comando para Angular.
- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para construção de aplicativos web Node.js.
- **Nodemon**: Utilitário que monitora alterações nos arquivos e reinicia automaticamente o servidor.
- **MongoDB**: Banco de dados NoSQL.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes pré-requisitos instalados:

- [Node.js](https://nodejs.org/) - Versão LTS (20.11.0 LTS recomendada)
- [Angular CLI](https://angular.io/cli) - Execute `npm install -g @angular/cli` para instalar globalmente
- [MongoDB](https://www.mongodb.com/) - Banco de dados NoSQL

## Configuração do Projeto

1. Clone o repositório:

    ```bash
    git clone https://github.com/Bran00/clients-dashboard
    cd seu-repositorio
    ```

2. Configurar a API:

    ```bash
    cd api
    npm install
    ```

3. Configurar a Aplicação Angular:

    ```bash
    cd ../app
    npm install
    ```

## Executando a API

Para iniciar a API, execute os seguintes comandos:

```bash
cd api
npm start
```

A API estará disponível em [http://localhost:3000](http://localhost:3000).

## Executando a Aplicação Angular

Para iniciar a aplicação Angular, execute os seguintes comandos:

```bash
cd app
ng serve --port 4200
```

Abra o navegador e acesse [http://localhost:4200](http://localhost:4200).

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Siga as diretrizes de contribuição e abra um Pull Request com suas melhorias.

## Licença

Este projeto é licenciado sob a Licença ISC - veja o arquivo [LICENSE](LICENSE) para mais detalhes.