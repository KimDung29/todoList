var toDos  = [
    {
        title: "AAAAAAAAAAAAA",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusantium.",
        completed: false,
    },
    {
        title: "BBBBBBBBBBBBB",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusantium.",
        completed: true,
    },
    {
        title: "CCCCCCCCCCCCCC",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusantium.",
        completed: false,
    },
];

let addNewTodo = document.querySelector(".addNewTodo");
let todoName = document.querySelector(".todo__name");
let todoDescription = document.querySelector(".todo__description");
let addBtn = document.querySelector(".add__btn");
let tbody = document.querySelector("tbody");


_init();
function _init() {
    _renderToDo();
    
}

function _renderToDo() {
    let render = "";
    for (let i = 0; i < toDos.length; i++) {
        render  += `
        <tr>
            <td class="no_no">${i + 1}</td>
            <td class="todoName__table ${toDos[i].completed ? "completed" : ""}">${toDos[i].title}</td>
            <td class="todoDescription__table">${toDos[i].description}</td>
            <td><i class="no_no fas fa-trash"></i></td>
        </tr>
        `       
    }
    tbody.innerHTML = render;
}



function _addNewToDo() {
    // Removal white space of input value
    if(todoName.value.trim() !== "") {
        toDos.push({
            title: todoName.value,
            description: todoDescription.value,
            completed: false,
        })
    }
}

addNewTodo.addEventListener("click", (e) => {

    if(e.target.matches(".add__btn")) {
        // Removal default event of button: reload the page when click event occur
        e.preventDefault();
        _addNewToDo();
        _renderToDo() ;

        // Clear input field value
        todoName.value = "";
        todoDescription.value = "";
    }

})

tbody.addEventListener("click", (e) => {
    // find element which closest with tr
    let tr = e.target.closest("tr");
    // get value of todoName__table
    let todoNameTable = tr.querySelector("td.todoName__table").innerText;
    // find index of todoName__table value
    let indexOfTodoNameTable = toDos.findIndex((todo) => {
        return todo.title === todoNameTable;
    });

    if(e.target.matches(".fa-trash")){
        // at the index - removal tr element
        toDos.splice(indexOfTodoNameTable, 1);
        // reload the array to update order of No.
        _renderToDo();
    }

    if(e.target.matches(".todoName__table")) {
      
        toDos[indexOfTodoNameTable].completed = !toDos[indexOfTodoNameTable].completed;
        _renderToDo();
    }
});

