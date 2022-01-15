const todos = [
    {
        id: 1,
        title: 'Go To School',
        completed: true
    },
    {
        id: 2,
        title: 'Go to Museum',
        completed: true
    },
    {
        id: 3,
        title: 'Go shopping',
        completed: false
    },
]

for(let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    if (todo.completed === true) {
        console.log(i, todo.title);
    }
}

for(let i of todos) {
    if (i.completed === true) {
        console.log(i.title);
    }  
}