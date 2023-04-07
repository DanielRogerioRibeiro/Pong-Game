//****Jogo Pong****


//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  //movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  mostraRaqueteOponente
  movimentaRaqueteOponente();
}


function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

//criando minha raquete
// Função para mostrar minha Raquete;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

function mostraRaquete(x,y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

// Função para movimentar minha Raquete;
function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
  }
}
// Função para verificar a colisão com a minha Raquete;
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && 
      yBolinha - raio < yRaquete + raqueteAltura && 
      yBolinha + raio > yRaquete){
      velocidadeXBolinha *= -1;
    }

}
//criando raquete do oponente
//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

// Função para mostrar raquete do oponente;
function mostraRaqueteOponente(){
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
}



