<script>
	import { fade } from 'svelte/transition';
	let visible = true;
	let isOpen = false;
	let showItems = false;
	let scrollPx = null;
	function openNav() {
		isOpen = true;
		showItems = true;
		document.getElementById('mainNav').style.background = '#fff';
	}
	function closeNav() {
		showItems = false;
		isOpen = false;
		document.getElementById('mainNav').style.background = '';
	}
</script>

<svelte:window bind:scrollY={scrollPx} />

<header class="w-full">
	{#if scrollPx > 150}
		<nav transition:fade
			class="fixed top-0 w-full shadow-lg mb-6 z-10"
			id="mainNav"
			style="transition-duration: 0.5s;z-index:999;"
		>
			<div class="bg-white shadow-md top-0 absolute w-full z-40">
				<div class="flex items-center justify-between h-16 px-4 py-5">
					<div>
						<a href="/" on:click={() => window.scrollTo({ top: document.getElementById("home").offsetTop-100, behavior: 'smooth'})} class="flex flex-row items-center font-semibold tracking-wide uppercase">
							Brand Logo
						</a>
					</div>
					<div class="hidden md:block">
						<div class="flex items-center font-light 2xl:text-2xl 3xl:text-2xl">
							<a href="#/" class="" on:click={() => window.scrollTo({ top: document.getElementById("home").offsetTop-100, behavior: 'smooth'})}
								><p class=" mr-4">Home</p></a
							>
						</div>
					</div>
					<div class="md:hidden">
						<button
							type="button"
							name="nav-button"
							class="block text-gray-500 hover: focus: focus:outline-none"
						>
							{#if !isOpen}
								<svg on:click={openNav} class="h-6 w-6 fill-current" viewBox="0 0 24 24">
									<path
										fill="#1c1d1f"
										fill-rule="evenodd"
										d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
									/>
								</svg>
							{/if}
							{#if isOpen}
								<svg
									on:click={closeNav}
									class="h-6 w-6 fill-current"
									viewBox="0 0 24 24"
									v-if="isOpen"
								>
									<path
										fill="#1c1d1f"
										fill-rule="evenodd"
										d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
									/>
								</svg>
							{/if}
						</button>
					</div>
				</div>
				<div
					class={isOpen == true
						? 'block flex justify-center h-screen'
						: 'hidden flex justify-center h-screen'}
				>
					<transition name="fade">
						<div class="flex flex-col justify-center" v-show="showItems" on:click={closeNav}>
							<a
								href="#/"
								on:click={() => window.scrollTo({ top: document.getElementById("home").offsetTop-100, behavior: 'smooth'})}
								v-scroll-to="'#home'"
								class="px-2 py-1 text-darkPrimary font-semibold text-center  rounded navItem"
								>Home</a
							>
						</div>
					</transition>
				</div>
			</div>
		</nav>
	{/if}
</header>
