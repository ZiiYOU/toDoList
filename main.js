const todoAdd = document.querySelector('.todoAdd');
const input = document.querySelector('input');
const list = document.querySelector('.list')


// 기능 1. 공백 체크한 후 할 일 추가하기
// 'submit' - <form> element 에서만 작동.
todoAdd.addEventListener('submit', (event)=>{
    event.preventDefault();

    if(input.value.trim() != ''){
        const todoItem = document.createElement('div');
        todoItem.classList.add('todoItem');

        const todoCheckBox = document.createElement('div');
        todoCheckBox.classList.add('todoCheckBox');

        const checkBox = document.createElement('div');
        checkBox.classList.add('checkBox');

        const checkIcon = document.createElement('div');
        checkIcon.classList.add('checkIcon');

        const item  = document.createElement('div');
        item.classList.add('item');

        const deleteBox = document.createElement('div');
        deleteBox.classList.add('deleteBox');

        checkBox.appendChild(checkIcon);
        todoCheckBox.appendChild(checkBox);
        todoCheckBox.appendChild(item);
        todoItem.appendChild(todoCheckBox);
        todoItem.appendChild(deleteBox);
        list.appendChild(todoItem);

        item.textContent = input.value;
        deleteBox.append('x');
        checkIcon.append('✔️')

        const deleteTodo = (event)=>{
            const x = event.target.parentElement;
            x.remove();
        }

        // 기능 2. 할 일 마친 후 체크하기
        checkBox.addEventListener('click',(event)=>{
            checkIcon.classList.toggle('done');
            item.classList.toggle('done');
        });

        // 기능 3. 할 일 목록에서 삭제하기
        //  - 문제 : 자꾸 모든 목록이 다 삭제된다. 
        //  - 해결 : todoItem 을 전역변수로 두고 삭제하니 모든 목록 삭제. 
        // 따라서 리스트들을 추가할 전역변수 list를 따로 만들고, 함수 내에서 todoItem을 생성하여 todoCheckbox와 deleteBox를 자식 요소로 담아주었다.
        deleteBox.addEventListener('click', deleteTodo);
    }
    
    input.value = '';
})
