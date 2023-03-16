const sections = document.querySelectorAll('.section');
const sBtns = document.querySelectorAll('.controls');
const sBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main');

function pageTrans(){
    //button active class 
    for (let i = 0; i < sBtn.length; i++)
    {
        sBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.activeBtn');
            currentBtn[0].className = currentBtn[0].className.replace('activeBtn', '');
            this.className += 'activeBtn';
        })
    }
}

pageTrans();