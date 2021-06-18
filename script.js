const First_Input = document.createElement('input');
document.body.appendChild(First_Input);

 
const First_Button = document.createElement('button');
document.body.appendChild(First_Button);
First_Button.innerHTML = "Button"

const button = document.querySelector('button');
button.addEventListener('click',showInput);


const UL = document.createElement('ul');
document.body.appendChild(UL);// 


function showInput(){
    const First_Input = document.querySelector('input');
     console.log(First_Input.value);

     const LI = document.createElement('li');

    UL.appendChild(LI);

    LI.innerHTML = First_Input.value;

    document.querySelector('input').value='';


}

