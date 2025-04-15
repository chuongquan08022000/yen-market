<template>
  <div class="flex justify-center items-center my-12">
    <div class="flex flex-col custom-container gap-4">
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <div class="grid grid-cols-5 gap-4">
        <CardProduct v-for="item in items" :key="item.ItemId" :driver="item" />
      </div>
      <ClientOnly>
        <div className="flex w-full items-center gap-4 px-6">
          <hr className="h-px w-full max-w-[calc(100%-40px)] flex-1 border" />
          <NuxtLink
            to="/"
            :class="
              cn(
                buttonVariants({ variant: 'default', size: 'lg' }),
                'rounded-full w-40 h-12 text-lg'
              )
            "
          >
            {{ $t('product.seeAll') }}
          </NuxtLink>
          <hr className="h-px w-full max-w-[calc(100%-40px)] flex-1 border" />
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductObject } from '~/models/product/ProductObject'
import CardProduct from '~/components/product/CardProduct.vue'
import { cn } from '~/lib/utils'
import { buttonVariants } from '../ui/button'

defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array as () => ProductObject[],
    required: true,
  },
})
</script>

<style scoped></style>
