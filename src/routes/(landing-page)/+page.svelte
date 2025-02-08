<script lang="ts">
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
<Footer />
