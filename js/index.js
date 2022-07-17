const num1 = document.querySelector('.calc__num--1');
const num2 = document.querySelector('.calc__num--2');
const button = document.querySelectorAll('.calc__btn');
const err = document.querySelector('.calc__error');

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

	err.textContent = '';

	if (zeroNum === 0) {
		err.textContent = 'На ноль делить нельзя!';
	} else {
		result = firstNum() / secondNum();
	}
});