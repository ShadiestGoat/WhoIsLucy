<script lang="ts">
	import Collapsable from "$lib/collapsable.svelte";

    const questions = [
        ["So... you're trans?", "Shocker, right? No one saw that one coming, eh?"],
        ["Pronouns?", "She/They"],
        ["How should I call you in school?", "Tricky subject, not everyone knows etc. Unless in private, you should use Dan"],
    ] as [string, string][]
</script>

<style>
    .container {
        display: grid;
        grid-template-columns: 0.175fr 0.65fr 0.175fr;
        grid-template-rows: 0.1fr repeat(3, 0.25fr) 0.15fr;
        height: 100vh;
        align-items: center;
    }

    .question {
        grid-column: 2;
    }

    h1 {
        grid-column: 2;
        align-self: end;
        font-size: 2.5rem;
    }
</style>

<div class="container">
    <h1>FAQ</h1>
    {#each questions as q, index}
        <div class="question" style="grid-row: {index+2}">
            <Collapsable title={q[0]} content={q[1]} />
        </div>
    {/each}
</div>