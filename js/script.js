let vidas = 6;
let listaDinamica = [];
let palavraSecretaTema;
let palavraSecretaSorteada;
//Criando uma lista de objetos, ou seja, com as palavras e o tema delas.
const arrayPalavras = [
  palavra001 = {
    nome: "BARBIE",
    tema: "FILMES",
  },
  palavra002 = {
    nome: "OPPENHEIMER",
    tema: "FILMES",
  },
  palavra003 = {
    nome: "ELEMENTAL",
    tema: "FILMES",
  },
  palavra004 = {
    nome: "PANTERA NEGRA",
    tema: "FILMES",
  },
  palavra005 = {
    nome: "DUNA",
    tema: "FILMES",
  },
  palavra006 = {
    nome: "TITANIC",
    tema: "FILMES",
  },
  palavra007 = {
    nome: "BRANCO",
    tema: "COR",
  },
  palavra008 = {
    nome: "PRETO",
    tema: "COR",
  },
  palavra009 = {
    nome: "ROSA",
    tema: "COR",
  },
  palavra010 = {
    nome: "AMARELO",
    tema: "COR",
  },
  palavra011 = {
    nome: "AZUL",
    tema: "COR",
  },
  palavra012 = {
    nome: "VERDE",
    tema: "COR",
  },
  palavra0013 = {
    nome: "MAYLA",
    tema: "NOMES",
  },
  palavra014 = {
    nome: "VANESSA",
    tema: "NOMES",
  },
  palavra015 = {
    nome: "POLIANA",
    tema: "NOMES",
  },
  palavra016 = {
    nome: "INAIARA",
    tema: "NOMES",
  },
  palavra017 = {
    nome: "KARINA",
    tema: "NOMES",
  },
  palavra018 = {
    nome: "MARCELO",
    tema: "NOMES",
  },
  palavra019 = {
    nome: "LUIS",
    tema: "NOMES",
  },
  palavra020 = {
    nome: "CACHORRO",
    tema: "ANIMAIS",
  },
  palavra021 = {
    nome: "GATO",
    tema: "ANIMAIS",
  },
  palavra022 = {
    nome: "GIRAFA",
    tema: "ANIMAIS",
  },
  palavra023 = {
    nome: "BORBOLETA",
    tema: "ANIMAIS",
  },
  palavra024 = {
    nome: "ARANHA",
    tema: "ANIMAIS",
  },
  palavra025 = {
    nome: "SERPENTE",
    tema: "ANIMAIS",
  },
];

//Função para gerar a palavra que o usuário tem que descobrir
geraPalavraAleatoria() //chamando a função
function geraPalavraAleatoria(){
    const indice = parseInt(Math.random() * arrayPalavras.length)
    palavraSecretaSorteada = arrayPalavras[indice].nome;
    palavraSecretaTema = arrayPalavras[indice].tema;
    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaTema);
}

exibirPalavra();
function exibirPalavra(){
    const tema = document.getElementById("tema");
    tema.innerHTML = palavraSecretaTema;

    const palavraExibida = document.getElementById("underline");
    palavraExibida.innerHTML = "";

    //para palavras compostas

    for(i = 0; i < palavraSecretaSorteada.length; i++){
      if (listaDinamica[i] == undefined){
        if(palavraSecretaSorteada[i] == " "){  
          listaDinamica[i] = " ";
          palavraExibida.innerHTML = palavraExibida.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
        }else{
          listaDinamica[i] = "&nbsp; "
        palavraExibida.innerHTML = palavraExibida.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
      }
      else{
        if(palavraSecretaSorteada[i] == " "){  
          listaDinamica[i] = " ";
          palavraExibida.innerHTML = palavraExibida.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
        }else{
          palavraExibida.innerHTML = palavraExibida.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        } 
      }
    }
}

function verificaLetra(letra){
  document.getElementById("tecla-" + letra).disabled = true;
  if(vidas > 0){
    estiloLetra("tecla-" + letra, false);
    comparaListas(letra);
    exibirPalavra();
  }  
}

function estiloLetra(tecla, condicao){
  if(condicao == false){
    document.getElementById(tecla).style.background = "brown";
    document.getElementById(tecla).style.color = "#ffffff";
  } else{
    document.getElementById(tecla).style.background = "green";
    document.getElementById(tecla).style.color = "#ffffff";
  } 
}

//compara a letra que foi digitada e verificar se ela tem na lista palavraSecretaSorteada e se existir ela executa a condição
function comparaListas(letra){
  const posicao = palavraSecretaSorteada.indexOf(letra)
  if(posicao < 0){
    vidas--;
    imagemForca();
    //condição para abrir o modal somente quando o usuário não tiver mais vidas
    if(vidas == 0){
      aberturaModal("Não foi dessa vez, tente novamente... A palavra secreta era " + palavraSecretaSorteada);
    }
  }else{
    estiloLetra("tecla-" + letra, true);
    for(i = 0; i < palavraSecretaSorteada.length; i++){
      if(palavraSecretaSorteada[i] == letra){
        listaDinamica[i] = letra;
      }
    }
  }

  let vitoria = true;
  for(i = 0; i < palavraSecretaSorteada.length; i++){
    if(palavraSecretaSorteada[i] != listaDinamica[i]){
      vitoria = false;
    }
  }

  if(vitoria == true){
    //mensagem vitoria - voce ganhou
    aberturaModal("PARABÉNS VOCÊ GANHOU!!!");
    vidas = 0; //zerando as tentativas.
  }
}

function imagemForca(){
  //nesta condicional estou avaliando as vidas contidas para que nos cases possa expressar o corpo do boneco quando erro a palavra.
  switch(vidas){
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

function aberturaModal(titulo, mensagem){
  let modalTitulo = document.getElementById("exampleModalCenterTitle");
  modalTitulo.innerText = titulo;

  // let modalBody = document.getElementById("modalBody");
  // modalBody.innerHTML = mensagem;

    $("#myModal").modal({
      show: true
    });
}

//reiniciando o jogo
//queryselector, ou seja, um único seletor, o seletor é o nome do meu id no html do botão de reiniciar. 
let reiniciabtn = document.querySelector("#btn-reinicia")
reiniciabtn.addEventListener("click", function(){
    location.reload();
});

