<script lang="ts">
    import animatedDetails from "svelte-animated-details"
    export let content:string
    export let title:string

    let open = false
</script>
<style>    

    details {
        padding: 2.5vh 1.5vw;
        color: var(--ico);
        background: var(--bg-3);
        box-shadow: 0 0 10px 10px var(--bg-1);
        border-radius: 8px;
        cursor: pointer;
        overflow: hidden;
        transition: all 0.75s;
    }

    details:hover {
        background-color: var(--bg-4);
        box-shadow: 0 0 25px 13px var(--bg-1);
    }

    summary {
        text-align: center;
    }

    p {
        margin-top: 3vh;
    }
</style>

<details on:keydown={(e) => {
    if (e.key == "Enter" || e.key == "space") {
        e.preventDefault()
        open = !open
    }
}} on:click={(e) => {
    e.preventDefault()
    open = !open
}} use:animatedDetails bind:open={open}>
    <summary>{title}</summary>
    <p>{content}</p>
</details>
