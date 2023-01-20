# Zen Rest API

![Capa](./assets/cover.jpg)

## Sobre

Escreva projetos escalaveis em semanas. Cobrindo aspectos
importantes, de negócio, arquitetura e qualidade.

## Motivação

Quanto maior for o seu projeto, maior a necessidade de se
ter um pedaço de software totalmente portavel e expansivo.
Então nesta série você vai aprender tecnicas avançadas para se
entregar um projeto completo.

## O que você vai aprender?

* Criação de uma API
* Criação de um serviço
* Interceptar chamadas
  * Timestamp (Impressão de tempo)
  * Consumo de um serviço
* Persistir
  * Criação de um novo serviço persistente
  * Integração com o serviço customizavel
* Testar
* Publicar
  * Criação de um Dockerfile
  * Utilização do fly.io
* Conclusão

## Apresentação

Olá eu sou o Kaique, tenho em média 17 anos de experiência
com desenvolvimento e 28 anos de idade no periodo atual em que escrevo,
minhas intenções com um trabalho como este é oferecer conteúdo o suficiente
para que o leitor possa tirar proveito de habilidades valiosas para o mercado.

## Introdução

Neste projeto nós vamos utilizar a ferramenta chamada `feathers` que
esta chegando a sua versão 5 e conta com a presença da linguagem `Typescript`
que é bastante utilizada hoje em dia, no mercado, para você reduzir erros
comuns de digitação e poder contar com fontes principais de verdade.

## Criação de uma API

Para começar o projeto você deve criar um diretório para o projeto:

```bash
mkdir cabine-de-controle
cd cabine-de-controle
```

Normalmente esta sequência de comandos faz com que o diretório
seja criado e você consiga acessa-lo de forma objetiva.

Depois de criar o lugar onde o seu projeto vai morar, você pode
dar inicio a criação do dele:

```bash
npm create feathers@pre api
```

Uma sequência de perguntas serão feitas para que você tenha o seu projeto definido:

![Primeiro Exemplo](./assets/first-section-01.png)

![Segundo Exemplo](./assets/first-section-02.png)

Por fim este sera o resultado do processo de criação.
Depois acesse o projeto:

```bash
cd api/
```

E com isso você pode continuar para os próximos passos.

## Criação de um serviço

Nosso primeiro serviço que é um modo abstrado de
tratar a forma com que a lógica do consumo se aplica aqui,
pode ser criado da seguinte forma:

```bash
npx feathers generate service
```

Então você obtera a seguinte tela:

![Primeiro resultado](./assets/second-section-01.png)

Faça as mesmas escolhas e o teu serviço estara criado.
Algo importante que não podemos esquecer de mencionar,
que agora você pode visualizar a sua aplicação:

```bash
npm run dev
```

Isto servira a sua aplicação que pode ser acessada através do endereço:

```
http://localhost:3030/v1/stocks
```

O resultado sera o seguinte:

```json
[]
```

Não temos nada ainda nesta aplicação. Mas ela esta funcionando perfeitamente se você esta vendo um "array" vazio.

## Inteceptar chamadas

Aqui você poder criar um interceptador para diferentes ações, uma para que consuma o conteúdo e outra para adicionar o propósito que imaginar, o nosso é só adicionar
um campo para registrar a data em que foi feita a requisição.

```bash
npx feathers generate hook
```

Isto resulta no seguinte ponto:

![Primeiro exemplo](./assets/third-section-01.png)

Com isto o seu hook foi criado e o conteúdo dele devera ser o seguinte após você fazer a seguinte edição:

```
context.data.timestamp = new Date().getTime()
```

Adicionando esta linha no interceptador você tera um valor
numerico com o dado esperado.

Depois basta adicionar no arquivo `stock.ts` no espaço chamado `before` que esta relacioando a execução antes mesmo de passarmos pelo código que esta presente na classe, mais precisamente em `create`.

Nós fizemos isso apenas para conhecer melhor o projeto e termos algo sendo executado. Mas talvez ele seja útil no futuro para você.

### Consumo de uma API (Avançado)

A partir deste momento nós adicionaremos um módulo que ajudara a consumir uma API externa de forma organizada e expansivel.

```bash
npm i --save ts-retrofit
```

Depois da instalação basta você criar um cliente para o serviço que deseja consumir e o resultado deve ser o seguinte:

