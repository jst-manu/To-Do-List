const btn=document.querySelector("#btn");
const Tinput=document.querySelector("#wrapper input");
const error=document.querySelector("#error");
const tasks=document.querySelector("#tasks");
const count = document.querySelector(".count-task");
const toogle=document.querySelector("#tDark");
const body=document.querySelector("body");
let taskcount=0;
let d=false;
toogle.addEventListener('click',()=>{
    if(!d){
        body.style.backgroundColor="black"
        body.style.color="white";
        body.style.transition='2.5s';
        d=true;
    }
    else{
        body.style.backgroundColor="#3693b8";
        body.style.color="black";
        body.style.transform="2.5s";
        d=false;
    }
    
})

const display=(taskcount)=>{
    count.innerText=taskcount;
};

const addTask=()=>{
    const taskname=Tinput.value.trim();
    error.style.display="none";
    if(!taskname){
        setTimeout(()=>{
            error.style.display="block";
        },200);
        return;
    }

const task=`<div class="task">
<input type="checkbox" class="task-check">
<span class="taskname">${taskname}</span>
<button class="edit">
<i class="fa-solid fa-pen-to-square"></i>
</button>
<button class="delete">
<i class="fa-solid fa-trash"></i>
</button>

</div>`;
tasks.insertAdjacentHTML("beforeend",task);
let dB=document.querySelectorAll(".delete");
dB.forEach((button)=>{
    button.onclick=()=>{
        button.parentNode.remove();
        taskcount-=1;
        display(taskcount);
    };
});
const eB=document.querySelectorAll(".edit");
eB.forEach((edi)=>{
    edi.onclick=(e)=>{
        let tE=e.target;
        if(!(e.target.className=="edit")){
            tE =e.target.parentElement;
        }
        Tinput.value=tE.previousElementSibling?.innerText;
        tE.parentNode.remove();
        taskcount-=1;
        display(taskcount);
    };
});
const tC=document.querySelectorAll(".task-check");
tC.forEach((cB)=>{
    cB.onchange=()=>{
        cB.nextElementSibling.classList.toggle("completed");
        if(cB.checked){
            taskcount-=1;
            
        }
        else{
            taskcount+=1;
        }
        display(taskcount);
    };

});
taskcount+=1;
display(taskcount);
Tinput.value="";
};
btn.addEventListener("click",addTask);
window.onload=()=>{
    taskcount=0;
    display(taskcount);
    Tinput.value="";
};