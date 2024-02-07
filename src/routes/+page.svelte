<!-- landing page with title, past projects and a action button which direct to whatsapp, using tailwind as styling -->
<script>
	import '../tailwind.css';

	let projects = [
		{
			name: '享受音樂，讓孩子快樂學習 -- 譚校長',
			youtube: 'https://www.youtube.com/embed/bmrjKcJBx3Y?si=lX5EaHlmBAzFvtnc'
		},
		{
			name: '血管暢通百病除 健康精彩到百歲 BEMER 德國理療品牌',
			youtube: 'https://www.youtube.com/embed/i16IcqqQkEg?si=_EobrPYGGvJ3n1al'
		},
		{
			name: '早期糖尿非絕路，苦瓜控糖效果好 -- 艾多美苦瓜萃取複方膠囊',
			youtube: 'https://www.youtube.com/embed/npGHg7iDHyI?si=Zrcdy60iNViiaRCv'
		}
	];

	let enagementMessage = '你好，我想了解更多關於客似雲來 2.0 影片製作計劃。';
</script>

<svelte:head>
	<title>客似雲來 2.0 影片製作計劃</title>
	<meta name="description" content="發掘你的幸福故事" />
	<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<main class="flex flex-col items-center justify-center">
	<h1 class="text-3xl font-bold">客似雲來 2.0 影片製作計劃</h1>
	<p class="text-2xl mt-5">發掘你的幸福故事</p>

	<h2 class="text-2xl font-bold mt-4">過往的作品</h2>

	<div class="flex flex-col gap-3 mt-1">
		{#each projects as project}
			<div class="border-2 border-amber-950 rounded-md p-3 flex flex-col items-center">
				<p class="text-md">{project.name}</p>
				<!-- embeded Youtube -->
				<!-- svelte-ignore a11y-missing-attribute -->
				<iframe
					class="max-w-full min-w-60 h-auto mt-3"
					src={project.youtube}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			</div>
		{/each}
	</div>
	<!-- A material action button direct to whatsapp number :+852 46277171-->

	<a
		href="https://api.whatsapp.com/send/?phone=85246277171&text={enagementMessage}&app_absent=0"
		class="my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full flex gap-3 align-middle items-center text-xl"
	>
		<!-- Phone Icon -->
		<!-- svelte-ignore invalid-html-attribute -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			class="h-4 w-4"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
			/>
		</svg>
		<span> 立即查詢 </span>
	</a>
</main>