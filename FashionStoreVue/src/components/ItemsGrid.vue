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

  import tshirtImage from '@/assets/tshirt.jpg'
  import sunglassesImage from '@/assets/sunglasses.jpg'
  import shirtsImage from '@/assets/shirts.jpg'
  import shoesImage from '@/assets/shoes.jpg'
  import pantsImage from '@/assets/pants.jpg'
  import perfumeImage from '@/assets/perfume.jpg'

  export default {
    name: 'ItemsGrid',
    data() {
      return {
        items: [
          { name: 'T-Shirts', image: tshirtImage },
          { name: 'Sun Glasses', image: sunglassesImage },
          { name: 'Shirts', image: shirtsImage },
          { name: 'Shoes', image: shoesImage },
          { name: 'Pants', image: pantsImage },
          { name: 'Perfumes', image: perfumeImage }
        ]
      }
    }
  }
  </script>