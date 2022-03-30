<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
</script>

<Header />

<main class="w-full">
	<slot />
</main>

<Footer/>
<style>
</style>
