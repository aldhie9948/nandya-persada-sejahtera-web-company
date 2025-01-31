<script lang="ts">
	import { base } from "$app/paths";
	import Icon from "@iconify/svelte";
	import { Button, Heading, P } from "flowbite-svelte";
</script>

<section id="hero" class="flex h-dvh w-full flex-col justify-start pt-20 lg:justify-center lg:pt-0">
	<div class="container mx-auto grid h-full grid-cols-2 gap-4 px-5 2xl:px-0">
		<div class="col-span-2 flex flex-col justify-center space-y-4 lg:col-span-1">
			<Heading tag="h1" class="text-2xl font-black lg:text-5xl">
				Solusi <span class="text-primary-500">Kabel Tray</span> & Ladder Modern dan
				<span class="text-green-500">Aman</span> untuk Infrastruktur Anda
			</Heading>
			<Heading tag="h3" class="text-base font-semibold lg:text-lg">
				PT Nandya Persada Sejahtera – Menyediakan Kabel Tray & Ladder Berkualitas Tinggi untuk
				Proyek Komersial dan Industri.
			</Heading>
			<P class="!mb-5 hidden text-slate-600 lg:block">
				Perusahaan terpercaya di bidang manufaktur kabel tray dan ladder yang didesain untuk
				memenuhi kebutuhan infrastruktur listrik modern. Dengan komitmen terhadap kualitas,
				keamanan, dan inovasi, kami menyediakan produk yang tahan lama, mudah dipasang, dan sesuai
				dengan standar industri.
			</P>
			<Button color="primary" class="w-fit space-x-2" href={base.concat("/kontak-kami")}>
				<span>Minta Penawaran</span>
				<Icon icon="lucide:arrow-right" class="text-lg" />
			</Button>
		</div>
		<div class="col-span-2 w-full overflow-hidden pt-0 lg:col-span-1 lg:pt-16">
			<img
				src={base.concat("/hero.webp")}
				class="object-cover drop-shadow-md"
				alt="Production Line Illustration"
			/>
		</div>
	</div>
</section>
