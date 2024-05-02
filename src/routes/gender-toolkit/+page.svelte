<script>
	import Accordian from '$lib/components/Accordian.svelte';

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
			<Accordian entry={{ title: section, index: i + 1 }}>
				{#each filteredPosts as post}
					<div class="my-2 px-2 py-4 border-t-2 border-dashed border-neutral-400">
						<dt>
							<a
								href={post.path}
								class="text-xl underline hover:no-underline decoration-2 underline-offset-8"
							>
								{post.meta.title}
							</a>
						</dt>
						<dd class="">{post.meta.desc}</dd>
					</div>
				{/each}
			</Accordian>
		{/each}
	</section>
</div>
