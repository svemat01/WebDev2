<script lang="ts">
	export let onClick: () => void;
	export let style: string = '';
</script>

<button on:click={onClick} style={style ?? ''}>
	<slot />
</button>

<style lang="scss">
	button {
		height: 8rem;

		border-radius: 0.75rem;

		font-size: 4rem;

		background-color: lightgray;

		color: black;

		&:active {
                box-shadow: 0 1px gray;
                transform: translateY(1px);
            }
	}
</style>
