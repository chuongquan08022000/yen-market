<template>
  <GroupProducts title="Cá và hải sản" :items="subProducts" />
</template>

<script setup lang="ts">
import GroupProducts from '~/components/product/GroupProducts.vue'
import type { ProductObject } from '~/models/product/ProductObject'

const loadingProducts = ref(false)
const subProducts = ref<ProductObject[]>([])

async function fetchProducts(id: string) {
  try {
    loadingProducts.value = true
    const { data } = await useFetch(`/api/product/sub-category/${id}`)
    if (data.value) {
      subProducts.value = data.value
    }
  } catch (error) {
    console.error(error)
  } finally {
    loadingProducts.value = false
  }
}

fetchProducts('3397')
</script>

<style scoped></style>
