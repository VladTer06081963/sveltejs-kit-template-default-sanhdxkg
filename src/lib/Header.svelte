<template lang="pug">
  header
    nav
      a(href="/") Home
      a(href="/about") About
      a(href="/posts") Posts
      a(href="/api/render-pug") Pug
</template>

<style>
  header {
    background: #333;
    color: red;
    padding: 1rem;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
