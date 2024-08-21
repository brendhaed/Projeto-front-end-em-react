const form = document.querySelector('#todo-form');
const taskTitleInput = document.querySelector('#task-title-input');
const todoListUl = document.querySelector('#todo-list');

let tasks = [] // [(title: 'tarefa 1', done:false), ...]
function renderTaskOnHtml(taskTitle, done = false){

    
}

window.onload = () => {
    const tasksOnLocalStorage = localStorage.getItem('tasks')
    if(!tasksOnLocalStorage) return
    tasks = JSON.parse(tasksOnLocalStorage)

    tasks.forEach(t => {
        renderTaskOnHtml(t.title)
    });
}

form.addEventListener('submit',(event) =>{
event.preventDefault()//evita o comportamento padrão de recarregar a página ao submeter o formulário

const taskTitle = taskTitleInput.value

if (taskTitle.length < 3){
    alert('sua tarefa precisa ter, pelo ao menos 3 carateres!')
    return;
})

//Adiconando a nova tarefa no array de tasks
tasks.push({
    title:taskTitle,
    done:false,

localStorage.setItem('tasks', JSON.stringify(tasks))

});

//Adicionando a nova tarefa no array de tasks
tasks.push({
    title:taskTitle,
    done:false,
});
localStorage.setItem('tasks', JSON.stringify(tasks))

//Adicionando a nova tarefa no HTML

renderTaskOnHtml(taskTitle)

taskTitleInput.value = ''


const li = document.createElement('li');

const input = document.createElement('input')
input.setAttribute('type', 'checkbox')
input.addEventListener('change', (event) => {
    
const span = document.createElement('span')
span.textContent = taskTitle

const button = document.createElement('button')
button.textContent = 'Remover'
button.addEventListener('click', (event) => {
    const liToRemove = event.target.parentElement

    const titleToRemove = liToRemove.querySelector('span').
    textContent //tarefa 1

    tasks = tasks.filter(t => t.title !== titleToRemove)
    todoListUl.removeChild(liToRemove)
    localStorage.setItem('tasks', JSON.stringify(tasks))

});

li.appendChild(input)
li.appendChild(span)
li.appendChild(button)

todoListUl.appendChild(li);

taskTitleInput.value =''
});