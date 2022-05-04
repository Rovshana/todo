const addForm = document.querySelector('.add');

const todos = document.querySelector('.todos')
const addingDom = (todo)=>{
let html = `
<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="fa-solid fa-trash-can delete"></i>

            </li>
            
`
todos.innerHTML += html
}


addForm.addEventListener('submit', (e) =>{
e.preventDefault();
const todo = addForm.add.value.trim()
//console.log(todo)
if(todo.length){
addingDom(todo)}
addForm.reset()


})