<script setup lang="ts">
import { ref } from 'vue'
import Menubar from 'primevue/menubar'

const items = ref([
  {
    label: 'Nosotros',
    icon: '',
    route: '#about'
  },
  {
    label: 'Galería',
    icon: '',
    route: '#gallery'
  },
  {
    label: 'Menú',
    icon: '',
    route: '#menu'
  },
  {
    label: 'Reseñas',
    icon: '',
    route: '#reviews'
  },
  {
    label: 'Reservas',
    icon: '',
    route: '#reservations'
  },
  {
    label: 'Contacto',
    icon: '',
    route: '#contact'
  },
  {
    label: 'Ubicación',
    icon: '',
    route: '#Location'
  }
])
</script>
<template>
  <nav class="mt-4">
    <Menubar :model="items"></Menubar>
  </nav>
</template>
<style lang="scss" scoped></style>
