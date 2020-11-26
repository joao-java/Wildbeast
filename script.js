//Logica
//1 - Selecionar elementos que devem ser animados 
//2 - Definir a classe que é adicionada durante a animaçao 
//3 - Criar funçao de animaçao 
//3.1 - Verificar a distancia entre a barra de scroll e o topo do site 
//3.2 - Verificar se a distancia do 3.1 + Offset é maior do que a distancia entre o elemento e o topo da pagina  
//3.3 - Se verdadeiro adicionar classe de animaçao, remover se for falso.
//4 - Ativar a funçao de animaçao toda vez que o usuario utilizar o scroll 
//5 - Otimizar animaçao 

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args); 
        }
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        }else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();


if(target.length) {
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
        console.log('dsadsa');
    }, 200));
}