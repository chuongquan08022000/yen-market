<script setup lang="ts">
import Footer from '~/components/footer/Footer.vue'
import Header from '~/components/header/Header.vue'
import NavigationBar from '~/components/header/NavigationBar.vue'
</script>

<template>
  <main>
    <Header />
    <NavigationBar />
    <slot />
    <Footer />
  </main>
</template>
