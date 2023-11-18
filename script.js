let plusBtn =document.getElementById('add-task');
let taskContainer=document.querySelector('.task-container');
let inputText=document.getElementById('input-text');

plusBtn.addEventListener('click',function(){
    let task=document.createElement('div');
    task.classList.add('tasks');
    let li=document.createElement('li');
    li.innerText=`${inputText.value}`;
    task.appendChild(li);

    let checkButton =document.createElement('button')
    checkButton.classList.add('check-btn');
    checkButton.innerHTML=`<i class="fa-solid fa-check"></i>`
    task.appendChild(checkButton);

    let deleteButton =document.createElement('button')
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML=`<i class="fa-solid fa-trash-can"></i>`
    task.appendChild(deleteButton);

    if(inputText.value!=="")
        taskContainer.appendChild(task);
    else
        alert("please enter a task!")
    inputText.value="";

    checkButton.addEventListener('click',function(){
        if(checkButton.parentElement.style.textDecoration==="line-through")
            checkButton.parentElement.style.textDecoration="none";
        else
            checkButton.parentElement.style.textDecoration="line-through";
    })

    deleteButton.addEventListener("click",function(){
        deleteButton.parentElement.remove();
    })

})

