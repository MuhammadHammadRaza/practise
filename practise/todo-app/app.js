//targetting list which to be displayed
var list = document.getElementById("list");
//targetting input bar
var todoItem = document.getElementById("todoItem");

var items = JSON.parse(localStorage.getItem("todos")) || [];


function addTodo() {
    
    //creating if to prevent user from creating empty lists
    if (todoItem.value) {
        var key = new Date().getTime();
        
        items.push({
            item: todoItem.value,
            key: key
        });
        localStorage.setItem("todos", JSON.stringify(items));
        // location.href = "./index.html";
        list.innerHTML = "";
        todoList();
    }
    console.log(items);
}

function deleteItem(e, key) {
    var itemsList = JSON.parse(localStorage.getItem("todos"));
    var newItemsList = itemsList.filter(updated => updated.key !== key)
    localStorage.setItem("todos",JSON.stringify(newItemsList));
    e.parentNode.remove();
    location.href = "./index.html";
    location.href = "./index.html";
}

function editItem(e,key) {
    var val = prompt("Enter updated value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
    var itemsList = JSON.parse(localStorage.getItem("todos"));
    itemsList.forEach(element => {
        if(element.key == key){
            element.item = val;
        }
    });
    localStorage.setItem("todos",JSON.stringify(itemsList));
    location.href = "./index.html";
}

function dltTodo() {
    list.innerHTML = "";
    localStorage.removeItem("todos");
    location.href = "./index.html";
}

function todoList() {
    var itemsList = JSON.parse(localStorage.getItem("todos"));
    itemsList.forEach(element => {
        //creating li tag
        var listItem = document.createElement("li");

        //making a variable, storing input bar value in the form of text node
        var lItemName = document.createTextNode(element.item);

        //storing input bar value stored in var lItemName as its child
        listItem.appendChild(lItemName);

        //storing li tag containing values as child of <ul> in HTML
        list.appendChild(listItem);

        todoItem.value = "";

        listItem.appendChild(document.createElement("br"))

        //creating delete button
        var deleteBtn = document.createElement("button");

        //making variable to store name of button
        var dltBtnName = document.createTextNode("DELETE");

        // storing dltbtnName value in deleteBtn
        deleteBtn.appendChild(dltBtnName);

        // adding onclick attribute to deleteBtn, function deleteItem will be called
        deleteBtn.setAttribute("onclick", `deleteItem(this,${element.key})`);
        deleteBtn.setAttribute("class", "button");

        //adding delete button in li
        listItem.appendChild(deleteBtn);

        //creating edit button
        var editBtn = document.createElement("button");

        //making variable to store name of button
        var editBtnName = document.createTextNode("EDIT");

        // storing editBtnName value in editBtn
        editBtn.appendChild(editBtnName);

        // adding onclick attribute to editBtn, function editItem will be called
        editBtn.setAttribute("onclick", `editItem(this,${element.key})`);
        deleteBtn.setAttribute("class", "button");

        //adding delete button in li
        listItem.appendChild(editBtn);
    });
}



