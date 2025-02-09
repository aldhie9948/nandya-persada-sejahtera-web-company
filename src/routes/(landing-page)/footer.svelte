<script lang="ts">
	import { base } from "$app/paths";
	import Icon from "@iconify/svelte";
	import { Heading } from "flowbite-svelte";
	interface Props {
		nav: { label: string; href: string }[];
	}

	let { nav = $bindable([]) }: Props = $props();
</script>

<footer class="bg-blue-900/80 py-10 text-white">
	<div class="container mx-auto px-5 lg:px-10 2xl:px-0">
		<div class="grid grid-cols-12 gap-2">
			<div class="col-span-4 space-y-2">
				<img
					src={base.concat("/logo.png")}
					alt="logo pt nandya persada sejahtera"
					width={48 * 1.2}
				/>
				<Heading tag="h5" class="text-white">PT. Nandya Persada Sejahtera</Heading>
				<p class="font-light">
					Jl. Pancasila IV, RT02 RW13, Cicadas, Gunung Putri Kecamatan Gunung Putri, Kabupaten Bogor
					Jawa Barat 16964 - Indonesia
				</p>
				<a href="mailto:nandyapersadanps@gmail.com" target="_blank" class="flex items-center gap-2">
					<Icon icon="lucide:mail" />
					<span>nandyapersadanps@gmail.com</span>
				</a>
			</div>
			<div class="col-span-2"></div>
			<div class="col-span-3 space-y-2">
				<Heading tag="h5" class="text-white">Quick Links</Heading>
				{#each nav as item, i (i)}
					<a href={item.href} class="flex items-center gap-2">
						<Icon icon="lucide:external-link" />
						<span>{item.label}</span>
					</a>
				{/each}
			</div>
			<div class="col-span-3 space-y-4">
				<Heading tag="h5" class="text-white">Contact Us</Heading>
				<span class="flex items-center gap-2">
					<Icon icon="lucide:phone-call" />
					<p>(021) 8674344</p>
				</span>
				<span class="flex items-center gap-2">
					<Icon icon="lucide:smartphone" />
					<p>+62 821-1482-1226</p>
				</span>
				<a
					target="_blank"
					color="green"
					href="https://wa.me/?phone={6282114821226}"
					class="flex w-fit items-center space-x-2"
				>
					<Icon icon="ic:baseline-whatsapp" />
					<p>Chat Via Whatsapp</p>
				</a>
			</div>
		</div>
	</div>
</footer>
