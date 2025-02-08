<script lang="ts">
	import { base } from "$app/paths";
	import HeadingSection from "$lib/components/heading-section.svelte";
	import Separator from "$lib/components/separator.svelte";
	import type { Product } from "$lib/types";
	import Icon from "@iconify/svelte";
	import { Badge, Button, Card, Heading } from "flowbite-svelte";

	interface Props {
		products: Product[];
	}

	let { products = $bindable([]) }: Props = $props();
</script>

<section id="produk" class="bg-white py-20">
	<div class="container mx-auto space-y-4 px-5 lg:px-10 2xl:px-0">
		<HeadingSection>Produk Berkualitas untuk Kebutuhan Industri Anda</HeadingSection>

		<p class="text-center text-lg font-medium italic">
			Kami memahami bahwa setiap proyek memiliki kebutuhan unik. Jika Anda tidak menemukan produk
			yang sesuai, kami dapat membuat solusi yang disesuaikan untuk Anda!
		</p>
		<div class="!mb-10 text-center">
			<Button class="mx-auto space-x-2 text-center text-lg" href={base.concat("/hubungi-kami")}>
				<Icon icon="lucide:phone" />
				<span>Konsultasikan Sekarang</span>
			</Button>
		</div>
		<div class="grid grid-cols-2 gap-2 sm:grid-cols-5">
			{#each products as product}
				<div
					class="flex w-full flex-col justify-between gap-y-4 rounded border bg-white px-4 pb-5 text-center shadow-lg duration-150 hover:shadow-none"
				>
					<img src={product.image} alt={product.alt} />
					<span class="text-sm font-semibold sm:text-base">{product.name}</span>
					<Button href={base.concat("/produk")}>
						<span>View</span>
						<Icon icon="lucide:arrow-right" />
					</Button>
				</div>
			{/each}
		</div>
	</div>
</section>
