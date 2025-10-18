let display = document.getElementById('displayAll');

let btns = document.querySelectorAll('button') ;
let butnArr = Array.from(btns);

let str = '';

butnArr.forEach(btn => {
    btn.addEventListener('click',(e) => {
        if(e.target.innerHTML == 'AC'){
            str = '';
            display.value = str;
        }
        else if(e.target.innerHTML == 'DEL'){
            str = str.substring(0,str.length-1);
            display.value = str; 
        }
        else if(e.target.innerHTML == '='){
            str = eval(str);
            display.value = str; 
        }
        else{
            str += e.target.innerHTML ;
            display.value = str;
        }
    });
});

