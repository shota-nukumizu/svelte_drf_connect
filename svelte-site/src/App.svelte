<script>
	export let name;

	const pageName = 'Svelte app'
	import { onMount } from 'svelte'
	import getMemoList from '../src/memo.js'
	import 'bulma/css/bulma.css'

	let memoList = []

	onMount(async () => {
		const res = await getMemoList()
		memoList = res
	})
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<hr>

	<h1>{pageName}</h1>

	{#each memoList as item}
	<div class="card">
		<div class="card-content">
			<div class="msg-subject">
				<span class="msg-subject"><strong id="fake-subject-1">{item.title}</strong></span>
			</div>
			<div class="msg-snippet">
				<p id="fake-snippet-1">{item.content}</p>
			</div>
		</div>
	</div>
	{/each}

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>