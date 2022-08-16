let button  = document.querySelector('.sidebar-toggle');

let sidebar = document.querySelector('.sidebar');


button.addEventListener('click',(e)=>{
    if(e.target.className.includes('fa-bars')){
        button.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        sidebar.style.width = "300px";
        sidebar.style.padding = "20px";
    }
    else if(e.target.className.includes('fa-xmark')){
        button.innerHTML = '<i class="fa-solid fa-bars"></i>'
        sidebar.style.width = "0px";
        sidebar.style.padding = "0px";
    }
});