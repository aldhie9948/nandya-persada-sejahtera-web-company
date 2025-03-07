<script lang="ts">
	import { base } from "$app/paths";
	import Icon from "@iconify/svelte";
	import { Button } from "flowbite-svelte";
</script>

<div class="flex h-dvh w-dvw flex-col items-center justify-center px-5 text-center lg:px-0">
	<Icon icon="cuida:warning-outline" class="text-7xl text-yellow-500" />
	<h1 class="mb-5 text-lg font-bold sm:text-2xl">Oops! Page Not Found</h1>
	<p>
		Sorry, the page you're looking for seems to have vanished into the digital void. Don't worry,
		we'll guide you back to safety.
	</p>
	<Button color="primary" class="mt-10 space-x-2" href={base.concat("/")}>
		<Icon icon="lucide:arrow-left" />
		<span>GO BACK HOME</span>
	</Button>
</div>
