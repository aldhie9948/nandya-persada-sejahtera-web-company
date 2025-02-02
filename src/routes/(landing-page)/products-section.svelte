<script lang="ts">
	import { base } from "$app/paths";
	import type { Product } from "$lib/types";
	import Icon from "@iconify/svelte";
	import { Badge, Button, Card, Heading } from "flowbite-svelte";

	interface Props {
		products: Product[];
	}

	let { products = $bindable([]) }: Props = $props();
</script>

<section id="produk" class="py-20">
	<div class="container mx-auto px-5 lg:px-10 2xl:px-0">
		<Heading tag="h3" class="mb-10">Produk Berkualitas untuk Kebutuhan Industri Anda</Heading>
		<div
			class="grid grid-cols-1 justify-items-center gap-x-0 gap-y-2 lg:grid-cols-3 lg:gap-x-2 2xl:grid-cols-4"
		>
			{#each products as product, i (i)}
				<Card img={product.image} imgClass="aspect-square object-contain w-[400px]">
					<Heading tag="h5">{product.name}</Heading>
					<p class="mb-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, culpa?
					</p>
					<div class="mb-5 space-y-2">
						<span>Type :</span>
						<div class="flex flex-wrap items-center gap-1">
							{#each product.type as type, ti (ti)}
								<Badge rounded>{type}</Badge>
							{/each}
						</div>
					</div>
					<Button class="w-full space-x-2" href={base.concat("/produk/")}>
						<span>Lihat Produk</span>
						<Icon icon="lucide:arrow-right" />
					</Button>
				</Card>
			{/each}
		</div>
	</div>
</section>
