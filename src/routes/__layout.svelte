<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>


<main>
	<slot />
</main>


<style>
	main {
		width: 100%;
		height: 100vh;
		display: grid;
		place-content: center;
		box-sizing: border-box;
	}


</style>
