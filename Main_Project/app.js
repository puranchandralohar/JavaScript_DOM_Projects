let openBtn = document.querySelector(".open-btn");

let modal = document.querySelector(".modal-container");

let closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

let modalBtn = document.querySelector(".btn");

modalBtn.addEventListener("click", () => {

  let mainContent = document.querySelector(".main-content");

  // function getColor(){
  //   let boxes = Array.from(document.querySelectorAll('.box'));
  //   boxes.map((box)=>{
  //     box.addEventListener('click',(e)=>{
  //       let color =  e.target.innerText;
  //       // console.log(color);
  //       taskhead.classList.toggle(`${color}-box`);
  //     });
  //   });
  // }
  // getColor();
  

  modal.classList.remove('active');

  let msg = document.querySelector("#msg"); //Textarea

  let task = document.createElement("div");
  task.classList.add("task");
  mainContent.append(task);   //append task

  let taskhead = document.createElement("div"); //inside task(color);
  taskhead.classList.add("task-head");
  taskhead.style.height = '35px';
  taskhead.style.backgroundColor = getColor();
  task.append(taskhead);

  let h1 = document.createElement('h1');
  h1.innerText = msg.value;
  task.append(h1);

  let icons = document.createElement('div');
  icons.classList.add('icons');
  task.append(icons);

  let lockbtn = document.createElement('button');
  lockbtn.classList.add("lockbtn");
  lockbtn.innerHTML = '<i class="fa-solid fa-lock"></i>';
  icons.append(lockbtn);

    lockbtn.addEventListener('click',()=>{
      if(iconSet.style.visibility == 'hidden'){
          iconSet.style.visibility = 'visible';
          lockbtn.innerHTML = '<i class="fa-solid fa-lock-open"></i>';
      }
      else if(iconSet.style.visibility == 'visible'){
          iconSet.style.visibility = 'hidden';
          lockbtn.innerHTML = '<i class="fa-solid fa-lock"></i>';
      }   
    });

  let iconSet = document.createElement('div')
  iconSet.classList.add('icon-set');
  icons.append(iconSet);
  iconSet.style.visibility = 'hidden';

  let check = document.createElement('button');
  check.classList.add('check');
  check.innerHTML = '<i class="fa-solid fa-check"></i>';
  iconSet.append(check);

  let trash = document.createElement('button');
  trash.classList.add('trash');
  trash.innerHTML = '<i class="fa-solid fa-trash"></i>';
  iconSet.append(trash);

  trash.addEventListener('click',()=>{
    task.remove();
  })

  let pencil = document.createElement('button');
  pencil.classList.add('pencil');
  pencil.innerHTML = '<i class="fa-solid fa-pencil"></i>';
  iconSet.append(pencil);

  pencil.addEventListener('click',() =>{
        pencil.style.color = "green";
        h1.contentEditable = true;
  })

  let colorBox = document.createElement('button');
  colorBox.classList.add('colorBox');
  iconSet.append(colorBox);
  colorBox.style.border = "2px solid black";

});






