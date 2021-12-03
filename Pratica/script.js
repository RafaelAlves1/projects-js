// 1 criar o balao 
// 2 estourar o balao 
// 3 carregar o jogo

var total =0;


function criarBalao(){
  var balao = document.createElement("div");
  balao.setAttribute("class","balao");

  var x = Math.floor(Math.random() * 600);
  var y = Math.floor(Math.random() * 400);

  //gerando cor aleatoria 
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  
  //gerando altura aleatoria
  var randomHeight = Math.floor(Math.random()*50);

  //<div class="balao" style="left30px;" top:50px;""></div>
  balao.setAttribute("style",  "height:" + randomHeight + "px; left:"+ x + "px; top:" + y +"px;background-color: #"+randomColor);
  balao.setAttribute("onclick", "estourar(this)");
  
  document.body.appendChild(balao);
}

// estourando os baloes e mostrando o resultado
function estourar(objeto){
  document.body.removeChild(objeto);

  total++;
  var score = document.getElementById('total');
  score.innerHTML = "Baloes estourados: " + total
}

// ao carregar a pagina, os baloes começam a surgir de forma aleatoria

function carregarJogo(){
  setInterval(criarBalao, 1000);

}
