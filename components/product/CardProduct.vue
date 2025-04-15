<template>
  <div class="border rounded-lg p-4 flex flex-col transition-all cursor-pointer gap-4">
    <NuxtImg
      :src="driver.ItemUrlImage"
      class="w-full aspect-square hover:scale-110 duration-700 object-cover rounded-md"
    />
    <div class="flex flex-col justify-between min-h-20">
      <p class="text-foreground duration-300 hover:text-primary font-bold text-lg">
        {{ driver.ItemName }}
      </p>
      <p>
        <strong class="text-primary">{{ formatCurrency(driver.ItemPrice) }}</strong>
        {{ `/${driver.UomName}` }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductObject } from '~/models/product/ProductObject'

defineProps({
  driver: {
    type: Object as () => ProductObject,
    required: true,
  },
})
</script>

<style scoped></style>
