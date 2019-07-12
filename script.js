let tasks = [];

function add(){
    let task = document.querySelector('input').value;
    
    tasks.push(task);
   
    document.querySelector('input').value = "";

    document.querySelector('ul').innerHTML +=
    "<li>" + task + "</li>"
}