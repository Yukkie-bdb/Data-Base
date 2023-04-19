// Scripts para exemplo 1

// Criando variável para manipular a DIV "lampada"

var lampada = document.getElementById('lampada');

// Função para acender a luz verde

function acender(cor) {
    lampada.style.backgroundColor = cor;
}

function falar() {
    // Criando vetor de frases
    const frases = ['Hoje o dia está bonito.', 'Qual o cardápio de hoje no almoço?', 'Falta muito para a sexta?', 'Vixi! Hoje tenho prova de matemática.'];
    // Criando variável para o índice do vetor (frase a ser exibida)
    let indice = 0;
    // Gerando um número aleatório para escolher a frase
    let numero = Math.random ();
    // Obtendo o índice do vetor com base no número (random)
    if (numero > 0.75)
        indice = 3;
    else 
        if (numero > 0.5)
        indice = 2;
        else
            if (numero > 0.25)
            indice = 1;

    // Criando uma variável para manipular a DIV 'tagarela'
    let divTagarela = document.getElementById('tagarela');
    // Alterando o conteúdo da DIV 'tagarela'
    divTagarela.innerHTML = frases[indice]
}

// Scripts para o exemplo 3

function validarDados () {
    // Obtendo os dados do form (inputs)
    let nome = frmExemplo.inNome.value;
    let idade = frmExemplo.inIdade.value;

    if (nome.trim() == '') {
        alert ("O campo 'Nome' não pode estar vazio");
        frmExemplo.inNome.focus();
        return false;
    }
    if (idade.trim() == '') {
        alert ("O campo 'Idade' não pode estar vazio");
        frmExemplo.inIdade.focus();
        return false;
    }
    if (idade < 0) {
        alert ("A idade não pode possuir valores negativos");
        frmExemplo.inIdade.focus();
        return false;
    }

    alert ("Muito bem, Flipper, pegue seu paixe!");
}

// Exemplo 4

function alterarFoto() {
    let imagem = document.getElementById("Dino1");
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/')+1);

    if (arquivo == 'Bonobo.jpg' || arquivo == '')
    imagem.src = 'Imagens/images.jfif';
    else
    imagem.src = 'Imagens/Bonobo.jpg';
}

// Exemplo 5

function mudarVisibilidade() {
    let preguica = document.getElementById('preguica');
    let botao = document.getElementById('btnChave');

    if (botao.textContent == 'Exibir') {
        preguica.style.display = 'block';
        botao.textContent = 'Ocultar'
    }
    else {
        preguica.style.display = 'none';
        botao.textContent = 'Exibir';
    }
}

// Exemplo 6

function atualizarDados() {
    let dados = document.getElementById('itens');

    // Apagando o conteudo do Tbody se existir
    dados.innerHTML = '';

    // definindo quantidade aleatoria de linhas
    let qtd = (Math.random()*10+1).toFixed(0);

    // Gerando novos conteudos dinamicamente
    for (let i=1; i<qtd; i++){
        let preco = Math.random() * 100

        // Criando uma variavel para inserir uma tag TR
        let elemento = '';

        // Para as linhas impares, inserir call 'listra'
        if (i%2 !=0)
            elemento = '<tr class="listra">';

        else
            elemento = '<tr>';

        elemento += '<td>Produto ' + i + '</td>' + '<td> R$ ' + preco.toFixed(2); + '</td>' + '</tr>'

        // Inserir o Html (elemnento) gerado no Tbody
        dados.innerHTML += elemento;
    }
}