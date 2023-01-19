<script lang="ts">
	import Question from "$lib/question.svelte";
	import Slide from "$lib/slide.svelte";
	import { sitemap, type qResp } from "$lib/store";

	let section = 0
	let q = 0
	
	let glowClass = ""

	function onSubmit(inp:qResp) {
		const isSlideAtm = sitemap[section][q].t == "slide"
		
		console.log(inp)

		switch (inp) {
			case "0":
				if (!isSlideAtm && !glowClass) {
					glowClass = "wrong"
					setTimeout(() => {
						glowClass = ""
					}, 1000)
				}
				break
			case "1":
				if (!isSlideAtm) {
					glowClass = "right"
					setTimeout(() => {
						glowClass = ""
					}, 1000)
				}

				console.log("l", sitemap[section].length, q)

				if (sitemap[section].length <= (q + 1)) {
					section += 1
					q = 0
				} else {
					q += 1
				}

				break
			default:
				const [rawSection, rawQuestion] = inp.split("-")
				section = parseInt(rawSection)
				q = parseInt(rawQuestion)
				break
		}

		d = sitemap[section][q]
		console.log(d)
	}

	let d = sitemap[section][q]
	$: comp = d.t == "slide" ? Slide : Question
</script>

<style>
	.wrong {
		--color: var(--danger);
	}

	.right {
		--color: var(--success);
	}
	
	.container {
		transition: all 0.4s;
		height: 100vh;
	}
	.wrong, .right {
		box-shadow: inset 0 0 50px 15px var(--color);
	}
</style>

<div class="container {glowClass}">
	{#key d}
		<svelte:component this={comp} data={d} onSubmit={onSubmit} />
	{/key}
</div>