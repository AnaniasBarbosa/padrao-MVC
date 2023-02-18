# PADRÃO DE ARQUITETURA MVC

Este projeto faz parte de uma série de estudos dedicados aos Padrões de Arquitetura, sendo este focado ao estudo do padrão de arquitetura de software MVC.

## O que é um Padrão na Arquitetura de Software?

De forma muito resumida, um padrão arquitetural é uma solução já estudada, testada e documentada de um problema recorrente.

### O que é o Padrão MVC?

O MVC (Model, View e Controller) é um padrão que têm como um dos principais objetivos separar e organizar as responsabilidades do nosso código.

### Como é organizado um projeto que utiliza o Padrão MVC?

No MVC o projeto é organizado em três camadas. A camada Model é responsável por cuidar dos dados. A View será a camada que cuidará da visualização, não podendo conter nenhuma regra de negócio. Já a última é camada Controller, esta é responsável em fazer o intermédio entre a camada de Model e View, recebendo todas as requisições, buscando os dados na Model quando necessário e retornando uma resposta para que View exiba, esta camada deve conter o mínimo ou nenhuma regra de negócio.

### Mas quais são as funcionalidades deste projeto?

É um currículo construído com uma simples página web, como já dito anteriormente, criado apenas para estudar os conceitos de MVC. Se atente a organização do projeto e não aos recursos que esta aplicação proporciona.

### Quais foram as tecnologias utilizadas na aplicação?

- Node.js
- TypeScript
- Express
- Ts-node
- http-errors
- EJS
- JavaScript
- HTML
- CSS

### Como executar este projeto?

É necessário ter uma versão do **Node.Js** instalado para executar a aplicação.
Você pode baixar neste link: <https://nodejs.org/en/download/>

Após clonar execute os seguintes comandos:

```npm
  npm install
  npm run dev
```

O comando **npm install** irá instalar as dependências do projeto e o **run dev** irá executar o projeto.
