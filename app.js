const addButton = document.getElementById('sum-button');


addButton.addEventListener('click' , () => {
    const input1 = document.getElementById('add-one');
    const input2 = document.getElementById('add-two');
    
   
    const resultSpan = document.getElementById('sum-result');
    resultSpan.textContent = Number(input1.value) + Number(input2.value);
})

const subButton = document.getElementById('sub-button');


subButton.addEventListener('click' , () => {
    const input3 = document.getElementById('sub-one');
    const input4 = document.getElementById('sub-two');
    
    

    const resultSpan = document.getElementById('sub-result');
    resultSpan.textContent = Number(input3.value) - Number(input4.value);
})

const multButton = document.getElementById('mult-button');


multButton.addEventListener('click' , () => {
    const input5 = document.getElementById('mult-one');
    const input6 = document.getElementById('mult-two');
    
    

    const resultSpan = document.getElementById('mult-result');
    resultSpan.textContent = Number(input5.value) * Number(input6.value);
})

const divButton = document.getElementById('div-button');


divButton.addEventListener('click' , () => {
    const input7 = document.getElementById('div-one');
    const input8 = document.getElementById('div-two');
    
    

    const resultSpan = document.getElementById('div-result');
    resultSpan.textContent = Number(input7.value) / Number(input8.value);
})