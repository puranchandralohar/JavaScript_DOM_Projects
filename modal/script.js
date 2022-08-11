let button = document.querySelector('.modal-btn');
let modal = document.getElementById('modal');
let closeButton = document.querySelector('.close-btn');

button.addEventListener('click', ()=>{
    modal.classList.add("active");

});


closeButton.addEventListener('click', ()=>{
    modal.classList.remove("active");
});