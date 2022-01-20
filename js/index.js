

window.onload = function Principal(){

    
    let bt1 = document.getElementById("b1");
    let bt2 = document.getElementById("b2");
    let bt3 = document.getElementById("b3");
    let bt4 = document.getElementById("b4");
    let bt5 = document.getElementById("b5");
    let bt6 = document.getElementById("b6");
    let bt7 = document.getElementById("b7");

    bt1.addEventListener("click",Fpequena);
    bt2.addEventListener("click",Fmedia);
    bt3.addEventListener("click",Fgrande);
    bt4.addEventListener("click", TamanhoPadrao);
    bt5.addEventListener("click",AlterarFont);
    bt6.addEventListener("click", FontePadrao);
   bt7.addEventListener("click",LimparFolha);




    let blac = document.getElementById("black");
    let whi = document.getElementById("white");
    let re = document.getElementById("red");
    let gre = document.getElementById("green");
    let blu = document.getElementById("blue");

    blac.addEventListener("click",textPreto);
    whi.addEventListener("click",textBranco);
    re.addEventListener("click",textVermelho);
    gre.addEventListener("click",textVerde);
    blu.addEventListener("click",textAzul);



    let bt8 = document.getElementById("b8");
    let bt9 = document.getElementById("b9");
    let bt10 = document.getElementById("b10");
    let bt11 = document.getElementById("b11");

    bt8.addEventListener("click",faixa1);
    bt9.addEventListener("click",faixa2);
    bt10.addEventListener("click",faixa3);
    bt11.addEventListener("click",removerFaixa);



    let verme = document.getElementById("vermelho");
    let verd = document.getElementById("verde");
    let amare = document.getElementById("amarelo");
    let bra = document.getElementById("branco");
    let azu = document.getElementById("azul");
    let pret = document.getElementById("preto");
    let rose = document.getElementById("rosa");
    let azuEscu = document.getElementById("Azul-escuro");
    let aliAzul = document.getElementById("Alice-Azul");
    let fuma = document.getElementById("Fumaça-branca");
    let beg = document.getElementById("Bege");
    let card = document.getElementById("Cardo");
    let po = document.getElementById("Po-azul");
    let luz = document.getElementById("LuzDouradoAmarelo");
    let nev = document.getElementById("Neve");
    let laraVerme = document.getElementById("Laranja-Vermelho");
    let vermEscu = document.getElementById("Vermelho-escuro");
    let rox = document.getElementById("roxo");
    let choc = document.getElementById("Chocolate");
    let Li = document.getElementById("Lima");
    let aço = document.getElementById("Aço-Azul");
    let AzuMedio = document.getElementById("Azul-Medio");
    let CinEscu = document.getElementById("Cinza-escuro");
    let cin21 = document.getElementById("cinza21");
    let prat = document.getElementById("Prata");
    let azutransp = document.getElementById("Azul-transp");
    let marin = document.getElementById("agua-marinha");
    let marro = document.getElementById("Marrom-Rosado");
    let amei = document.getElementById("Ameixa");
    let pess = document.getElementById("Pessego");
    let lavan = document.getElementById("Lavanda");
    let mela = document.getElementById("Melada");

    
    verme.addEventListener("click", vermelhoF);
    verd.addEventListener("click",verdeF);
    amare.addEventListener("click",amareloF);
    bra.addEventListener("click",brancoF);
    azu.addEventListener("click",azulF);
    pret.addEventListener("click",pretoF);
    rose.addEventListener("click",rosaF);
    azuEscu.addEventListener("click",azul_escuroF);
    aliAzul.addEventListener("click",alice_azulF);
    fuma.addEventListener("click",fumaça_brancaF);
    beg.addEventListener("click",begeF);
    card.addEventListener("click",cardoF);
    po.addEventListener("click",po_azulF);
    luz.addEventListener("click",luzDouradoF);
    nev.addEventListener("click",neveF);
    laraVerme.addEventListener("click",laranja_vermelhoF);
    vermEscu.addEventListener("click",vermelho_escuroF);
    rox.addEventListener("click",roxoF);
    choc.addEventListener("click",chocolateF);
    Li.addEventListener("click",limaF);
    aço.addEventListener("click",aço_azulF);
    AzuMedio.addEventListener("click",azul_medioF);
    CinEscu.addEventListener("click",cinza_escuroF);
    cin21.addEventListener("click",cinza21F);
    prat.addEventListener("click",prataF);
    azutransp.addEventListener("click",azul_transpF);
    marin.addEventListener("click",agua_marinhaF);
    marro.addEventListener("click",marronRosadoF);
    amei.addEventListener("click",ameixaF);
    pess.addEventListener("click",pessegoF);
    lavan.addEventListener("click",lavandaF);
    mela.addEventListener("click",meladaF);




}


/* FUNÇOES DE DADOS PESSOAIS */

function Fpequena(){

   let fo = document.getElementById("folha");

   fo.style.fontSize = "0.8em";
   

}

function Fmedia(){

  let fo = document.getElementById("folha");

  fo.style.fontSize = "1.1em";
  

}

function Fgrande(){

    let fo = document.getElementById("folha");
    
    fo.style.fontSize = "1.2em";
   
}

function TamanhoPadrao(){

    let fo = document.getElementById("folha");

    fo.style.fontSize = "1em";

}

function AlterarFont(){

    let fo = document.getElementById("folha");

    fo.style.fontFamily = "Impact";

}

function FontePadrao(){

    let fo = document.getElementById("folha");

    fo.style.fontFamily = "Arial";

}

function LimparFolha(){

    let fo = document.getElementById("folha");
    let fl = document.getElementsByClassName("faixaLateral")[0]
    let h4_1 = document.getElementsByTagName("h4")[0];
    let h4_2 = document.getElementsByTagName("h4")[1];
    let h4_3 = document.getElementsByTagName("h4")[2];
    let h4_4 = document.getElementsByTagName("h4")[3];
    let h4_5 = document.getElementsByTagName("h4")[4];
    let h4_6 = document.getElementsByTagName("h4")[5];
    let p = document.getElementsByTagName("p")[0];

    fo.style.backgroundColor = "white";
    fl.style.backgroundColor = "transparent";
    h4_1.innerHTML = "";
    h4_2.innerHTML = "";
    h4_3.innerHTML = "";
    h4_4.innerHTML = "";
    h4_5.innerHTML = "";
    h4_6.innerHTML = "";
    p.innerHTML = "";

   
   

} /* FUNÇOES DE DADOS PESSOAIS */




/* FUNÇOES DE FORMATAÇÂO DE TEXTO */

function MudarTextb1(input){

    let h4 = document.getElementById("Nome");

    h4.innerHTML = input.value;


}

function MudarTextb2(input){

    let p = document.getElementById("descri");

    p.innerHTML = input.value;

}

function MudarTextb3(input){

    let h4 = document.getElementById("e-mail");

    h4.innerHTML = input.value;

}

function MudarTextb4(input){

    let h4 = document.getElementById("tele");

    h4.innerHTML = input.value;

}

function MudarTextb5(input){

    let h4 = document.getElementById("site");

    h4.innerHTML = input.value;

}

function MudarTextb6(input){

    let h4 = document.getElementById("perfi");
    
    h4.innerHTML = input.value;

}

function MudarTextb7(input){

    let h4 = document.getElementById("curs");

    h4.innerHTML = input.value;

}

function MudarTextb8(input){

    let h4 = document.getElementById("expe");

    h4.innerHTML = input.value;


}  /* FUNÇOES DE FORMATAÇÂO DE TEXTO */





/* FUNÇOES ALTERAR COR DO TEXTO */

function textPreto(){

    let fo = document.getElementById("folha");

    fo.style.color = "black";

}

function textBranco(){

    let fo = document.getElementById("folha");
    fo.style.color = "white";

}

function textVermelho(){

    let fo = document.getElementById("folha");

    fo.style.color = "red";

}

function textVerde(){

    let fo = document.getElementById("folha");

    fo.style.color = "green";

}

function textAzul(){

    let fo = document.getElementById("folha");

    fo.style.color = "blue";

} /* FUNÇOES ALTERAR COR DO TEXTO */




/* FUNÇOES COR DE FUNDO DA FAIXA */
function faixa1(){  

    let faixaL = document.getElementsByClassName("faixaLateral")[0];

    faixaL.style.backgroundColor = "red";

}

function faixa2(){

    let faixaL = document.getElementsByClassName("faixaLateral")[0];

    faixaL.style.backgroundColor = "#BC8F8F";

}

function faixa3(){

    let faixaL = document.getElementsByClassName("faixaLateral")[0];

    faixaL.style.backgroundColor = "rgba(128, 128, 128, 0.493)";

}

function removerFaixa(){

    let faixaL = document.getElementsByClassName("faixaLateral")[0];

    faixaL.style.backgroundColor = "transparent";

}  /* FUNÇOES COR DE FUNDO DA FAIXA */



/* FUNÇOES COR DE FUNDO DA FOLHA */

function vermelhoF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "red";

}

function verdeF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "green";

}

function amareloF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "yellow";

}

function brancoF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "white";

}

function azulF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "blue";

}

function pretoF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "black";

}

function rosaF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "pink";

}

function azul_escuroF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#00008B";

}

function alice_azulF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#F0F8FF";

}

function fumaça_brancaF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#F5F5F5";

}

function begeF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#F5F5DC";

}

function cardoF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#D8BFD8";

}

function po_azulF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#B0E0E6";

}

function luzDouradoF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#FAFAD2"

}

function neveF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#FFFAFA";

}

function laranja_vermelhoF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#FF4500";

}

function vermelho_escuroF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#8B0000";

}

function roxoF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#A020F0";

}

function chocolateF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#D2691E";

}

function limaF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#00FF00";

}

function aço_azulF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#4682B4";

}

function azul_medioF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#0000CD";

}

function cinza_escuroF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#A9A9A9";

}

function cinza21F(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#363636";

}

function prataF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#C0C0C0";

}

function azul_transpF(){


    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#0000cd36";
}

function agua_marinhaF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#FFFFD4";

}

function marronRosadoF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#BC8F8F";

}

function ameixaF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#DDA0DD";

}

function pessegoF(){

    let fo = document.getElementById("folha");
    fo.style.backgroundColor = "#FFDAB9";

}

function lavandaF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#E6E6FA";

}

function meladaF(){

    let fo = document.getElementById("folha");

    fo.style.backgroundColor = "#F0FFF0";

}  
/* FUNÇOES COR DE FUNDO DA FOLHA */



