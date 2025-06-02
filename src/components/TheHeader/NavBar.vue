<script setup lang="ts">
import { ref } from 'vue'
import Menubar from 'primevue/menubar'

const items = ref([
  {
    label: 'Nosotros',
    icon: 'pi pi-home',
    route: '#about'
  },
  {
    label: 'Galería',
    icon: 'pi pi-images',
    route: '#gallery'
  },
  {
    label: 'Menú',
    icon: 'pi pi-list',
    route: '#menu'
  },
  {
    label: 'Reseñas',
    icon: 'pi pi-comments',
    route: '#reviews'
  },
  {
    label: 'Reservas',
    icon: 'pi pi-phone',
    route: '#reservations'
  },
  {
    label: 'Contacto',
    icon: 'pi pi-envelope',
    route: '#contact'
  },
  {
    label: 'Ubicación',
    icon: 'pi pi-map-marker',
    route: '#Location'
  }
])
</script>
<template>
  <nav class="mt-4">
    <Menubar :model="items" class="flex flex-1 justify-evenly items-center">
      <template #item="{ item }">
        <div>
          <a :href="item.route" class="flex flex-1 justify-center items-center">
            <i :class="item.icon" style="color: green" />
            <span class="font-raleway pl-2">{{ item.label }}</span>
          </a>
        </div>
      </template>
    </Menubar>
  </nav>
</template>
<style lang="scss" scoped></style>
