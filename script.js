let buttons = document.querySelectorAll('.buttons #num')
let resultBox = document.querySelector('.result span')
let clearBtn = document.querySelector('#clear')
let cancelBtn = document.querySelector("#cancel")
let percentBtn = document.querySelector("#percent")
let equalBtn = document.querySelector("#equal")



buttons.forEach(clicked =>{
    clicked.addEventListener('click',()=>{
        resultBox.textContent +=  clicked.textContent
    })
});

clearBtn.addEventListener('click',()=>{
    resultBox.textContent = ''
});

cancelBtn.addEventListener('click',()=>{
    resultBox.textContent = resultBox.textContent.slice(0, -1);
});


percentBtn.addEventListener("click", ()=>{
    let percentage = parseFloat(resultBox.textContent) / 100;
    resultBox.textContent = percentage.toString();
});

equalBtn.addEventListener("click", ()=>{
    resultBox.textContent = eval(resultBox.textContent);
});



