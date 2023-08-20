let buttonInputs = document.querySelectorAll('input[type="button"]');
let screen = document.querySelector('input[type="text"]');

buttonInputs.forEach((buttonInput)=>{
    buttonInput.addEventListener('click', (button)=>{
        if(button.target.value == '=')
        {
            screen.value = eval(screen.value.replace('x','*'));
        }
        else if(button.target.value == 'AC'){
            screen.value = '';
        }
        else if(button.target.value == 'DE'){
            screen.value = screen.value.slice(0,-1);
        }
        else
        {
            screen.value += button.target.value;
        }
    })

    buttonInput.addEventListener('mousedown',()=>{
        buttonInput.classList.add("clikedBtn");
    })
    buttonInput.addEventListener('mouseup',()=>{
        buttonInput.classList.remove("clikedBtn");
    })
    buttonInput.addEventListener('mouseleave',()=>{
        buttonInput.classList.remove("clikedBtn");
    })

    buttonInput.addEventListener('touchstart',()=>{
        buttonInput.classList.add("clikedBtn");
    })
    buttonInput.addEventListener('touchend',()=>{
        buttonInput.classList.remove("clikedBtn");
    })
    buttonInput.addEventListener('touchcancel',()=>{
        buttonInput.classList.remove("clikedBtn");
    })
})


