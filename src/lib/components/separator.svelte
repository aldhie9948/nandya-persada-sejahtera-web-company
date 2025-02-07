<script lang="ts">
	interface Props {
		className: string;
	}
	const { className = "" }: Partial<Props> = $props();
</script>

<div class="h-px w-full bg-slate-300 dark:bg-slate-100 {className}"></div>
