<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Menu } from 'lucide-vue-next'
import type { CategoryObject } from '~/models/category/CategoryObject'

const loadingCategories = ref(false)
const categories = ref<CategoryObject[]>([])
const subCategories = ref<CategoryObject[]>([])

const listCategories = computed(() => {
  if (loadingCategories.value) return []
  if (categories.value.length && subCategories.value.length) {
    return categories.value.map((category) => {
      const subItems = subCategories.value.filter(
        (subCategory) => subCategory.GroupParentID === category.GroupID
      )
      return {
        ...category,
        subItems,
      }
    })
  }
  return []
})
const carousels = ref([
  'https://mastererp.mylifecompany.com/Resources/Images/banner%201.jpg',
  'https://mastererp.mylifecompany.com/Resources/Images/Banner%208.jpg',
])

async function fetchCategories() {
  try {
    loadingCategories.value = true
    const { data } = await useFetch('/api/categories')
    if (data.value) {
      categories.value = data.value
    }
    console.log({ response: data.value })
  } catch (error) {
    console.error(error)
  } finally {
    loadingCategories.value = false
  }
}
async function fetchSubCategories() {
  try {
    loadingCategories.value = true
    const { data } = await useFetch('/api/sub-categories')
    if (data.value) {
      subCategories.value = data.value
    }
    console.log({ response: data.value })
  } catch (error) {
    console.error(error)
  } finally {
    loadingCategories.value = false
  }
}

Promise.all([fetchCategories(), fetchSubCategories()])

console.log({ listCategories: listCategories.value })
</script>

<template>
  <div class="flex items-center justify-center w-full bg-primary">
    <div class="custom-container py-3 flex items-center gap-2">
      <Menu color="white" class="cursor-pointer" />
      <span class="font-bold uppercase text-lg text-white">{{ $t('navbar.title') }}</span>
    </div>
  </div>
  <div class="flex items-center justify-center w-full">
    <div class="custom-container flex">
      <div class="w-80 flex flex-col">
        <Popover v-for="category in listCategories" :key="category.GroupID">
          <PopoverTrigger as-child class="border-b bg-alabasterapprox">
            <Button class="text-lg h-10 rounded-none justify-start" variant="ghost">{{
              category.GroupName
            }}</Button>
          </PopoverTrigger>
          <PopoverContent
            v-if="category.subItems.length"
            class="w-80 p-0 bg-alabasterapprox rounded-none"
            align="start"
            side="left"
          >
            <Button
              v-for="subCategory in category.subItems"
              :key="subCategory.GroupID"
              class="text-lg h-10 rounded-none w-full border-b justify-start"
              variant="ghost"
              >{{ subCategory.GroupName }}</Button
            >
          </PopoverContent>
        </Popover>
      </div>
      <Carousel :opts="{ loop: true }" class="relative w-full aspect-[13/5]">
        <CarouselContent>
          <CarouselItem v-for="(item, index) in carousels" :key="index">
            <NuxtImg :src="item" class="w-full h-full object-cover" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </div>
</template>
