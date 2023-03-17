let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001= {
        nome: "MESSI",
        categoria: "JOGADORES"
    },
    palavra002= {
        nome: "NEYMAR",
        categoria: "JOGADORES"
    },
    palavra003= {
        nome: "CRISTIANO RONALDO",
        categoria: "JOGADORES"
    },
    palavra004= {
        nome: "LEWANDOWSKI",
        categoria: "JOGADORES"
    },
    palavra005= {
        nome: "HAALAND",
        categoria: "JOGADORES"
    },
    palavra006= {
        nome: "MBAPPÉ",
        categoria: "JOGADORES"
    },
    palavra007= {
        nome: "KANTÉ",
        categoria: "JOGADORES"
    },
    palavra008= {
        nome: "BENZEMA",
        categoria: "JOGADORES"
    },
    palavra009= {
        nome: "RODRYGO",
        categoria: "JOGADORES"
    },
    palavra010= {
        nome: "SALAH",
        categoria: "JOGADORES"
    },
    palavra011= {
        nome: "RONALDINHO",
        categoria: "JOGADORES"
    },
    palavra012= {
        nome: "ROBINHO",
        categoria: "JOGADORES"
    },
    palavra013= {
        nome: "PIRLO",
        categoria: "JOGADORES"
    },
    palavra014= {
        nome: "HULK",
        categoria: "JOGADORES"
    },
    palavra015= {
        nome: "MODRIC",
        categoria: "JOGADORES"
    },
    palavra016= {
        nome: "IBRAHIMOVIC",
        categoria: "JOGADORES"
    },
    palavra017= {
        nome: "CHINA",
        categoria: "TIMES"
    },
    palavra018= {
        nome: "REAL MADRID",
        categoria: "TIMES"
    },
    palavra019= {
        nome: "BARCELONA",
        categoria: "TIMES"
    },
    palavra020= {
        nome: "LIVERPOOL",
        categoria: "TIMES"
    },
    palavra021= {
        nome: "CHELSEA",
        categoria: "TIMES"
    },
    palavra022= {
        nome: "AJAX",
        categoria: "TIMES"
    },
    palavra023= {
        nome: "PALMEIRAS",
        categoria: "TIMES"
    },
    palavra024= {
        nome: "FLAMENGO",
        categoria: "TIMES"
    },
    palavra025= {
        nome: "ARSENAL",
        categoria: "TIMES"
    },
    palavra026= {
        nome: "SANTOS",
        categoria: "TIMES"
    },
    palavra027= {
        nome: "CELTIC",
        categoria: "TIMES"
    },
    palavra028= {
        nome: "PORTO",
        categoria: "TIMES"
    },
    palavra029= {
        nome: "SPORTING",
        categoria: "TIMES"
    },
    palavra030= {
        nome: "MILAN",
        categoria: "TIMES"
    },
    palavra031= {
        nome: "JUVENTUS",
        categoria: "TIMES"
    },
    palavra032= {
        nome: "LEICESTER",
        categoria: "TIMES"
    },
    palavra033= {
        nome: "TOTTENHAM",
        categoria: "TIMES"
    },
    palavra034= {
        nome: "DORTMUND",
        categoria: "TIMES"
    },
    palavra035= {
        nome: "LEIPZIG",
        categoria: "TIMES"
    },
    palavra036= {
        nome: "VILLARREAL",
        categoria: "TIMES"
    },
    palavra037= {
        nome: "BÉTIS",
        categoria: "TIMES"
    },
    palavra038= {
        nome: "VALENCIA",
        categoria: "TIMES"
    },
    palavra039= {
        nome: "PARANÁ",
        categoria: "TIMES"
    },
    palavra040= {
        nome: "LYON",
        categoria: "TIMES"
    },
    palavra041= {
        nome: "MEIÃO",
        categoria: "OBJETOS DE FUTEBOL"
    },
    palavra042= {
        nome: "CHUTEIRA",
        categoria: "OBJETOS DE FUTEBOL"
    },
    palavra043= {
        nome: "CALÇÃO",
        categoria: "OBJETOS DE FUTEBOL"
    },
    palavra044= {
        nome: "CAMISETA",
        categoria: "OBJETOS DE FUTEBOL"
    },
    palavra045= {
        nome: "BOLA",
        categoria: "OBJETOS DE FUTEBOL"
    },
    palavra046= {
        nome: "CANELEIRA",
        categoria: "OBJETOS DE FUTEBOL"
    },
    palavra047= {
        nome: "APITO",
        categoria: "OBJETOS DE FUTEBOL"
    },
    palavra048= {
        nome: "TROFÉU",
        categoria: "OBJETOS DE FUTEBOL"
    },
    palavra049= {
        nome: "BANDEIRA",
        categoria: "OBJETOS DE FUTEBOL"
    },
    palavra050= {
        nome: "LUVA DE GOLEIRO",
        categoria: "OBJETOS DE FUTEBOL"
    }
];


criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
      
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria
    
    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
    
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
        }
    }

}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra);    
        comparalistas(letra);
        montarPalavraNaTela();  
    }
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#00008b";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();
        
        if(tentativas == 0)
        {
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++ )
        {
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++ ){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria= false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "Você venceu...");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;                             
    }
}

function abreModal( titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;     

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function(){
    location.reload();
});
