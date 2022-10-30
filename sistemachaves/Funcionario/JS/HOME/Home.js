var popups = document.querySelector('.POPUPS');
var popupDELETPredio = document.querySelector('.PoPuExcluirPredio'); // Div Popup
var popupCadPredio = document.querySelector('.PoPuCadastroPredio');

//---------------------------------- POPUP CADASTRA PREDIO ----------------------------------
var buttonCadPredio = document.querySelector('.Cadastr_Predio');
var buttonFechaAddPredio = document.getElementById('FechaAddPredio');
var buttonSalvarPredio = document.getElementById('SubmitAddPredio');
//ABRIR
function abrirPopupAdd (){
    popups.style.display = 'flex';
    popupCadPredio.style.display = "flex";
    popupDELETPredio.style.display = "none";
    popupCadPredio.classList.add("active");
    popups.classList.add("active");
}
// SUBMIT
function submitPopupAdd (){
    popups.style.display = 'none';
    popupCadPredio.style.display = "none";
    popupCadPredio.classList.remove("active");
    popups.classList.remove("active");
}
//FECHA
function fechaPopupAdd (){
    popups.style.display = 'none';
    popupCadPredio.style.display = "none";
    popupCadPredio.classList.remove("active");
    popups.classList.remove("active");

}
buttonCadPredio.addEventListener('click', abrirPopupAdd); // Botão abrir
buttonSalvarPredio.addEventListener('click', submitPopupAdd); // Botão Salvar
buttonFechaAddPredio.addEventListener('click', fechaPopupAdd); // Botão Fecha

//---------------------------------- POPUP EXCLUIR PREDIO ----------------------------------
var buttonDELETPredioIcon = document.querySelector('.Apagar_Predio'); // X na tela
var buttonFechaDELETPredio = document.getElementById('FechaExcPredio'); // Icon X no POPUP
var buttonDELETPredio = document.getElementById('SubmitExcPredio'); // Submit
//ABRIR
function abrirPopupDelet (){
    popups.style.display = 'flex';
    popupDELETPredio.style.display = "flex";
    popupCadPredio.style.display = "none";

}
// SUBMIT
function submitPopupDelet (){
    popups.style.display = 'none';
    popupDELETPredio.style.display = "none";
}
//FECHA
function fechaPopupDelet (){
    popups.style.display = 'none';
    popupDELETPredio.style.display = "none";
}
buttonDELETPredioIcon.addEventListener('click', abrirPopupDelet); // Botão abrir
buttonDELETPredio.addEventListener('click', submitPopupDelet); // Botão Salvar
buttonFechaDELETPredio.addEventListener('click', fechaPopupDelet); // Botão Fecha


//---------------------------------- CARROSSEL CHAVES PREDIO ----------------------------------
var btnRightCarrossel = document.querySelectorAll('#arrow_right_chaves');
var btnLeftCarrossel = document.querySelectorAll('#arrow_left_chaves');
var itensCarrosselChaves = document.querySelectorAll('.Bloco_Chaves_UL');
var countChavesPreido = itensCarrosselChaves.length;
var currentCarrossel = 0;

/*function carrossel(){
    if (countChavesPreido <= 3){
        btnRightCarrossel.style.display = "none";
    } else {
        btnRightCarrossel.style.display = "flex";
    }
    btnRightCarrossel.addEventListener('click', ()=>{

        document.querySelector('.arrow_left_div').style.display = "flex";

        if ((currentCarrossel+4) == countChavesPreido){
            document.querySelector('.Bloco_Chaves_UL').style.cssText = `transform: translate(${currentCarrossel*-300}px);`;
        } else {
            currentCarrossel++;
            document.querySelector('.Bloco_Chaves_UL').style.cssText = `transform: translate(${currentCarrossel*-300}px);`;
        }
    });
    if (currentCarrossel == 0){
        document.querySelector('.arrow_left_div').style.display = "none";
    }
    btnLeftCarrossel.addEventListener('click', ()=>{   
        currentCarrossel--;
        console.log(currentCarrossel);
        if ( currentCarrossel == 0){
            document.querySelector('.arrow_left_div').style.display = "none";
        }
        if (currentCarrossel < 0){
            document.querySelector('.Bloco_Chaves_UL').style.cssText = `transform: translate(${0*-300}px);`;
            currentCarrossel++;
        } else {
            document.querySelector('.Bloco_Chaves_UL').style.cssText = `transform: translate(${currentCarrossel*-300}px);`;
        }
    });
}
carrossel();*/
