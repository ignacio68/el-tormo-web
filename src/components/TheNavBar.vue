<template>
  <n-page-header>
    <template #title>
      <h3>El Tormo</h3>
    </template>
    <template #subtitle>
      <h5>El restaurante de comida manchega en Madrid</h5>
    </template>
    <template #header>
      <n-menu mode="horizontal" :options="menuOptions" />
    </template>
  </n-page-header>
</template>
<script setup lang="ts">
import { NPageHeader, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'

const menuOptions: MenuOption[] = [
  {
    label: 'Nosotros'
  },
  {
    label: 'Galería'
  },
  {
    label: 'Cartas'
  },
  {
    label: 'Reservas'
  },
  {
    label: 'Ubicación'
  }
]
</script>
<style lang="scss" scoped></style>
