<!-- landing page with title, past projects and a action button which direct to whatsapp, using tailwind as styling -->
<script>
	//   import { projects } from '../lib/projects.js';
	let projects = [
		{
			name: 'Project 1',
			youtube: 'https://www.youtube.com/watch?v=6J3z3t3b6e4'
		}
	];
</script>

<main class="flex flex-col items-center justify-center h-screen">
	<h1 class="text-6xl font-bold">客似雲來 2.0 影片製作計劃</h1>
	<p class="text-2xl mt-5">發掘你的幸福故事</p>
	<div class="flex flex-col items-center justify-center mt-10">
		<h2 class="text-4xl font-bold">過往的作品</h2>
		<ul class="mt-5">
			{#each projects as project}
				<li class="text-2xl">{project.name}</li>
			{/each}
		</ul>
	</div>
	<!-- A material action button direct to whatsapp number :+852 46277171 -->
	<a
		href="https://wa.me/85246277171"
		class="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
	>
		立即查詢
	</a>
</main>

<style>
	main {
		background-color: #f3f4f6;
	}
</style>
