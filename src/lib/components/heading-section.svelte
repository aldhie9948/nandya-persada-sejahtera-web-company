<script lang="ts">
	import { Heading } from "flowbite-svelte";

	const { children } = $props();
</script>

<Heading tag="h3" class="mb-10 border-l-8 border-blue-500 py-2 ps-2">
	{@render children()}
</Heading>
