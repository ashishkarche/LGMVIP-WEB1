let result = document.getElementById('result');

function append(value) {
	result.value += value;
}

function calculate() {
	try {
		result.value = eval(result.value);
	} catch (error) {
		result.value = 'Error';
	}
}

function clearResult() {
	result.value = '';
}

function backspace() {
	result.value = result.value.slice(0, -1);
}
