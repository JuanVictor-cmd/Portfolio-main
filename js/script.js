
function escrevendoLetra(){
    function escrevendo(elemento) {
    const arrayTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrayTexto.forEach((letra, i)=>{
        setTimeout(()=> elemento.innerHTML += letra, 80 * i)
    });
}

const titulo = document.querySelector('.digitando');
escrevendo(titulo);

}

const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .nav-primary');

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})

escrevendoLetra();

const listaAll = document.querySelectorAll('.projects-armazenamento ul li');
const buttonGeral = document.querySelectorAll('.projects-models ul li');
const buttonAll = document.querySelectorAll('.projects-models .all');

function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    });
    buttonGeral[index].classList.add('ativo');
}

buttonGeral.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        removeClick(index);
    })
});


function showList(lista, button = "all"){
    lista.forEach((item)=>{
        item.classList.remove('ativo');
    });
    if(button == "game"){
        lista[4].classList.add('ativo');
    }
    if(button == "website"){
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[5].classList.add('ativo'); //namoro
    }
    if(button == "mobile"){
        lista[0].classList.add('');
    }
    if(button == "all"){
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }
}

buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains('all')){
            showList(listaAll);
        }
        if(currentButton.classList.contains('game')){
            showList(listaAll, "game");
        }
        if(currentButton.classList.contains('website')){
            showList(listaAll, "website");
        }
        if(currentButton.classList.contains('mobile')){
            showList(listaAll, "mobile");
        }
    })
})