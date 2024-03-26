const todoAdd = document.querySelector('.todoAdd');
const input = document.querySelector('input');
const todoItem = document.querySelector('.todoItem');


// 기능 1. 공백 체크한 후 할 일 추가하기
// 'submit' - <form> element 에서만 작동.
todoAdd.addEventListener('submit', (event)=>{
    event.preventDefault();

    if(input.value.trim() != ''){
        const todoCheckBox = document.createElement('div');
        todoCheckBox.classList.add('todoCheckBox');

        const checkBox = document.createElement('div');
        checkBox.classList.add('checkBox');

        const checkIcon = document.createElement('div');
        checkIcon.classList.add('checkIcon');

        const item  = document.createElement('span');
        item.classList.add('item');

        const deleteBox = document.createElement('div');
        deleteBox.classList.add('deleteBox');

        checkBox.appendChild(checkIcon);
        todoCheckBox.appendChild(checkBox);
        todoCheckBox.appendChild(item);
        todoItem.appendChild(deleteBox);
        todoItem.appendChild(todoCheckBox);

        item.innerText = input.value;
        deleteBox.append('x');
        checkIcon.append('✔️')


        // 기능 2. 할 일 마친 후 체크하기
        checkBox.addEventListener('click',(event)=>{
            checkIcon.classList.toggle('done');
        });
    }
    
    input.value = '';
})


