<script setup lang="ts">
import Header from '~/components/header/Header.vue'
import NavigationBar from '~/components/header/NavigationBar.vue'
</script>

<template>
  <div>
    <Header />
    <NavigationBar />
    <slot />
  </div>
</template>
