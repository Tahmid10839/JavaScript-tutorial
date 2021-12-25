
let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = '';

for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);

        if(buttonText=='X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText=='C'){
            screenValue = " ";
            screen.value = screenValue;
        }
        else if(buttonText=='='){
            screenValue = eval(screenValue);
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}