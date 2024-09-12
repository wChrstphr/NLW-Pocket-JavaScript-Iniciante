## Linguagem de programação

É uma maneira de dar instruções ao computador

> **Algoritmo**: é uma sequencia de passos lógicos e finitos para a solução de um problema específico

## Componentes de uma linguagem

- [x] Comentários
- [x] Declaração de variáveis (const, let)
- [x] Operadores (atribuição, concatenação, matemáticos, lógicos)
- [x] Tipos de dados (string, number, boolean)
- [x] Estrutura de dados (function, object, array)
- [x] Controle de fluxo (if/else)
- [x] Estrutura de repetição (for, while)

# Fases da resolução de um problema
1. Coletar os dados
2. Processar os dados (manipular, alterar, guardar entender...)
3. Apresentar os dados

## Escopo e variaveis
- [x] Variável -> let
- [x] Constante -> const
- [x] Escopo global é tudo fora de chaves {}
- [x] Escopo local é tudo dentro de chaves {}


## Tipos de dados
- [x] Strings (textos): repesentados entre " ", ' ', ou ``
- [x] Number: 1, 2, 4.52
- [x] Boolean: true, false


## Operadores
- (=) Atribuição
- (+) Operador de concatenação ou de soma
    - Concatena Strings
    - Soma valores numéricos
- **Operadores de comparação**
- (==) Igualdade
- (!=) Diferente
- (>, >=, <, <=) Maior, Maior igual, Menor, Menor igual
**Spread Operator**
- (...)

## Estrutura de dados
### Arrays
- [x] É uma lista que contém diferentes tipos de dados, representado por [ ]
- [x] Métodos de array: push, [forEach, find, filter, map] : HOF (Highet Order Functions){Sempre recebem uma função}

### Objetos
Vale ressaltar que tudo pode ser visto como um Objeto dentro do JavaScript utilizando do ponto '.' após o tipo
- "String".
- 2.0.
- meta.
```jsx
let meta = {
    value: "ler um livro por mês",
    checked: false
}
```
- [x] Atributos e métodos
- [x] Criação e manipulação de objetos
- [x] Acesso a propriedades de objetos

### Métodos e Funções
1. Métodos são feitos dentro dos objetos
2. Funções são desenvolvidas fora dos objetos

#### Funções
- [x] criar, passar argumento
- [x] executar
- [x] arrow function
```jsx
const criarMeta = () => {}
```
- [x] named function
```jsx
function criarMeta() {}
```

# Estruturas de repetição
- [x] while

# Estruturas condicionais
- [x] switch
- [x] if/else

# Módulos em Node.js
- [x] Importação de módulos (require, ComonJS)
- [x] Biblioteca 'inquirer' para criar prompts interativos
- [x] FS (file system)
## npm packages
- npm install inquirer

## JSON
- [x] JavaScript Object Notation (.json)
- [x] JSON.parse() -> Transforma de JSON para JavaScript
- [x] JSON.stringify -> Transforma de JavaScript para JSON

## Programação assíncrona e Promises
- [x] Uso de funções assíncronas (async/await)
    - [x] Promessas são as respostas que funções assíncronas fazem de um retorno, seja positivo ou negativo (ex: fazer um pedido acarreta numa promessa positiva 'Pedido feito!' ou negativa 'Pedido negado')
    - [x] Funções assíncronas esperam algo acontecer para depois dar prosseguimento ao código

