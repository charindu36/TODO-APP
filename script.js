const inputBox = document.getElementById('todo-input')
const listContainer = document.getElementById('todo-list')

function AddTask(){
    if(inputBox.value ===''){
        alert('Please enter a task')
    }else{
        let li = document.createElement('li')
        let span =document.createElement('span')
        li.innerHTML= inputBox.value
        span.innerHTML = '\u00d7'
        li.appendChild(span)
        listContainer.appendChild(li)
    }
    inputBox.value = ''
    saveTasks()
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveTasks()
    }else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove()
        saveTasks()
    }
})

function saveTasks(){
    localStorage.setItem('todoList', listContainer.innerHTML)
}

function showTasks(){
    listContainer.innerHTML= localStorage.getItem('todoList')
}

showTasks()