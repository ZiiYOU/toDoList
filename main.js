const inputEl = document.querySelector('input');
const onClickEl = document.querySelector('.onClick');

onClickEl.addEventListener('click',function(){
    console.log(inputEl.value);
    inputEl.value = ''
});