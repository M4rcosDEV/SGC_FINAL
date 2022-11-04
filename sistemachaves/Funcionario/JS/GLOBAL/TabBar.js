// CONFIGURAÇÃO BARRA ---------------------
//----INDICADOR LOCAL-------
const LiItens = document.querySelectorAll('.Item_Barra');
const IndiItemActive = document.querySelector('.indicador2');
const IndiItemActive2 = document.querySelector('.indicador3');

LiItens.forEach((item, index)=>{
    
        if (index == 5){
            IndiItemActive.style.top = `${index*49+365}px`;
            IndiItemActive2.style.top = `${index*49+365}px`;
        } else if (index == 0) {
            IndiItemActive.style.top = `${index*49+202}px`;
            IndiItemActive2.style.top = `${index*49+201}px`;
        } else {
            IndiItemActive.style.top = `${index*55+202}px`;
            IndiItemActive2.style.top = `${index*55+201}px`;
        }
});

//----INDICADOR STATUS/DIMENSÃO BARRA-------
const IndiDimen = document.querySelector('.indicador1');
const Nav = document.querySelector('.Nav');
const HeaderSta = document.querySelector('.Header');
const MainSta = document.querySelector('.Main');
const MainCon1 = document.querySelector('.Main_Cont1');
const MainCon2 = document.querySelector('.Main_Cont2');
const MainCon3 = document.querySelector('.Main_Cont3');

function Dimensao(){
    IndiDimen.classList.toggle('active'); //Indicador
    Nav.classList.toggle('status2'); // Nav
    HeaderSta.classList.toggle('status2'); //Header
    MainSta.classList.toggle('status2');//Main
    IndiItemActive2.classList.toggle('active');//Barra Lateral Icon Direita
    MainCon1.classList.toggle('active');
    MainCon2.classList.toggle('active');
    MainCon3.classList.toggle('active');
}

IndiDimen.addEventListener('click', Dimensao);
