### Sobre o Projeto
Este projeto é uma implementação de um caso de uso de um serviço de entrega de vídeo via streaming na internet. O foco principal está em criar uma API que gerencie conteúdos (filmes, séries e documentários), atores e usuários, além de fornecer uma interface simples para visualizar essas informações.

### Objetivo
O objetivo deste projeto é demonstrar como construir uma aplicação básica para gerenciar e consultar históricos de vídeos assistidos por clientes. O sistema deve permitir que os clientes visualizem conteúdos estrelados por seus atores preferidos e que mantenham um registro dos filmes, séries ou documentários assistidos, junto com a data de visualização.

### Funcionalidades Implementadas
- Gerenciamento de Conteúdos:
  - Armazenamento de informações sobre filmes, séries e documentários, incluindo título, categoria e tipo.
  - Associação de atores aos conteúdos.
- Gerenciamento de Atores:
  - Armazenamento de informações sobre atores, incluindo nome, nome real, biografia e data de nascimento.
  - Consulta de conteúdos estrelados por um ator específico.
- Gerenciamento de Usuários:
  - Armazenamento de informações sobre clientes e seus dependentes.
  - Registro histórico dos conteúdos assistidos por cada cliente, incluindo a data de visualização.
  - Componentes do Projeto
  - Back-End: Node.js com Express
  - API RESTful: Construída com Node.js e Express, fornece endpoints para gerenciar e consultar conteúdos, atores e usuários.
- Banco de Dados: Utiliza MongoDB para armazenar informações dos conteúdos, atores e usuários.
- Front-End: HTML e JavaScript
  - Interface Simples: Uma página HTML com JavaScript puro que consome a API e exibe listas de conteúdos, atores e usuários.
  - Interação Dinâmica: Utiliza JavaScript para buscar dados da API e preencher a página de forma dinâmica.
### Como Utilizar
- Configuração do Servidor: Instale as dependências necessárias e inicie o servidor Node.js para disponibilizar a API.
  
  ```bash
  cd server
  npm install
  ```
- Configuração do client: Abra o arquivo index.html em um navegador para visualizar os conteúdos, atores e usuários cadastrados.
  
    ```bash
  cd client
  ```
