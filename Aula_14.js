// Aula 14 - Repetições (Parte 2) - Curso JavaScript #14
// https://youtu.be/eX-lkN_Zahc

/* PERGUNTAS AULA ANTERIOR
1) O que eu faço se quiser fazer uma determinada atividade acontecer várias vezes? 
2) Sabe diferenciar uma estrutura de condição  e as estruturas de repetição? 
3) Consegue dizer a diferença entre as estruturas WHILE e DO..WHILE? 

1) Eu posso utilizar uma linha pra cada código assim sendo um "hard-code", por exemplo comer 8 fatias de pizza comerPizza(), numa função com 8 comandos pra comerPizza(). Esse seria o pior jeito. Podemos fazer uma ESTRUTURA DE REPETIÇÃO ou LAÇO, com uma expressão que quando testada, efetua determinado comando enquanto a condição de teste for válida. 

comerPizza(){
	comerFatia();
	comerFatia();
	comerFatia();
	comerFatia();
	comerFatia();
	comerFatia();
	comerFatia();
	comerFatia();
}
console.log("Acabaram as fatias, nada mais pra comer...")

var temFatia = 8
comerPizza(){
	while (temFatia.length > 0) {
		comerFatia();
		temFatia--
	}	
}
console.log("Acabaram as fatias, nada mais pra comer...")

2) 2) Estruturas de Condições testam condições e de acordo com o resultado (true/false) vão efetuar determinada ação. Estrutura de Repetição vai checar uma condição, e enquanto for verdadeira, repetirá uma determinada ação, e novamente (em loop) vai checar a condição.

3) WHILE é uma Estrutura de Repetição com Teste Lógico no Início! e DO..WHILE é uma Estrutura de Repetição com Teste Lógico no Final!




*/
