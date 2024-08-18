<template>
    <div class="Items">
      <table id="item-table">
        <tbody>
          <tr>
            <td v-for="item in items" :key="item.name">
              <img :src="item.image" :alt="item.name" class="Item-img">
            </td>
          </tr>
          <tr>
            <td v-for="item in items" :key="item.name">
              <a href="" class="Item-tag">{{ item.name }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ItemsGrid',
    data() {
      return {
        items: [
          { name: 'T-Shirts', image: 'https://via.placeholder.com/150?text=T-Shirts' },
          { name: 'Sun Glasses', image: 'https://via.placeholder.com/150?text=Sun+Glasses' },
          { name: 'Shirts', image: 'https://via.placeholder.com/150?text=Shirts' },
          { name: 'Shoes', image: 'https://via.placeholder.com/150?text=Shoes' },
          { name: 'Pants', image: 'https://via.placeholder.com/150?text=Pants' },
          { name: 'Perfumes', image: 'https://via.placeholder.com/150?text=Perfumes' }
        ]
      }
    }
  }
  </script>