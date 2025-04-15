<script setup lang="ts">
import type { FunctionalComponent, HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
  placeholder?: string
  prefixIcon?: FunctionalComponent
  suffixIcon?: FunctionalComponent
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <div
    class="flex h-10 items-center rounded-md border border-input bg-white text-sm ring-offset-primary ring-primary/50 focus-within:ring-1 focus-within:ring-offset-0 px-3"
  >
    <component :is="prefixIcon" v-if="prefixIcon" />
    <input
      v-model="modelValue"
      :class="
        cn(
          'w-full rounded-sm p-1 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          props.class
        )
      "
      :placeholder="placeholder"
    >
    <component :is="suffixIcon" v-if="suffixIcon" />
  </div>
</template>
