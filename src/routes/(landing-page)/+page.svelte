<script lang="ts">
	import Icon from "@iconify/svelte";
	import AboutSection from "./about-section.svelte";
	import ContactSection from "./contact-section.svelte";
	import Footer from "./footer.svelte";
	import HeroSection from "./hero-section.svelte";
	import ProductsSection from "./products-section.svelte";
	import WhyUsSection from "./why-us-section.svelte";

	const { data } = $props();
</script>

<HeroSection />
<AboutSection />
<ProductsSection bind:products={data.products} />
<WhyUsSection />
<ContactSection />
<Footer bind:nav={data.navItems} />

<a
	href="https://wa.me/?phone=6282114821226"
	class="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-to-b from-green-500 to-green-600 p-3 font-medium text-white shadow-md transition-all duration-150"
	target="_blank"
>
	<Icon icon="ic:baseline-whatsapp" class="text-4xl text-white" />
</a>
