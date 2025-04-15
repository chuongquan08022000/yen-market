<script setup>
import SectionOne from '~/components/home/SectionOne/SectionOne.vue'
import SectionTwo from '~/components/home/SectionTwo/SectionTwo.vue'
const article = {
  title: 'Yen Market',
  description: 'Siêu thị nhập khẩu Tiêu Chuẩn Nhật Bản',
  image: 'https://mastererp.mylifecompany.com/Resources/Images/banner%201.jpg',
  tags: ['market', 'siêu thị', 'menu', 'món ăn', 'thực đơn, nhà hàng'],
}

useHead({
  title: article.title,
  meta: [
    { name: 'description', content: article.description },
    { name: 'keywords', content: article.tags.join(', ') },
    { property: 'og:title', content: article.title },
    { property: 'og:description', content: article.description },
    { property: 'og:image', content: article.image },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [{ rel: 'canonical', href: `https://yen-market.vercel.app/` }],
})
</script>

<template>
  <div>
    <SectionOne />
    <SectionTwo />
  </div>
</template>
