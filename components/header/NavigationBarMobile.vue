<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Drawer, DrawerContent } from '@/components/ui/drawer'
import type { CategoryObject } from '~/models/category/CategoryObject'

interface ICategory extends CategoryObject {
  subItems: CategoryObject[]
}

defineProps({
  class: {
    type: String,
    default: '',
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  listCategories: {
    type: Array as () => ICategory[],
    default: () => [],
  },
})
const emits = defineEmits(['update:modelValue'])
const { setLocale } = useI18n()
function handleClick() {
  emits('update:modelValue', false)
}
</script>

<template>
  <Drawer
    class="lg:hidden"
    :open="modelValue"
    direction="left"
    @update:open="$emit('update:modelValue', $event)"
  >
    <DrawerContent class="mt-0 h-full w-2/3 rounded-none rounded-r-lg">
      <div class="mx-auto w-full max-w-sm">
        <h3 class="font-bold uppercase text-xl w-full text-center py-2 bg-alabasterapprox">
          {{ $t('navbar.title') }}
        </h3>
        <Accordion type="single" class="w-full" collapsible>
          <AccordionItem
            v-for="category in listCategories"
            :key="category.GroupID"
            :value="String(category.GroupID)"
            class="px-4"
          >
            <AccordionTrigger class="text-lg">{{ category.GroupName }}</AccordionTrigger>
            <AccordionContent v-if="category.subItems.length" class="flex flex-col gap-1 ml-2">
              <div
                v-for="item in category.subItems"
                :key="item.GroupID"
                @click.prevent="handleClick"
              >
                {{ item.GroupName }}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div class="flex items-center gap-3 w-full justify-center my-6">
          <NuxtImg
            src="/images/flag-vi.svg"
            class="h-8 cursor-pointer"
            alt="Logo"
            @click="
              () => {
                handleClick()
                setLocale('vi')
              }
            "
          />
          <NuxtImg
            src="/images/flag-en.svg"
            class="h-8 cursor-pointer"
            alt="Logo"
            @click="
              () => {
                handleClick()
                setLocale('en')
              }
            "
          />
        </div>
      </div>
    </DrawerContent>
  </Drawer>
</template>
