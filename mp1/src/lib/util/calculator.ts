import { memoryStore, operatorStore, valueStore } from '$lib/stores/calc';
import type { OperatorType } from '$lib/types/operator';
import { get } from 'svelte/store';

export const calculate = () => {
	const operator = get(operatorStore);
	if (!operator) return;

	const value = get(valueStore);
	switch (operator) {
		case '+':
			memoryStore.update((n) => n + Number(value));
			break;

		case '-':
			// memory -= value;
			memoryStore.update((n) => n - Number(value));
			break;

		case '*':
			// memory *= value;
			memoryStore.update((n) => n * Number(value));
			break;

		case '/':
			// memory /= value;
			memoryStore.update((n) => n / Number(value));
			break;

		default:
			break;
	}

	valueStore.set(get(memoryStore).toString());
	operatorStore.set(null);
};

export const setOperator = (newOperator: OperatorType) => {
	// if (arithmetic) {
    //     calculate();
    // } else {
    //     memory = parseFloat(lcd.value);
    // }

    // clearLCD();

    // arithmetic = operator;

	const operator = get(operatorStore);

	if (operator) {
		calculate();
	} else {
		memoryStore.set(Number(get(valueStore)));
	}
	
	clearLCD();

	operatorStore.set(newOperator);
}

export const clearLCD = () => {
    valueStore.set('');
}

export const memClear = () => {
    memoryStore.set(0);
    operatorStore.set(null);
    clearLCD();
}