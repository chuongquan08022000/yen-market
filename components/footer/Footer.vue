<template>
  <div class="flex justify-center bg-athens-gray mb-20 lg:mb-0">
    <div class="grid grid-cols-4 gap-y-4 mx-4 lg:mx-0 lg:w-2/3 my-4">
      <div class="flex flex-col col-span-4 lg:col-span-2">
        <h4 class="text-3xl mb-2">{{ $t('footer.contact.title') }}</h4>
        <p v-for="item in contact" :key="item.label" class="text-sm">
          <strong>{{ item.label }}:</strong> {{ item.value }}
        </p>
        <p>Mã số doanh nghiệp: 0317179405. Đăng ký lần đầu: 20/09/2008</p>
      </div>
      <div class="flex flex-col gap-2 col-span-4 lg:col-span-1">
        <h4 class="text-3xl">{{ $t('footer.social.title') }}</h4>
        <div class="flex gap-1">
          <a v-for="item in social" :key="item.src" :href="item.link" target="_blank">
            <NuxtImg :src="item.src" class="size-8" alt="Logo" />
          </a>
        </div>
        <a href="http://online.gov.vn/Home/WebDetails/66187" target="_blank">
          <NuxtImg
            src="http://bizweb.dktcdn.net/100/382/166/themes/900578/assets/logo_bct.png?1724210132257"
            class="w-48"
          />
        </a>
      </div>
      <div class="flex col-span-4 lg:col-span-1 py-4">
        <a href="#" target="_blank">
          <NuxtImg
            src="https://bizweb.dktcdn.net/100/382/166/themes/900578/assets/mew_store.png?1724210132257"
            class="w-64"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const contact = computed(() => [
  {
    label: t('footer.contact.address'),
    value: '92 Nguyễn Trọng Tuyển, Phường 15, Phú Nhuận',
  },
  {
    label: t('footer.contact.email'),
    value: 'yenmarket@mylifecompany.com.vn',
  },
  {
    label: t('footer.contact.phone'),
    value: '1900 066 890',
  },
])
const social = computed(() => [
  {
    src: 'https://bizweb.dktcdn.net/100/382/166/themes/900578/assets/facebook.png?1724210132257',
    link: 'https://www.facebook.com/YenMarketVN/',
  },
  {
    src: 'https://bizweb.dktcdn.net/100/382/166/themes/900578/assets/instagram.png?1724210132257',
    link: '#',
  },
  {
    src: 'https://bizweb.dktcdn.net/100/382/166/themes/900578/assets/youtube.png?1724210132257',
    link: 'https://www.youtube.com/@yenmarket1761',
  },
])
</script>

<style scoped></style>
