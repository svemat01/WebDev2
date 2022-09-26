<script lang="ts">
	import Display from '$lib/components/Display.svelte';
	import Keyboard from '$lib/components/Keyboard.svelte';
</script>

<svelte:head>
	<title>Calculator</title>
</svelte:head>

<main>
	<Display />
	<Keyboard />
</main>

<style lang="scss" global>
	:global {
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		html {
			font-size: 62.5%;
		}

		body {
			background-color: #191919;
		}
	}

	main {
		display: flex;
		flex-direction: column;

		width: min(100% - 2rem, 800px);

		margin-inline: auto;
		margin-top: 3rem;
	}
</style>
