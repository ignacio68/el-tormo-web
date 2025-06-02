<script setup lang="ts">
import SectionTitle from './components/SectionTitle.vue'
import Review from './components/Review.vue'
</script>
<template>
  <section id="reviews">
    <SectionTitle title="Opiniones" />
    <div class="mt-10">
      <Review review="La comida es excepcional, un verdadero gusto!" />
      <Review review="Un lugar acogedor con sabores auténticos." />
    </div>
  </section>
</template>
