<template>
  <div id="app">
    <Header />

    <main>
      <ItemsGrid />
    </main>
    
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ItemsGrid from './components/ItemsGrid.vue'



export default {
  name: 'App',
  components: {
    Header,
    ItemsGrid, 
    Footer
    
  }
}
</script>