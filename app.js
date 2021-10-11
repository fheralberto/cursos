const header = document.querySelector('.header')
const fondo = document.querySelector('.fondo')
const headerContent = document.querySelector('.header-content')

header.addEventListener('click', (e) => {
    if(e.target.classList.contains('logo') || e.target.classList.contains('titulo')){
        if(headerContent.classList.contains('blur2')){
            headerContent.classList.remove('blur2')
            fondo.classList.add('blur10')
        }
    } else {
        if(fondo.classList.contains('blur10')){
            fondo.classList.remove('blur10')
            headerContent.classList.add('blur2')
        }
        setTimeout( () =>{
            if(headerContent.classList.contains('blur2')){
                headerContent.classList.remove('blur2')
                fondo.classList.add('blur10')
            }
        },3000)
    }
})