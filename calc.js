
window.addEventListener('DOMContentLoaded', () => {
    const genderItem = document.querySelectorAll('#gender .calculator-item'),
    gender = document.querySelector('#gender'),
    female = gender.querySelector('#female'),
    male = gender.querySelector('#male');
    const activnost = document.querySelector('#activnost'),
    activnostItem = document.querySelectorAll('#activnost .calculator-item');
    const resultButton = document.querySelector('.calculator-item.result'),
    height = document.querySelector('#height'),
    width = document.querySelector('#width'),
    age = document.querySelector('#age');
    let num = document.querySelector('.num'),
    error = document.querySelector('.error');

    function removeActive(items, classActive) {
    items.forEach(item => {
    item.classList.remove(classActive);
    item.style.border = '1px solid #ccc';
    });
    }
    gender.addEventListener('click', (e) => {
    removeActive(genderItem, 'calculator-item__active');  
    genderItem.forEach(item => {
    if(e.target == item) {
        removeActive(genderItem, 'calculator-item__active');
        item.classList.add('calculator-item__active');
    }
    });
    });

    activnost.addEventListener('click', (e) => {
    removeActive(activnostItem, 'calculator-item__active');
    activnostItem.forEach((item, i) => {
    if(e.target == item) {
        removeActive(activnostItem, 'calculator-item__active');
        item.classList.add('calculator-item__active');
        
    }
    });
    });
    resultButton.addEventListener('click', () => {
    let act = '';
    let res = '';  

    activnostItem.forEach(item => {
    if(item.classList.contains('calculator-item__active')) {
        act = item.getAttribute('data-radio');           
    }        
    }) ;
    
    if(female.classList.contains('calculator-item__active') && act != '' && width.value != '' && height.value != '' && age.value != '') {
    res = ((10 * +width.value) + (6.25 * +height.value) - (5 * +age.value) - 161) * +act;       
    num.innerHTML = Math.round(res);
    } else if(male.classList.contains('calculator-item__active') && act != '' && width.value != '' && height.value != '' && age.value != '') {
    res = ((10 * +width.value) + (6.25 * +height.value) - (5 * +age.value) + 5) * +act;      
    
    num.innerHTML = Math.round(res);
    } else {
    error.innerHTML = 'Введите все данные';
    setTimeout(() => { error.innerHTML = '';} , 5000);
    }
    });
});
