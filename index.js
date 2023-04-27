//EXERCÍCIOS AULA STRINGS E ARRAYS

/*
//Exercício 1 - Crie um programa que peça ao usuário para inserir o seu nome e sua cor favorita e imprima a mensagem: 

const nome = "Mailor";
const cor = "preta";
const frase = "A cor favorita do " +nome+ " é a cor " +cor;
const frase2 = `A cor favorita do ${nome} é a cor ${cor}`;
console.log(frase);
console.log(frase2);
*/

/*
//Exercício 2 - Peça para o usuário escrever uma frase e imprima no console a frase alterada, com:
//● Todas as letras maiúsculas;
//● Na língua do i (substituindo a vogal "o" por "i");
//● O tamanho da frase.

const frase = prompt('Escreva uma frase: ');
const fraseMaiuscula = frase.toUpperCase();
const linguaDoI = frase.replaceAll("o", "i");

console.log(fraseMaiuscula);
console.log(linguaDoI);
console.log(frase.length);
*/

/*
//Exercício 3
//● Crie um array com pelo menos 5 raças de cachorro
//● Peça para o usuário inserir um número de 0 a 4
//● Imprima no console a raça correspondente à posição escolhida pelo usuário

var cachorros = ["vira-lata", "poodle", "pinscher", "greyhound", "bulldog"];
let number = Number(prompt('Digite um número de 0 a 4'));
console.log('A raça correspondente ao número digitdado é: '+cachorros[number]);*/
/*

/*
//Exercício 4
//Para este exercício, comece criando um array com os valores: 1, 2, 3, 4, 5 e 6.
// 1. Determine o tamanho do array
// 2. Adicione o número 7
// 3. Remova os números 4 e 5
// 4. Determine o novo tamanho do array

var valores = [1, 2, 3, 4, 5, 6];
console.log(valores);
console.log(valores.length);
valores.push(7);
console.log(valores);
console.log(valores.length);
valores.splice(3,2);
console.log(valores);
console.log(valores.length);
*/

//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/*
//1.  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array 
console.log('a. ', array) //retorna resposta sem valores, já que não foram definidos na criação do array (undefined)

array = null /
console.log('b. ', array) //retorna nulo (null), ou seja, array sem informações

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)  //retorna o tamanho do array (agora de 11)

let i = 0
console.log('d. ', array[i]) //retorna i, que foi igualado ao array da posição 0, valendo 3

array[i+1] = 19
console.log('e. ', array) //retorna que o segundo valor do array (posição 1) vale 19, conforme o comando inserido anteriormente;

const valor = array[i+6]
console.log('f. ', valor) //retorna a variável valor, que tem valor 9 e está na posição 6 (i + 6);


//2. Leia o código abaixo com atenção
//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//valor impresso no console será: SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

/*
//1. 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:

//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const nomeDoUsuario = prompt('Digite seu nome: ');
const emailDoUsuario = prompt('Digite seu e-mail');
const frase = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`;
const frase2 = "O e-mail "+emailDoUsuario+" foi cadastrado com sucesso. Seja bem-vinda(o), "+nomeDoUsuario+"!";
console.log(frase);
console.log(frase2);
*/

/*
//2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
//a) Imprima no console o array completo
    
//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

var comidas = ["pizza", "x-bacon", "lasanha", "churrasco", "mousse"];
console.log(comidas);
console.log('Essas são minhas comidas preferidas: ', comidas); //não esquecer de utilizar vírgula ao invés de + para melhor visualização de elementos do array
var comidaUsuario = prompt('Qual é sua comida preferida? ');
comidas.splice(1, 1, comidaUsuario); //a partir do índice 1 (segunda comida) REMOVE 1 (ele mesmo) e SUBSTITUI pela comida informada pelo usuário
console.log('Essas são minhas comidas preferidas: ', comidas)
*/

/*
//3. Faça um programa, seguindo os passos:
    
//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
//c) Imprima o array no console
    
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
//e) Remova da lista o item de índice que o usuário escolheu.

//f) Imprima o array no console

var listaDeTarefas = [];
console.log(listaDeTarefas);
tarefa1 = prompt('Informe primeira tarefa');
tarefa2 = prompt('Informe segunda tarefa');
tarefa3 = prompt('Informe terceira tarefa');
listaDeTarefas.push(tarefa1, tarefa2, tarefa3);
console.log(listaDeTarefas);
var indice = prompt("Informe tarefa já realizada");
listaDeTarefas.splice(indice,1);
console.log(listaDeTarefas);
*/


//DESAFIOS

/*
//1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

var frase = prompt('Digite uma frase:');
console.log(frase);
fraseToArray = frase.split(" "); //converte cada palavra da frase em um elemento de um array, IGNORANDO os espaços
//fraseToArray2 = frase.split(""); //converte cada letra e cada espaço de uma frase em um elemento de um array
//fraseToArray3 = frase.split(); //converte a frase digitada em UM elemento de um array
console.log(fraseToArray);

//para esse exercício não é necessário criar previamente um array, já que o comando split cria um array a partir de uma string
*/


//2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi 
//e imprime tanto o índice quanto o tamanho do array

var frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
console.log("Índice da fruta Abacaxi: "+frutas.indexOf("Abacaxi")+", Tamanho do Array: "+frutas.length);




