var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogadorS');
var vencedorSelecionado = document.getElementById('jogadorV');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function selecionarQuadrado(id){
    if(vencedor !== null){
        return;
    }

    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !=='-'){
        return
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
    if(jogador === 'X'){
        jogador = "O";
       
    }else{
        jogador = 'X';
    }
    mudarJogador(jogador);
    validaVenc();

}
function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;

}

function validaVenc(){
    var quadrado1=document.getElementById(1);
    var quadrado2=document.getElementById(2);
    var quadrado3=document.getElementById(3);
    var quadrado4=document.getElementById(4);
    var quadrado5=document.getElementById(5);
    var quadrado6=document.getElementById(6);
    var quadrado7=document.getElementById(7);
    var quadrado8=document.getElementById(8);
    var quadrado9=document.getElementById(9);

    //horizontal
    if(checkSequ(quadrado1,quadrado2,quadrado3)){
       altCorPad(quadrado1,quadrado2,quadrado3);
       altVencedor(quadrado1);
       return;

    }
    if(checkSequ(quadrado4,quadrado5,quadrado6)){
        altCorPad(quadrado4,quadrado5,quadrado6);
        altVencedor(quadrado4);
        return;
     }
     if(checkSequ(quadrado7,quadrado8,quadrado9)){
        altCorPad(quadrado7,quadrado8,quadrado9);
        altVencedor(quadrado7);
        return;
 
     }

     //vertical
     if(checkSequ(quadrado1,quadrado4,quadrado7)){
        altCorPad(quadrado1,quadrado4,quadrado7);
        altVencedor(quadrado1);
 
     }
     if(checkSequ(quadrado2,quadrado5,quadrado8)){
        altCorPad(quadrado2,quadrado5,quadrado8);
        altVencedor(quadrado2);
 
     }
     if(checkSequ(quadrado3,quadrado6,quadrado9)){
        altCorPad(quadrado3,quadrado6,quadrado9);
        altVencedor(quadrado3);
 
     }

     //diagonal
     if(checkSequ(quadrado1,quadrado5,quadrado9)){
        altCorPad(quadrado1,quadrado5,quadrado9);
        altVencedor(quadrado1);
 
     }
     if(checkSequ(quadrado3,quadrado5,quadrado7)){
        altCorPad(quadrado3,quadrado5,quadrado7);
        altVencedor(quadrado3);
 
     }

    
}

function checkSequ(quadrado1,quadrado2,quadrado3){
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
    eigual = true;
    }
    return eigual;


}



function altVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;

}

function altCorPad(quadrado1,quadrado2,quadrado3){
        quadrado1.style.background = '#0f0';
        quadrado2.style.background = '#0f0';
        quadrado3.style.background = '#0f0';

}

function resetJogo(){
    vencedor = null;
    vencedorSelecionado.innerHTML = " ";
    for(var i=1;i<=9;i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';

    }
    mudarJogador('X');

}

