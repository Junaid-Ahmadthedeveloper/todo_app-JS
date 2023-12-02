let form = document.getElementById('todo_form');
let error = document.getElementById('TodoError');
let ullist = document.getElementById('list');

form.addEventListener('submit', function(a) {
    a.preventDefault();
    let todoel = document.getElementById('todoinput');
   let todo =  todoel.value; 


    if(todo == "")
    {
        error.innerHTML = "Please Enter Todo...";
        todoel.classList.add('is-invalid');
    }
    else
    {
        addtodo(todo);

        error.innerHTML = "";
        todoel.classList.remove('is-invalid');
    }  
});

function addtodo(todo)
{
    let arr = [];
    if(sessionStorage.getItem('data'))
    {
    let sessiontodo = sessionStorage.getItem('data');
    let splittodo = sessiontodo.split(',');    

    arr.push(splittodo,todo);
    sessionStorage.setItem('data',arr);

    }
    else{

    arr.push(todo);
    sessionStorage.setItem('data',arr);
    }
    document.getElementById('todoinput').value = "";
    show();
    removetodo();
} 

show();
function show()
{
    ullist.innerHTML = "";
    if(sessionStorage.getItem('data'))
    {
        let sessiontodo  = sessionStorage.getItem('data');
        let splittodo = sessiontodo.split(',');

        for (let a = 0; a < splittodo.length; a++)
        {
            let li = document.createElement('li');
            li.classList.add('todoli');
            let item = splittodo[a];
            li.append(item);
            ullist.prepend(li);
                     
        }
    }
}
removetodo();
function removetodo()
{
    let elements = document.querySelectorAll('.todoli');

    if(sessionStorage.getItem('data'))
    {
        let sessiontodo  = sessionStorage.getItem('data');
        let splittodo = sessiontodo.split(',');


    for (let i = 0; i < elements.length; i++) {

       elements[i].addEventListener('click',function()
       {
        this.remove();
        removesession(this.innerHTML,splittodo);

       });
    }
}
}
function removesession(clickeditem,splittodo)
{
    for (let a = 0; a < splittodo.length; a++) {
        if (clickeditem == splittodo[a])
        {
            splittodo.splice(a,1);
        }
        sessionStorage.setItem('data',splittodo);
    }
    
}
