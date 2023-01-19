<script lang="ts">
	import type { mapItem, OnSubmitCB, slide } from "./store";

    export let data:mapItem
    export let onSubmit:OnSubmitCB

    const trueD = data as slide
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;

    }
    h1 {
        font-family: sans-serif;
        margin-top: 20vh;
        font-size: 3.85rem;
    }
    h2 {
        font-size: 2.1rem;
        margin-top: 4vh;
    }
    h3 {
        font-size: 1.5rem;
    }
    .btn, a {
        margin-top: 14vh;
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>

<div class="container">
    <h1>{trueD.mainTitle}</h1>
    <h2>{trueD.title}</h2>
    <div class="row">
        {#if trueD.btn}
            <a class="btn" href={trueD.btn[1]}><h3>{trueD.btn[0]}</h3></a>
        {:else}
            <button on:click={() => {
                onSubmit("1")
            }} class="btn">
                <h3>Next</h3>
            </button>
        {/if}
    </div>
</div>
