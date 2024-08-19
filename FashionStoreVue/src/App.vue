<template>
  <div id="app">
    <Header />

    <main>
      <ItemsGrid />
      <ShoppingBanner />
    </main>
    
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ItemsGrid from './components/ItemsGrid.vue'
import ShoppingBanner from './components/ShoppingBanner.vue';



export default {
  name: 'App',
  components: {
    Header,
    ItemsGrid,
    ShoppingBanner, 
    Footer
    
  }
}
</script>