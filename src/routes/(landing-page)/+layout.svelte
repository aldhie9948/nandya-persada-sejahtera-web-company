<script lang="ts">
	import { base } from "$app/paths";
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from "flowbite-svelte";
	import { onMount } from "svelte";
	const { children, data } = $props();

	let activeUrl = $derived(data.pathname);
	let isScrolled = $state(false);
	const scrollHandler = () => {
		isScrolled = window.scrollY > 10;
	};

	onMount(() => {
		document.addEventListener("scroll", scrollHandler);
		return () => {
			document.removeEventListener("scroll", scrollHandler);
		};
	});
</script>

<main>
	<Navbar
		class="fixed top-0 z-50 !bg-transparent bg-gradient-to-b from-white duration-150 {isScrolled
			? 'to-white shadow'
			: 'to-white/10'}"
	>
		<NavBrand class="space-x-2">
			<img
				src={base.concat("/logo.png")}
				alt="Nandya Persada Sejahtera Logo"
				class="w-10 sm:w-12"
			/>
			<div class="leading-tight">
				<span class="block text-sm font-semibold lg:text-lg">Nandya Persada Sejahtera</span>
				<small class="block text-xs lg:text-sm">Solusi Kabel Tray yang Modern dan Aman</small>
			</div>
		</NavBrand>
		<NavHamburger />
		<NavUl {activeUrl}>
			{#each data.navItems as nav, i (i)}
				<NavLi href={nav.href}>{nav.label}</NavLi>
			{/each}
		</NavUl>
	</Navbar>
	<div class="w-full">
		{@render children()}
	</div>
</main>
