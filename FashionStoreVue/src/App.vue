<template>
  <div id="app">
    <Header />

    <main>
      <ItemsGrid />
      <ShoppingBanner />
      <SalesTable />
      <StoreInfo />
    </main>
    
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ItemsGrid from './components/ItemsGrid.vue'
import ShoppingBanner from './components/ShoppingBanner.vue';
import SalesTable from './components/SalesTable.vue';
import StoreInfo from './components/StoreInfo.vue';



export default {
  name: 'App',
  components: {
    Header,
    ItemsGrid,
    ShoppingBanner,
    SalesTable,
    StoreInfo, 
    Footer
    
  }
}
</script>