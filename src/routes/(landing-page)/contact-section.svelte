<script lang="ts">
	import HeadingSection from "$lib/components/heading-section.svelte";
	import Separator from "$lib/components/separator.svelte";
	import Icon from "@iconify/svelte";
	import { Button, Heading } from "flowbite-svelte";
</script>

<section id="hubungi-kami" class="py-10">
	<div class="container mx-auto px-5 lg:px-10 2xl:px-0">
		<HeadingSection>Mari Bekerja Sama</HeadingSection>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="flex flex-col gap-4">
				<p class="italic">
					Kami siap membantu Anda dalam memilih produk kabel tray terbaik sesuai kebutuhan proyek
					Anda. Hubungi kami untuk konsultasi, penawaran harga, atau informasi lebih lanjut.
				</p>
				<Separator />
				<Heading tag="h5">Alamat Kantor & Workshop</Heading>
				<span class="flex gap-2">
					<Icon icon="lucide:map-pin" class="text-xl text-blue-500" />
					<div class="-mt-1">
						<p>Jl. Pancasila IV, RT02 RW13, Cicadas, Gunung Putri</p>
						<p>Kecamatan Gunung Putri, Kabupaten Bogor</p>
						<p>Jawa Barat 16964 - Indonesia</p>
					</div>
				</span>
				<Heading tag="h5">Email Resmi</Heading>
				<span class="flex items-center gap-2">
					<Icon icon="material-symbols:mail-outline" class="text-blue-500" />
					<a href="mailto:nandyapersadanps@gmail.com"> nandyapersadanps@gmail.com </a>
				</span>
				<Heading tag="h5">Jam Operasional</Heading>
				<span class="flex items-center gap-2">
					<Icon icon="lucide:phone-call" class="text-blue-500" />
					<p>Senin - Jum'at: 07:00 s/d 16:00 WIB</p>
				</span>
				<Heading tag="h5">Nomor Telpon & Whatsapp</Heading>
				<span class="flex items-center gap-2">
					<Icon icon="lucide:phone-call" class="text-blue-500" />
					<p>(021) 8674344</p>
				</span>
				<span class="flex items-center gap-2">
					<Icon icon="lucide:smartphone" class="text-blue-500" />
					<p>+62 821-1482-1226</p>
				</span>
				<Button
					target="_blank"
					color="green"
					href="https://wa.me/?phone={6282114821226}"
					class="w-fit space-x-2"
				>
					<Icon icon="ic:baseline-whatsapp" />
					<p>Chat Via Whatsapp</p>
				</Button>
			</div>
			<div class="overflow-hidden rounded-md border border-blue-500 shadow-lg shadow-blue-200">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6288807010133!2d106.93274491144594!3d-6.44167899352269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6995157667c1fd%3A0xd9f9027c40d52d81!2sPT.%20Nandya%20Persada%20Sejahtera!5e0!3m2!1sen!2sid!4v1739024547068!5m2!1sen!2sid"
					style="border:0;"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Peta Lokasi PT Nandya Persada Sejahtera"
					class="h-60 w-full sm:h-full"
				></iframe>
			</div>
		</div>
	</div>
</section>
