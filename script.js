let plusBtn =document.getElementById('add-task');
let taskContainer=document.querySelector('.task-container');
let inputText=document.getElementById('input-text');

plusBtn.addEventListener('click',function(){
    let task=document.createElement('div');
    // task.classList.add('tasks');
    let li=document.createElement('li');
    li.innerText=`${inputText.value}`;
    task.appendChild(li);
    taskContainer.appendChild(task);
})