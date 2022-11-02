//CADASTRO DE CHAVES
/*const formCadastro = document.querySelector('.form1_cad_Chaves');
const button = document.querySelector('.form1_cad_Chaves div');
const formsChave = document.querySelectorAll('#formChave');
const buttonFechaCad = document.querySelector('#fechaCadastro');
var aux;
formsChave.forEach((element, index)=>{
    element.classList.remove('active');
    button.addEventListener('click', ()=>{
        element.classList.toggle('active');
        aux = index;      
    });
    
})*/

const formCadastro = document.querySelector('.form1_cad_Chaves');
const botao_cadastro = document.querySelector('#botao-cadastro1');
const formsChave = document.querySelectorAll('#formChave');
const buttonFechaCad = document.querySelector('#fechaCadastro');


const botao_salvar = document.querySelector('#SubmitAddChave');

const botao_alt_chave = document.querySelector('#SubmitAlterarPredio');

const botao_excluir_chave = document.querySelector('#SubmitExcluirPredio');

const formAlterar = document.querySelector('.form2_alt_Chaves');
const botao_alterar = document.querySelector('#botao-alterar1');

const botao_excluir = document.querySelector('#botao-excluir1');

const formExcluir = document.querySelector('.form3_excl_Chaves');

function abrirForm(){
    formCadastro.style.display = 'flex';
    botao_cadastro.style.display = "none";
    formAlterar.style.display = 'none';
    botao_alterar.style.display = 'flex';
    formExcluir.style.display = 'none';
    botao_excluir.style.display = 'flex';
}

function fecharFormSalvar(){
    formCadastro.style.display = 'none';
    botao_cadastro.style.display = "flex";
    
}

function fecharFormAlt(){
    formAlterar.style.display = 'flex';
    formCadastro.style.display = 'none';
    botao_cadastro.style.display = "flex";
    botao_alterar.style.display = 'none';
    formExcluir.style.display = 'none';
    botao_excluir.style.display = 'flex';
}

function fecharFormExcluir(){
    formAlterar.style.display = 'none';
    formCadastro.style.display = 'none';
    botao_alterar.style.display = 'flex';
    formExcluir.style.display = 'flex';
    botao_excluir.style.display = 'none';
    botao_cadastro.style.display = "flex";
}

botao_salvar.addEventListener("click", fecharFormSalvar);

botao_cadastro.addEventListener("click", abrirForm);

botao_alterar.addEventListener("click", fecharFormAlt);

botao_excluir.addEventListener("click", fecharFormExcluir);

botao_alt_chave.addEventListener("click", ()=>{
    //formAlterar.style.display = 'none';
    botao_alterar.style.display = 'none';
});

botao_excluir_chave.addEventListener("click", ()=>{
    formExcluir.style.display = 'none';
    botao_excluir.style.display = 'flex';
});

// Pop para inserir os novos dados da chave que vai ser alterada.
