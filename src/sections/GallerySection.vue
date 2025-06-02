<script setup lang="ts">
import SectionTitle from './components/SectionTitle.vue'
</script>
<template>
  <section id="gallery" class="mt-10">
    <SectionTitle title="Galería de Imágenes" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <!-- Imágenes de los platos (ajusta las rutas de las imágenes) -->
      <!-- <img
            src="ruta-a-imagen1.jpg"
            alt="Plato 1"
            class="object-cover w-full h-64 rounded-md"
          />
          <img
            src="ruta-a-imagen2.jpg"
            alt="Plato 2"
            class="object-cover w-full h-64 rounded-md"
          />
          <img
            src="ruta-a-imagen3.jpg"
            alt="Plato 3"
            class="object-cover w-full h-64 rounded-md"
          /> -->
      <!-- Añade más imágenes según sea necesario -->
    </div>
  </section>
</template>
