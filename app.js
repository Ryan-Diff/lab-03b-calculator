import { addtest, subtest, multtest, divtest } from "./test/utils.js";

const addButton = document.getElementById('sum-button');
const subButton = document.getElementById('sub-button');
const multButton = document.getElementById('mult-button');
const divButton = document.getElementById('div-button');
const input1 = document.getElementById('add-one');
const input2 = document.getElementById('add-two');
const input3 = document.getElementById('sub-one');
const input4 = document.getElementById('sub-two');
const input5 = document.getElementById('mult-one');
const input6 = document.getElementById('mult-two');
const input7 = document.getElementById('div-one');
const input8 = document.getElementById('div-two');

addButton.addEventListener('click' , () => {
    const resultSpan = document.getElementById('sum-result');
    // resultSpan.textContent = Number(input1.value) - Number(input2.value);
    resultSpan.textContent = addtest(Number(input1.value) , Number(input2.value));
})


subButton.addEventListener('click' , () => {
    const resultSpan = document.getElementById('sub-result');
    // resultSpan.textContent = Number(input3.value) - Number(input4.value);
    resultSpan.textContent = subtest(Number(input3.value) , Number(input4.value));
})

multButton.addEventListener('click' , () => {
    const resultSpan = document.getElementById('mult-result');
    // resultSpan.textContent = Number(input5.value) * Number(input6.value);
    resultSpan.textContent = multtest(Number(input5.value) , Number(input6.value));
})

divButton.addEventListener('click' , () => {
    const resultSpan = document.getElementById('div-result');
    // resultSpan.textContent = Number(input7.value) / Number(input8.value);
    resultSpan.textContent = divtest(Number(input7.value) , Number(input8.value));
})