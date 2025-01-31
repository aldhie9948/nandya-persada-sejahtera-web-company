<script lang="ts">
	import { Toaster } from 'svelte-sonner';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>
		PT. Nandya Persada Sejahtera - Solusi Kabel Tray yang Modern dan Aman di Bogor dan Bekasi
	</title>
</svelte:head>
<Toaster richColors />

{@render children()}
