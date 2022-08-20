const num1 = document.querySelector('.calc__num--1');
const num2 = document.querySelector('.calc__num--2');
const button = document.querySelectorAll('.calc__btn');
const btnTotal = document.querySelector('.calc__btn--total');
const err = document.querySelector('.calc__error');

let firstNum;
num1.addEventListener('change', () => {
	firstNum = Number(num1.value);
});

let secondNum;
num2.addEventListener('change', () => {
	secondNum = Number(num2.value);
});

let result;

class Calculator {
	static calcPlus(a, b) {
		return a + b;
	}

	static calcMinus(a, b) {
		return a - b;
	}

	static calcMultiple(a, b) {
		return a * b;
	}

	static calcDivision(a, b) {
		return a / b;
	}
}

button[0].addEventListener('click', () => {
	result = Calculator.calcPlus(firstNum, secondNum);
});

button[1].addEventListener('click', () => {
	result = Calculator.calcMinus(firstNum, secondNum);
});

button[2].addEventListener('click', () => {
	result = Calculator.calcMultiple(firstNum, secondNum);
});

button[3].addEventListener('click', () => {
	err.textContent = '';

	if (secondNum === 0) {
		err.textContent = 'На ноль делить нельзя!';
	} else {
		result = Calculator.calcDivision(firstNum, secondNum);
	}
});

btnTotal.addEventListener('click', () => {
	const calcResult = document.querySelector('.calc__result');
	calcResult.textContent = `Ответ: ${result}`;

	const totalOutput = document.querySelector('.calc__result');
	totalOutput.style.backgroundColor = '#fff';
});