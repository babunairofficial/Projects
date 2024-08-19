<template>
    <div class="Shopping-container">
      <a href="">
        <img :src="shoppingBannerImage" alt="shopping time" id="shopping-time-img">
      </a>
    </div>
  </template>
  
  <script>
  import shoppingBannerImage from '@/assets/shoppingtime.jpg'

  export default {
    name: 'ShoppingBanner',
    data() {
      return {
        shoppingBannerImage
      }
    }
  }
  </script>