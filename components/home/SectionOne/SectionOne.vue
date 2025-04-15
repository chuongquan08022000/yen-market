<template>
  <div class="flex justify-center items-center my-6">
    <div class="custom-container flex overflow-x-scroll lg:grid grid-cols-3 gap-4">
      <NuxtImg v-for="(image, idx) in images" :key="idx" :src="image.src" :alt="image.alt" />
    </div>
  </div>
</template>

<script setup lang="ts">
const images = computed(() => [
  {
    src: 'https://bizweb.dktcdn.net/100/382/166/themes/900578/assets/banner3_1.jpg?1724210132257',
    alt: 'Banner 1',
  },
  {
    src: 'https://bizweb.dktcdn.net/100/382/166/themes/900578/assets/banner3_2.jpg?1724210132257',
    alt: 'Banner 2',
  },
  {
    src: 'https://bizweb.dktcdn.net/100/382/166/themes/900578/assets/banner3_3.jpg?1724210132257',
    alt: 'Banner 3',
  },
])
</script>

<style scoped></style>
