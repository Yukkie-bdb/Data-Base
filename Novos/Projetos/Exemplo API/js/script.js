/* https://api.coinbase.com/v2/currencies */
/* https://api.coinbase.com/v2/currencies */

// Função para ler a API e obter os dados de moedas

async function carregarDados(){
    // Ocultar a div de erro (se estiver visivel)
    const divErro = document.getElementById('div-erro')
    divErro.style.display = 'none';

    await fetch('https://api.coinbase.com/v2/currencies') //Endpoint da APO
        .then( Response => Response.json() )    //Obtendo resposta da API
        .then( dados => prepararDados(dados))   //Obtendo os Dados
        .catch( e => exibirErro(e.message));    //Obtendo erro (se der erro)
}

// Função para exibir mensagens de erro
function exibirErro(mensagem){
    const divErro = document.getElementById('div-erro')
    divErro.style.display = 'block';
    divErro.innerHTML = '<b>Erro ao acessar a API</b><br>' + mensagem;
}

// Função para preparar e exibir os dados no HTML
function prepararDados(dados){
    //Criando variavel para controlar as linhas da tbody
    let linhas = document.getElementById("linhas");
    linhas.innerHTML = '';

    // Laço para percorrer todos os dados recebidos
    for (let i=0; i<dados['data'].length; i++){
        let auxLinha = '';

        if (i %2 !=0){
            auxLinha = '<tr class="listra"'
        }
        else{
            auxLinha = '<tr>'
        }

        auxLinha += '<td>' + dados['data'][i].id + '<td>' + '<td>' + dados['data'][i].name+ '<td>' + '</tr>';

        linhas.innerHTML += auxLinha;
    }
}

