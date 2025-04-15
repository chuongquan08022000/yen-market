<template>
  <div class="border rounded-lg p-4 flex flex-col transition-all cursor-pointer gap-4">
    <div class="w-full aspect-square overflow-hidden relative">
      <NuxtImg
        :src="driver.ItemUrlImage"
        class="size-full hover:scale-110 duration-700 object-cover rounded-md"
      />
      <Button size="icon" class="absolute z-20 bottom-0 right-0 rounded-full">
        <ShoppingBasket class="size-6" color="white" />
      </Button>
    </div>

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
import { ShoppingBasket } from 'lucide-vue-next'
import Button from '~/components/ui/button/Button.vue'
import type { ProductObject } from '~/models/product/ProductObject'

defineProps({
  driver: {
    type: Object as () => ProductObject,
    required: true,
  },
})
</script>

<style scoped></style>
