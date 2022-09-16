
let rate = document.querySelectorAll(".rate");
let rate1 = document.querySelector('.rate1');
let rate2 = document.querySelector('.rate2');
let rate3 = document.querySelector('.rate3');
let rate4 = document.querySelector('.rate4');
let rate5 = document.querySelector('.rate5');
let submit = document.querySelector('.submit');
let box = document.querySelector('.box');
let ratedval = document.querySelector('.ratedval');


let buttons = Array.from(document.querySelectorAll('.rate'));
buttons.push(submit);

buttons.map(buttons => {
    buttons.addEventListener('click', (e) => { 
        switch (e.target.innerText){
        case '1':            
                ratedval.innerText = e.target.innerText;             
            break;
        case '2':
                ratedval.innerText = e.target.innerText;
            break;
        case '3':
                ratedval.innerText = e.target.innerText;
        break;
        case '4':
                ratedval.innerText = e.target.innerText;
        break;
        case '5':   
                ratedval.innerText = e.target.innerText;
        break;

        case 'SUBMIT': 
        if(!ratedval.innerText){
            alert("please make a selection");       
        }else{
            box = box.classList.add('invisible');
        }
        break;
        default:
       }

    });  
});



function myFunction(rat) {
        rat.classList.toggle("pressed"); 
 }


 