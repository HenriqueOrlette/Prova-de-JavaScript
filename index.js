//1 - Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.

// Cria função para verificar se é número primo.
function primo(numero){

// Verifica se o número for menor ou igual a um, automaticamente não é primo.
    if (numero < 2){
        return false;
    }

// Para a variável "i" começando por 2 até a raiz quadrada do parâmetro(numero), aumentando de 1 em 1.
    for (var i = 2; i <= numero**(1/2); i++){

// Verifica se o resto da divisão do numero por "i" der 0, então esse número não é primo.        
        if(numero % i === 0){
            return false;
        }
    }

//Se o "if" não foi atendido, é primo.
    return true;
}

// Cria função para lista de primos de 1 a 1000.
function lista(){

// Cria uma constante para armazenar os números primos.
    const primos = [];

// Para a varipavel "i" começando por 1 até 1000, aumentando de 1 em 1.
    for (var numero = 1; numero <= 1000; numero++){

// Verifica se os números são primos de acordo com a função "function primo(numero)".
        if (primo(numero)){

// Se sim, inclui o número a constante "primos".
            primos.push(numero);
        }
    }

// Retorna os valores de "primos".
    return primos;
}


// 2 - Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.

// Cria função para analisar senha.
function senha(senha){

// Verifica se a string tiver um tamanho (string.length) menor que 8.
    if(senha.length < 8){

// Retorna "Senha muito pequena".
        return("Senha muito pequena")
    }

// Verifica se a string não possui alguma letra maiúscula em sua estrutura.
    if(!/[A-Z]/.test(senha)){

// Retorna "Precisa conter pelo menos uma letra maiúscula".
        return("Precisa conter pelo menos uma letra maiúscula")
    }

// Verifica se a string não possui alguma letra minúscula em sua estrutura.
    if(!/[a-z]/.test(senha)){

// Retorna "Precisa conter pelo menos uma letra minúscula".
        return("Precisa conter pelo menos uma letra minúscula")
    }

// Verifica se a string não possui pelo menos um número em sua estrutura.
    if(!/\d/.test(senha)){
        return("Precisa conter pelo menos um número")
    }

// Se o "if" não foi atendido.
    else{

// Retorna "Senha válida!".
        return("Senha válida!")
    }
}


// 3 - Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.

// Cria função para calcular fatorial.
function fatorial(numero){

// Cria uma variável "fatorialCalculo" com o valor de 1.
    var fatorialCalculo = 1

// Enquanto o "i" for menor ou igual o número colocado, adiciona-se os valores de "i" a multiplicação em "calculofatorial *= i;".
    for(var i = 1; i <= numero; i++){
        fatorialCalculo *= i;  
    }

// Retorna o valor do fatorial.
    return fatorialCalculo
}


// 4 - Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.

// Cria função para analisar se é quadrado perfeito.
function quadradoperfeito(numero){

// Cria uma variável com o cálculo da raiz quadrada do número
    var raizdonumero = numero**(1/2);
        
// Se o número for inteiro
        if(Number.isInteger(raizdonumero)){

// Retorna 'É um quadrado perfeito!'.
            return('É um quadrado perfeito!');
        }

// Se o "if" não foi atendido.
        else{

// Retorna 'Não é um quadrado perfeito!'.
            return('Não é um quadrado perfeito!');
        }
}
