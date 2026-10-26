const changeModeBtn = document.querySelector('.changeModeBtn')
const body = document.querySelector('body')
    const changeMode = () =>{
        body.classList.toggle('darkMode')
    }



changeModeBtn.addEventListener('click', changeMode )