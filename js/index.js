// function calcPlus () {
// 	let a = +prompt('Введите первое число:', '');
// 	let b =  +prompt('Введите второе число:', '');

// 	return alert(`Ответ: ${a + b}`);
// }

// function calcMinus () {
// 	let a = +prompt('Введите первое число:', '');
// 	let b =  +prompt('Введите второе число:', '');

// 	return alert(`Ответ: ${a - b}`);
// }

// function calcMultiple () {
// 	let a = +prompt('Введите первое число:', '');
// 	let b =  +prompt('Введите второе число:', '');

// 	return alert(`Ответ: ${a * b}`);
// }

// function calcDivision () {
// 	let a = +prompt('Введите первое число:', '');
// 	let b =  +prompt('Введите второе число:', '');

// 	return alert(`Ответ: ${a / b}`);
// }

const num1 = document.querySelector('.calc__num--1');
const num2 = document.querySelector('.calc__num--2');

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

function calcPlus() {
	result = firstNum() + secondNum();
}

function calcMinus () {	
	result = firstNum() - secondNum();
}

function calcMultiple () {	
	result = firstNum() * secondNum();
}

function calcDivision () {	
	result = firstNum() / secondNum();
}