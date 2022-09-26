import { writable } from 'svelte/store';
import type { OperatorType } from '../types/operator';

export const valueStore = writable('');

export const memoryStore = writable(0);

export const operatorStore = writable<OperatorType | null>(null);

