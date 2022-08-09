

let button = document.getElementById('btn');
let code = document.getElementById('code');


function randomNumber(max){
   let num = Math.floor(Math.random()*(max+1));
    return num;
}

button.addEventListener('click',()=>{

    let red = randomNumber(255);
    let green = randomNumber(255);
    let blue = randomNumber(255);  
            
    code.innerText = `(${red},${green},${blue})`;
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
})






