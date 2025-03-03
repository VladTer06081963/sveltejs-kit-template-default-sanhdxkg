<script>
  import { fade } from 'svelte/transition';
  import { posts } from '../../stores.js';
</script>

<h1>Blog Posts</h1>

<ul>
  {#each $posts as post}
    <li in:fade>
      <a href="/posts/{post.id}">{post.title}</a>
    </li>
  {/each}
</ul>

<style>
  h1 {
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 1rem 0;
  }

  a {
    color: #0077cc;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>