<script lang="ts">
	import { operatorStore, valueStore } from '$lib/stores/calc';
	import { calculate, clearLCD, memClear, setOperator } from '$lib/util/calculator';
	import Button from './Button.svelte';

</script>

<section>

    <Button onClick={() => $valueStore += '7'}>7</Button>
    <Button onClick={() => $valueStore += '8'}>8</Button>
    <Button onClick={() => $valueStore += '9'}>9</Button>
    <Button onClick={() => setOperator('+')} style={'color: #5389fd'}>+</Button>

    <Button onClick={() => $valueStore += '4'}>4</Button>
    <Button onClick={() => $valueStore += '5'}>5</Button>
    <Button onClick={() => $valueStore += '6'}>6</Button>
    <Button onClick={() => setOperator('-')} style={'color: #5389fd'}>-</Button>

    <Button onClick={() => $valueStore += '1'}>1</Button>
    <Button onClick={() => $valueStore += '2'}>2</Button>
    <Button onClick={() => $valueStore += '3'}>3</Button>
    <Button onClick={() => setOperator('*')} style={'color: #5389fd'}>x</Button>

    <Button onClick={() => $valueStore += ','} style={'color: #5389fd'}>,</Button>
    <Button onClick={() => $valueStore += '0'}>0</Button>
    <Button onClick={calculate} style={'color: #5389fd'}>=</Button>
    <Button onClick={() => setOperator('/')} style={'color: #5389fd'}>/</Button>

    <Button onClick={() => $valueStore == '' ? memClear() : clearLCD()} style="grid-column: span 4; color: #5389fd">{$valueStore == '' ? 'RESET' : 'CLEAR'}</Button>
</section>

<style lang="scss">
    section {
        display: grid;
        gap: 0.5rem;
    }
</style>
