# Chat Application

### Aplicação desenvolvida durante a 5ª NLW (Next Level Week) promovida pela Rocketseat. 🚀

Essa aplicação tem como finalidade ser implementado em diversos sites com o intuito de fornecer um bate-papo em tempo real, 
que pode ser utilizados em atendimentos e suporte ao cliente.

## 🛠 Tecnologias/Linguagens
Para a construção deste projeto foram utilizados as seguintes ferramentas:
* [__Typescript__](https://www.typescriptlang.org/)  4.2.4
* [__Node.js__](https://nodejs.org/en/)  14.16.1
* [__Express__](https://expressjs.com/pt-br/)  4.17.1
* [__TypeORM__](https://typeorm.io/)  0.2.32
* [__Yarn__](https://yarnpkg.com/)  1.22.5

## Get Started
Clonando o projeto:
~~~bash
 - git clone https://github.com/Igor2502/NLW5-NodeJS.git
 - cd NLW5-NodeJS
~~~
Instalando dependências:
~~~bash
 - yarn install
~~~
__Obs.:__ Neste projeto foi utilizado o banco de dados SQLite, caso queira substitui-lo basta alterar o arquivo _ormconfig.json_ 
onde o atributo _type_ seja o banco de dados, e o _name_ o nome desse banco.
<br><br>
Criando as tabelas do banco de dados via CLI do TypeORM:
~~~bash
 - yarn typeorm migration:run
~~~
Iniciando a aplicação:
~~~bash
 - yarn dev
~~~
<br>
