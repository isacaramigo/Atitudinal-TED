// EXERCÍCIOS AVANÇADOS

// 1. Imagine que você está em um consultório médico
// e precisa controlar o fluxo de pacientes que chegam e para onde eles vão.

// Quando um paciente chega, ele escolhe que médico deseja consultar.
// - Clínico Geral
// - Ortopedista
// - Cardiologista

// Selecionado o setor do médico, o paciente é encaminhado para a fila de triagem
// Onde TODOS os pacientes aguardam a sua vez para receberem um diagnóstico preliminar

// Chegando a vez do paciente, ele é encaminhado para a sala de consulta
// Onde espera o médico chamar

// O médico então faz a consulta e dá o diagnóstico final



// Crie um sistema que simule esse fluxo de pacientes

//Criação do paciente



var paciente;

paciente = {
    nome: 'Davi',
    setor: 'Cardiologista',
    prioridade: 'Urgente',
};

console.log(paciente);


//Criação da Array de médico

const medicos = [
    'Isabella',
    'Vitor',
    'Haroldo',
]


/*
function Fila() {
    this.elementos = [];
}

// O método enqueue adiciona um elemento no final da fila
Fila.prototype.enqueue = function (e) 
{
    // inserir o novo elemento
    this.elementos.push(e);
}

// remove um elemento do início da fila
Fila.prototype.dequeue = function () 
{
    return this.elementos.shift();
}

// verifica se a fila está vazia
Fila.prototype.isEmpty = function () 
{
    return this.elementos.length == 0;
}

// obter o elemento no início da fila
Fila.prototype.peek = function ()
 {
    return !this.isEmpty() ? this.elementos[0] : undefined;
}

// para consultar o comprimento de uma fila
Fila.prototype.length = function () 
{
    return this.elementos.length;
}

// para criar uma nova fila a partir da função construtora Fila()
let fila = new Fila();

// para enfileirar números de 1 a 7
for (let i = 1; i <= 7; i++) {
    fila.enqueue(i);
}

// para obter o valor da variável fila
console.log(fila);

// para obter o número no início da fila
console.log(`Número no início da fila: ${fila.peek()}`);

// para obter o comprimento atual da fila
console.log(`O comprimento da fila: ${fila.length()}`);

// para remover o elemento no início da fila (desenfileirar todos os elementos)
while (!fila.isEmpty()) 
{
    console.log(fila.dequeue());
}
*/
