# 📝 Task Manager

Este é um projeto de gerenciamento de tarefas (tasks) desenvolvido com Node.js e MySQL. Ele oferece operações básicas de CRUD (Create, Read, Update e Delete) para ajudar na organização e acompanhamento de tarefas.

![Tela de cadastro das tasks](public/img/Captura%20de%20tela%202024-02-18%20005452.png)
![Tela de apresentação de todas as tasks](public/img/Captura%20de%20tela%202024-02-18%20005509.png)

## 🚀 Funcionalidades

- **Cadastro de Tarefas**: Crie novas tarefas com título, descrição, prazo e status.
- **Visualização de Tarefas**: Veja todas as tarefas cadastradas com suas informações detalhadas.
- **Atualização de Tarefas**: Edite as informações de uma tarefa existente, como título, descrição, prazo e status.
- **Remoção de Tarefas**: Delete tarefas que não são mais necessárias.
- **Filtragem de Tarefas**: Filtragem de tarefas por status, prazo, etc., para facilitar a visualização.

## 🔧 Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento JavaScript para construir aplicações de servidor.
- **Express.js**: Framework web para Node.js, usado para criar APIs RESTful.
- **MySQL**: Banco de dados relacional para armazenar e gerenciar os dados das tarefas.
- **Handlebars**: Sistema de templates para a renderização de páginas HTML.
- **Bootstrap**: Framework front-end para design responsivo e facilitar o desenvolvimento de interfaces de usuário atraentes.
- **Sequelize (opcional)**: ORM (Object-Relational Mapping) para facilitar a integração com o MySQL e simplificar as operações de banco de dados.

## ⚙️ Pré-requisitos

- Node.js instalado no seu sistema (você pode baixá-lo em https://nodejs.org/).
- MySQL Server instalado localmente ou em um servidor remoto.

## ⚙️ Configuração

1. Clone este repositório para o seu ambiente local.
2. Instale as dependências do projeto usando o comando `npm install`.
3. Configure as variáveis de ambiente necessárias para a conexão com o banco de dados em um arquivo `.env`, se aplicável.
4. Execute o script de criação do banco de dados e tabelas, se necessário.
5. Inicie o servidor local usando o comando `npm start`.
6. Acesse o aplicativo no seu navegador através do endereço `http://localhost:3000`.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue se você encontrar algum problema ou enviar um pull request com melhorias.

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
