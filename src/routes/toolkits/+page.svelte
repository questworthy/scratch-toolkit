<script>
	const intro =
		'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.';

	const toolkits = [
		{
			name: 'Gender',
			desc: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
			path: 'gender-toolkit',
			color: '#7ABA78'
		},
		{
			name: 'Career',
			desc: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
			path: 'career-toolkit',
			color: '#CA8787'
		}
	];
</script>

<svelte:head>
	<title>Toolkits</title>
</svelte:head>

<h1 class="font-normal">Toolkits</h1>
<p>{intro}</p>
<main class="grid grid-cols-1">
	{#each toolkits as toolkit, i (i)}
		<div class="my-8">
			<div class="flex justify-center items-center">
				<span class="m-2 p-2 text-4xl font-contrail">{i + 1}</span>
				<div class="h-2 w-full bg-ed-400" style="background-color:{toolkit.color};"></div>
			</div>
			<h2 class="my-0 font-semibold">
				{toolkit.name}
			</h2>
			<p class="text-neutral-400">
				{toolkit.desc}
			</p>
			<a href={toolkit.path} class="my-0 no-underline text-blue-400">View Toolkit</a>
		</div>
	{/each}
</main>
