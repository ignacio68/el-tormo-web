<script setup lang="ts"></script>
<template>
  <section class="container">
    <header>header</header>
    <aside>aside</aside>
    <main>main</main>
    <footer>footer</footer>
  </section>
</template>

<style>
body {
  margin: 0;
}
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 35px 1fr 100px;
  height: 100vh;
  grid-template-areas:
    'header header sidebar'
    'content content content'
    'footer footer footer';
}
@media (width > 400px) {
  .container {
    grid-template-areas:
      'header header header'
      'sidebar content content'
      'footer footer footer';
  }
}

.container header {
  background: #09f;
  grid-area: header;
}

.container aside {
  background: yellow;
  grid-area: sidebar;
}

.container main {
  background: red;
  grid-area: content;
}

.container footer {
  background: gray;
  grid-area: footer;
}
</style>
