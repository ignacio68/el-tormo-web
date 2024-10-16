<script setup lang="ts">
defineProps<{
  review: string
}>()
</script>
<template>
  <div>
    <blockquote class="border-l-4 border-gray-300 pl-4">
      <p>{{ review }}</p>
    </blockquote>
  </div>
</template>
