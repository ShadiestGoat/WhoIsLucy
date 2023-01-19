<script lang="ts">
	import { onMount } from "svelte";
	import type { mapItem, OnSubmitCB, question } from "./store";

    export let data:mapItem
    export let onSubmit:OnSubmitCB

    const trueD = data as question

    let inp = ""

    function onKeyDown(e:KeyboardEvent) {
        if (e.key == "Enter") {
            const r = trueD.cb(inp.trim().toLocaleLowerCase())
            if (r == "0") {
                inp = ""
            }
            onSubmit(r)
        }
    }

    let inpElement:HTMLInputElement

    onMount(() => {
        inpElement.focus()
    })
</script>

<style>
    .container {
        display: grid;
        justify-items: center;
    }
    h2 {
        margin-top: 24vh;
        font-size: 2.4rem;
    }
    input {
        margin-top: 20vh;
        padding: 1vh 1vw;
        border-radius: 16px;
        background-color: var(--bg-3);
        font-size: 1.3rem;
        width: 30vw;
        transition: all 0.75s;
    }
    input:focus {
        width: 34vw;
        padding: 1.5vh 1.5vw;
    }
</style>

<div class="container">
    <h2>{trueD.q}</h2>
    <input bind:this={inpElement} on:keydown={onKeyDown}  placeholder="Answer..." bind:value={inp} />
</div>