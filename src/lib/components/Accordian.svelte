<script>
	import { slide } from 'svelte/transition';
	export let entry;
	const { title, index } = entry;
	let isOpen = true;
	const toggle = () => (isOpen = !isOpen);
</script>

<div class="my-4 border-2 border-neutral-400 rounded-xl">
	<button
		class="my-0 w-full flex justify-start items-center p-4"
		on:click={toggle}
		aria-expanded={isOpen}
	>
		<svg
			class="mr-1"
			width="20"
			height="20"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			viewBox="0 0 24 24"
			stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
		>
		<p class="text-xl text-left">
			Unit {index} : {title}
		</p>
	</button>

	<div class="px-4">
		{#key isOpen}
			<div class:hidden={!isOpen} transition:slide={{ duration: 300 }}>
				<slot />
			</div>
		{/key}
	</div>
</div>

<style>
	svg {
		flex-shrink: 0;
		transition: transform 0.2s ease-in;
	}

	[aria-expanded='true'] svg {
		transform: rotate(0.25turn);
	}

	p {
		margin: 0;
		margin-left: 1rem;
		color: #777;
	}
	.flex {
		display: flex;
	}
	.mr-1 {
		margin-right: 0.25rem;
	}
	.ml-6 {
		margin-left: 1.5rem;
	}
	.mb-4 {
		margin-bottom: 1rem;
	}
	.hidden {
		display: none;
	}
</style>
