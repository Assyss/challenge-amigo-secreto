//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array global para armazenar a lista de amigos.
let amigos = [];

/**
 * Função para adicionar um novo amigo.
 * Ela captura o nome do input, valida para não ser vazio ou duplicado,
 * adiciona ao array e atualiza a lista na tela.
 */
function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nomeAmigo = amigoInput.value.trim(); // .trim() remove espaços em branco inúteis

    // Valida se o campo de nome não está vazio
    if (nomeAmigo == '') {
        alert("Por favor, insira um nome.");
        return; // Para a execução da função aqui
    }

    // Valida se o nome já existe na lista
    if (amigos.includes(nomeAmigo)) {
        alert("Nome já adicionado! Por favor, insira um nome diferente.");
        amigoInput.value = '';
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Atualiza a lista de amigos na tela
    atualizarLista();

    // Limpa o campo de texto para a próxima inserção
    amigoInput.value = '';
}

/**
 * Função para atualizar a lista de amigos exibida no HTML.
 * Ela limpa a lista atual e a recria com base no array 'amigos'.
 */
function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista para não duplicar nomes

    // Percorre o array e cria um <li> para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

/**
 * Função principal do sorteio.
 * Ela embaralha a lista e atribui quem tira quem.
 */
function sortearAmigo() {
    // Valida se há amigos suficientes para o sorteio
    if (amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos para o sorteio!");
        return;
    }

    // Embaralha o array de amigos (algoritmo de Fisher-Yates)
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]]; // Troca os elementos de lugar
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    // Cria os pares do amigo secreto
    for (let i = 0; i < amigos.length; i++) {
        let de = amigos[i];
        // Se for o último da lista, ele tira o primeiro. Senão, tira o próximo.
        let para = i == (amigos.length - 1) ? amigos[0] : amigos[i + 1];
        
        resultado.innerHTML += `<li>${de} --> ${para}</li>`;
    }
}

/**
 * Função para reiniciar o jogo.
 * Limpa o array de amigos e as listas na tela.
 */
function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}