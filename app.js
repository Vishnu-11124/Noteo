
const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')

const addTask = document.querySelector('button')

addTask.addEventListener('click', () => {
    let tasks = inputBox.value.trim()
    if(tasks === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = tasks
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }

    inputBox.value = '';
    saveData(); 

})

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
})

let saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
}

let showTask = () => {
    listContainer.innerHTML = localStorage.getItem('data')
}

showTask()