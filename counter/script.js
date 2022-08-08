const display = document.querySelector('.num');

let buttons = Array.from(document.querySelectorAll('.btn'));

let count = 0;

buttons.map((btn)=>{
        btn.addEventListener('click',(e)=>{
            if(e.target.id === 'inc'){
                count = count + 1;
                display.style.color = 'green'

            }
            else if(e.target.id === 'dec'){
                count= count - 1;
                display.style.color = 'red'
            }
            else if(e.target.id === 'reset'){
                count = 0; 
                display.style.color = 'black';

            }         
            display.innerText = count;
        })
})
