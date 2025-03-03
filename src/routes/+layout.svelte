
<script>
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
</script>

<div class="page-container">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>
  .page-container {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Занимает всю высоту viewport */
  }

  main {
    flex: 1; /* Занимает всё доступное пространство */
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
  }

</style>