const addButton = document.getElementById('sum-button');


addButton.addEventListener('click', () => {
    const input1 = document.getElementById('add-one');
    const input2 = document.getElementById('add-two');
    const resultSpan = document.getElementById('sum-result');

    const firstValue = Number(input1.value);
    const secondValue = Number(input2.value);
    const sum = firstValue + secondValue;

    resultSpan.textContent = sum;
});

const subButton = document.getElementById('sub-button');


subButton.addEventListener('click', () => {
    const input1 = document.getElementById('add-one');
    const input2 = document.getElementById('add-two');
    const resultSpan = document.getElementById('sub-result');

    const firstValue = Number(input1.value);
    const secondValue = Number(input2.value);
    const sum = firstValue - secondValue;

    resultSpan.textContent = -sum;
});