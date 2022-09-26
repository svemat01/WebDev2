<script lang="ts">
	import { valueStore } from '$lib/stores/calc';
</script>

<input type="text" id="lcd" disabled bind:value={$valueStore} />

<style lang="scss">
	input {
		width: 100%;

		margin-bottom: 10px;
		padding: 10px 4px 10px 4px;

		background-color: black;
		color: green;

		font-size: 3rem;
		text-align: right;
		font-family: lcd;

		border: 1px solid yellow;
		border-radius: 4px;

		overflow-x: scroll;
	}
</style>
