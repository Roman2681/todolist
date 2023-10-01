const list = document.getElementsByClassName("list")[0]
addDeleteHandlers()

function addItem() {
    const itemText = prompt("Что добавить?") || 'не определено'
    const item = document.createElement("div")
    item.innerHTML = 
        `${itemText}<button class="btn delete_btn">X</button>`
    list.appendChild(item)
    addDeleteHandlers()
}

function clearList() {
    list.innerHTML = ""
}

function deleteItem(event) {
    event.target.parentElement.remove()
}


function addDeleteHandlers() {
    const deleteButtons = document.getElementsByClassName("delete_btn")
    for (let i = 0; i < deleteButtons.length; i++) {
        const deleteButton = deleteButtons[i];
        deleteButton.addEventListener("click", deleteItem)
    }
}