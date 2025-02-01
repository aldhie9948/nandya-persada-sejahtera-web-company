<script lang="ts">
	import { base } from "$app/paths";
	import Icon from "@iconify/svelte";
	import { Badge, Button, Heading, ImagePlaceholder, P } from "flowbite-svelte";
	import dayjs from "dayjs";
</script>

<section id="tentang-kami" class="bg-white py-20">
	<div class="container mx-auto px-5 lg:px-10 2xl:px-0">
		<Heading tag="h3" class="mb-10">Tentang PT Nandya Persada Sejahtera</Heading>
		<div class="grid grid-cols-12 gap-x-0 gap-y-10 sm:gap-y-0 lg:gap-x-5 2xl:gap-x-10">
			<div class="col-span-12 h-full w-full lg:col-span-5">
				<img
					src={base.concat("/about-us.webp")}
					alt="Pekerja PT Nandya Persada Sejahtera"
					class="h-96 rounded-md object-cover shadow-md sm:h-full"
				/>
			</div>
			<div class="col-span-12 lg:col-span-7">
				<Badge class="mb-5 px-5 py-2.5 text-xl font-semibold" rounded>About the Company</Badge>
				<div class="space-y-5 ps-0 lg:ps-10">
					<P class="text-lg font-light">
						Sejak didirikan pada tahun 2010 oleh Alm. Bapak Hadi Subroto, <span
							class="font-semibold">PT Nandya Persada Sejahtera</span
						> telah berkembang menjadi salah satu produsen kabel tray terkemuka di Indonesia. Berbasis
						di Cicadas, Gunung Putri, Bogor, kami berkomitmen untuk menghadirkan solusi terbaik dalam
						sistem pendukung kabel untuk berbagai industri, termasuk konstruksi, pertambangan, dan pagar
						keamanan.
					</P>
					<P class="text-lg font-light">
						Seiring dengan perkembangan industri yang semakin pesat, pada tahun 2012 kami melakukan
						ekspansi dengan mengambil alih operasi secara penuh guna meningkatkan skala produksi dan
						efisiensi kerja. Hingga saat ini, <span class="font-semibold"
							>PT Nandya Persada Sejahtera</span
						>
						terus berkembang dengan mengandalkan sumber daya manusia yang profesional, teknologi manufaktur
						modern, dan standar kualitas tinggi yang telah diakui melalui sertifikasi
						<span class="font-semibold">ISO 9001:2015</span>.
					</P>
					<Button color="primary" class="space-x-2" href={base.concat("/tentang-kami")}>
						<span>Baca Selengkapnya</span>
						<Icon icon="lucide:arrow-right" />
					</Button>
					<div class="grid grid-cols-2 gap-10 text-center lg:grid-cols-4 lg:gap-0 lg:text-left">
						<div class="flex flex-col">
							<span class="text-4xl font-bold">2010</span>
							<span>Didirikan</span>
						</div>
						<div class="flex flex-col">
							<span class="text-4xl font-bold">10+</span>
							<span>Pelanggan Setia</span>
						</div>
						<div class="flex flex-col">
							<span class="text-4xl font-bold">100+</span>
							<span>Proyek Selesai</span>
						</div>
						<div class="flex flex-col">
							<span class="text-4xl font-bold"> 50+ </span>
							<span>Tenaga Profesional</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
