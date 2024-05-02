<script>
	import Accordian from '$lib/components/Accordian.svelte';

	const colors = [
		'#FFE0B5',
		'#D9EDBF',
		'#FF00FF',
		'#00FFFF',
		'#FFA500',
		'#800080',
		'#008000',
		'#808000',
		'#008080',
		'#800000',
		'#000080',
		'#808080',
		'#C0C0C0',
		'#FFFFFF',
		'#000000'
	];

	export let data;

	let selectedTags = new Set();
	let filteredPosts = data.posts;

	function updateFilterPosts(tag) {
		if (selectedTags.has(tag)) {
			selectedTags.delete(tag);
		} else {
			selectedTags.add(tag);
		}

		selectedTags = selectedTags; // to trigger svelte's reactivity

		filteredPosts = data.posts.filter((post) => {
			return selectedTags.size === 0 || post.meta.tags.some((t) => selectedTags.has(t));
		});
	}
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="mx-2">
	<section class="my-8">
		{#each [...new Set(data.posts.flatMap((p) => p.meta.tags))] as tag}
			<button
				class="rounded-xl m-2 hover:bg-neutral-900 px-4 py-1 transition-all duration-200 ease-in-out

				{selectedTags.has(tag) ? 'text-light bgneutral-900 ' : ' text-neutral-400 bg-neutral-700 '}"
				on:click={() => updateFilterPosts(tag)}
			>
				{tag}
			</button>
		{/each}
	</section>

	<section class="text-neutral-400">
		{#each [...new Set(data.posts.flatMap((p) => p.meta.section))] as section, i (i)}
			<Accordian entry={{ title: section, index: i + 1, color: colors[i] }}>
				{#each filteredPosts as post}
					{#if post.meta.section == section}
						<div class="my-2 px-2 py-4">
							<a
								href={post.path}
								class="underline hover:no-underline decoration-2 underline-offset-8"
							>
								<dt class="font-semibold font-contrail">
									{post.meta.title}
								</dt>
							</a>
							<dd class="text-neutral-800 font-light">{post.meta.desc}</dd>
						</div>
					{/if}
				{/each}
			</Accordian>
		{/each}
	</section>
</div>
