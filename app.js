const addButton = document.getElementById('sum-button');


addButton.addEventListener('click' , () => {
    const input1 = document.getElementById('add-one');
    const input2 = document.getElementById('add-two');
    
   
    const resultSpan = document.getElementById('sum-result');
    resultSpan.textContent = Number(input1.value) + Number(input2.value);
})

const subButton = document.getElementById('sub-button');


addButton.addEventListener('click' , () => {
    const input3 = document.getElementById('sub-one');
    const input4 = document.getElementById('sub-two');
    
    

    const resultSpan = document.getElementById('sub-result');
    resultSpan.textContent = Number(input3.value) - Number(input4.value);
})