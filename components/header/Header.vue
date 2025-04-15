<template>
  <div class="flex justify-center items-center h-24 fixed top-0 w-full z-50">
    <div class="custom-container h-full flex items-center justify-between gap-4">
      <NuxtLink to="/" class="min-w-24">
        <NuxtImg src="/logo-brand.png" class="w-40" alt="Logo" />
      </NuxtLink>
      <div class="max-w-xl w-full">
        <Input :suffix-icon="Search" class="w-full" :placeholder="$t('header.search')" />
      </div>
      <NuxtLink to="/" class="gap-2 items-center text-primary lg:flex hidden">
        <PhoneCall class="size-9" color="#ca2628" />
        <span class="flex flex-col">
          <span class="text-xs lg:text-sm font-bold">{{ $t('header.hotline') }}</span>
          <span class="text-xs lg:text-sm font-bold">1900 1234</span>
        </span>
      </NuxtLink>
      <NuxtLink to="/" class="gap-2 items-center text-primary lg:flex hidden">
        <UserRound class="size-9" color="#ca2628" />
        <span class="flex flex-col">
          <span class="text-xs lg:text-sm font-bold">{{ $t('header.hi') }}</span>
          <span class="text-xs lg:text-sm font-bold">{{ $t('header.login') }}</span>
        </span>
      </NuxtLink>
      <div class="flex gap-8 items-center pr-4 lg:px-4 py-2 w-fit">
        <Button variant="outline-primary" class="size-10 p-0 border-2 lg:flex hidden">
          <ShoppingBasket class="size-6" color="#ca2628" />
        </Button>
        <div class="flex items-center gap-3 min-w-24">
          <NuxtImg src="/images/flag-vi.svg" class="h-8 cursor-pointer" alt="Logo" @click="setLocale('vi')" />
          <NuxtImg src="/images/flag-en.svg" class="h-8 cursor-pointer" alt="Logo" @click="setLocale('en')" />
        </div>
      </div>
    </div>
  </div>
  <div class="h-24" />
</template>

<script setup lang="ts">
import { PhoneCall, Search, UserRound, ShoppingBasket } from 'lucide-vue-next'
import { Button } from '~/components/ui/button'
import Input from '~/components/ui/input/Input.vue'

const { setLocale } = useI18n()
</script>

<style scoped></style>
