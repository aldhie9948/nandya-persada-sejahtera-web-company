<script lang="ts">
	import HeadingSection from "$lib/components/heading-section.svelte";
	import Separator from "$lib/components/separator.svelte";
	import Icon from "@iconify/svelte";
	import { Blockquote, Heading, P } from "flowbite-svelte";

	const items = [
		{
			title: "Produsen Berpengalaman & Terpercaya",
			subtitle:
				"Didirikan sejak 2010, kami telah melayani berbagai sektor industri dengan produk yang kokoh, tahan lama, dan sesuai standar internasional.",
			icon: "gravity-ui:seal-check",
			iconClassname: "text-green-500",
		},
		{
			title: "Standar Kualitas Tinggi (ISO 9001:2015)",
			subtitle:
				"Kami menerapkan sistem manajemen mutu ISO 9001:2015, memastikan bahwa setiap produk kami memenuhi standar keamanan dan kualitas tertinggi.",
			icon: "material-symbols:trophy-outline",
			iconClassname: "text-yellow-500",
		},
		{
			title: "Kapasitas Produksi Fleksibel",
			subtitle:
				"Dengan fasilitas produksi yang modern dan tim profesional, kami dapat menangani pesanan dalam berbagai skala tanpa mengorbankan kualitas dan waktu pengiriman.",
			icon: "icon-park-outline:ad-product",
			iconClassname: "text-yellow-500",
		},
		{
			title: "Produk yang Dapat Disesuaikan",
			subtitle:
				"Kami menawarkan berbagai pilihan kabel tray dan aksesoris, serta layanan custom fabrication sesuai dengan kebutuhan proyek Anda.",
			icon: "uil:cog",
			iconClassname: "text-slate-500",
		},
		{
			title: "Pengiriman Tepat Waktu",
			subtitle:
				"Kami memahami pentingnya ketepatan waktu dalam proyek industri. Oleh karena itu, kami memastikan distribusi dan pengiriman yang efisien ke seluruh Indonesia.",
			icon: "carbon:delivery",
			iconClassname: "text-blue-500",
		},
		{
			title: "Layanan Pelanggan Responsif",
			subtitle:
				"Tim kami siap membantu Anda dalam memilih produk yang tepat dan memberikan solusi terbaik sesuai kebutuhan proyek Anda.",
			icon: "fluent:person-support-16-regular",
			iconClassname: "text-gray-500",
		},
	];
</script>

<section id="keunggulan-kami" class="py-20">
	<div class="container mx-auto space-y-4 px-5 lg:px-10 2xl:px-0">
		<HeadingSection>Mengapa Memilih PT Nandya Persada Sejahtera?</HeadingSection>
		<div class="flex flex-col items-center">
			<Icon icon="flowbite:quote-solid" class="text-center text-7xl" />
			<Blockquote class="text-center text-2xl 2xl:text-4xl"
				>Kualitas, Keamanan, dan Kepercayaan dalam Setiap Produk</Blockquote
			>
		</div>
		<Separator />
		<P class="text-sm sm:text-base">
			Kami berkomitmen untuk menyediakan produk kabel tray berkualitas tinggi dengan standar
			terbaik. Berikut adalah alasan mengapa PT Nandya Persada Sejahtera menjadi pilihan utama bagi
			banyak perusahaan di berbagai industri:
		</P>
		<div class="grid grid-cols-1 gap-5 sm:grid-cols-3">
			{#each items as item}
				<div
					class="flex flex-col gap-2 rounded-md bg-white p-5 text-center shadow-md duration-200 hover:z-10 hover:scale-105 sm:flex-wrap sm:text-left"
				>
					<Icon
						icon={item.icon}
						class="shrink-0 self-center text-4xl sm:text-5xl 2xl:text-7xl {item.iconClassname}"
					/>

					<div class="flex flex-col 2xl:gap-y-2">
						<span class="text-sm font-bold sm:text-lg 2xl:text-xl">{item.title}</span>
						<span class="text-xs text-slate-600 sm:text-sm 2xl:text-base">{item.subtitle}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
