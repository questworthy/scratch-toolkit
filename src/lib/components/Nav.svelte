<script>
	import logo from '$lib/assets/scratch.svg';

	// get current page url
	import { page } from '$app/stores';
	$: currentURL = $page.url.pathname.split('/').pop() || $page.url.pathname;

	// nav bar
	let links = ['home', 'toolkits', 'about'];

	const style =
		'm-2 p-2 capitalize font-contrail no-underline font-semibold text-dark transition-all duration-100 ease-in';
</script>

<div class="mb-16 flex flex-wrap justify-between items-center">
	<div class="relative">
		<a href="/">
			<img loading="lazy" src={logo} alt="Quest Alliance Logo" class="m-2 h-16" />
		</a>
	</div>
	<nav class="flex justify-center mx-2">
		{#each links as link}
			{#if link === 'home'}
				<a
					class={`${style} ${
						currentURL === '/'
							? 'text-light border-light'
							: 'hover:text-light hover:border-light border-darkest'
					}`}
					href={`/`}
				>
					{link}
				</a>
			{:else if link === currentURL}
				<a
					class={`${style} ${link === currentURL && 'text-light border-light '}`}
					href={link === 'home' ? '/' : `/${link}`}
				>
					{link}
				</a>
			{:else}
				<a
					class={`${style} border-darkest hover:text-light hover:border-light`}
					href={link === 'home' ? '/' : `/${link}`}
				>
					{link}
				</a>
			{/if}
		{/each}
	</nav>
</div>
