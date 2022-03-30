<script context="module">
	export const prerender = true;
</script>

<script>
	import Landing from '$lib/WebSections/Landing.svelte';
	import AboutUs from '$lib/WebSections/AboutUs.svelte';
</script>

<svelte:head>
	<title>Sweet Home</title>
</svelte:head>

<section>
	<div id="home">
		<Landing />
	</div>
	<div id="aboutus">
		<AboutUs />
	</div>
</section>

<style>
</style>
