let openBtn = document.querySelector('.open-btn');

let modal = document.querySelector('.modal-container');

let closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click',()=>{
    modal.classList.add('active');
})

closeBtn.addEventListener('click',()=>{
    modal.classList.remove('active');

})