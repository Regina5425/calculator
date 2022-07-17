const num1 = document.querySelector('.calc__num--1');
const num2 = document.querySelector('.calc__num--2');
const button = document.querySelectorAll('.calc__btn');

let firstNum = function () {
	return Number(num1.value);
};

let secondNum = function () {
	return Number(num2.value);
};

let result;

function pasteResult() {
	const calcResult = document.querySelector('.calc__result');
	calcResult.textContent = `Ответ: ${result}`;

	const totalOutput = document.querySelector('.calc__result');
	totalOutput.style.backgroundColor = '#fff';
}

// function calcPlus() {
// 	result = firstNum() + secondNum();
// }

// function calcMinus () {	
// 	result = firstNum() - secondNum();
// }

// function calcMultiple () {	
// 	result = firstNum() * secondNum();
// }

// function calcDivision () {
// 	let zeroNum = secondNum();

// 	if (zeroNum === 0) {
// 		alert('На ноль делить нельзя!');
// 	} else {
// 		result = firstNum() / secondNum();
// 	}
// }

button[0].addEventListener('click', function calcPlus() {
	result = firstNum() + secondNum();
});

button[1].addEventListener('click', function calcMinus() {
	result = firstNum() - secondNum();
});

button[2].addEventListener('click', function calcMultiple() {
	result = firstNum() * secondNum();
});

button[3].addEventListener('click', function calcDivision() {
	let zeroNum = secondNum();

	if (zeroNum === 0) {
		alert('На ноль делить нельзя!');
	} else {
		result = firstNum() / secondNum();
	}
});