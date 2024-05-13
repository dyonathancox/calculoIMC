 const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//const modalWrapper = document.querySelector('.modal-wrapper')
//const btnClose = document.querySelector('.close')
//const modalMessage = document.querySelector('.modal .title span')



export const modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    btnClose: document.querySelector('.close'),

    open(){
        modal.wrapper.classList.add('open')
    },
    close(){
        modal.wrapper.classList.remove('open')
    }
}

modal.btnClose.onclick = () => modal.close()


//FECHANDO COM O ESC
window.addEventListener('keydown', handleKeyDown)
function handleKeyDown(event){
    if(event.key === 'Escape'){
        modal.close()
    }
}