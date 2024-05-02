<script>
	import { slide } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	export let entry;
	const { title, index, color } = entry;
	let isOpen = false;
</script>

<div
	style="background-color: {color};"
	class="my-4 rounded-xl border-b-4 border-r-4 border-neutral-600 bg-neutral-200 no-underline text-xl text-neutral-900 transition-all duration-200 ease-in-out hover:bg-amber-200 hovertext-white active:translate-y-2"
>
	<button
		class="my-0 w-full flex justify-start items-center p-4 font-contrail uppercase"
		on:click={() => {
			isOpen = !isOpen;
		}}
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
		Unit {index} : {title}
	</button>

	<div class="px-4">
		{#key isOpen}
			<div
				class:hidden={!isOpen}
				transition:slide={{ duration: 300, delay: 50, easing: quintInOut }}
			>
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
