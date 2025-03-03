<script>
  import { fade } from 'svelte/transition';
  import { posts } from '../../../stores.js';
  import { page } from '$app/stores';

  let postId = $page.params.id;
  let post = $posts.find(p => p.id === parseInt(postId));
</script>

{#if post}
  <article in:fade>
    <h1>{post.title}</h1>
    <p>{post.content}</p>
  </article>
{:else}
  <p>Post not found</p>
{/if}

<style>
  h1 {
    color: #333;
  }

  p {
    color: #666;
  }
</style>