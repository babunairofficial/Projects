<template>
    <div class="Information">
      <h1>Fashion Store: The One-stop Fashion Destination</h1>
      <br>
      <p>{{ description }}</p>
      <br><br>
      <h2>Festival Sales</h2>
      <br>
      <p>{{ festivalSalesInfo }}</p>
      <br>
      <p>Some of our favorite sales are listed below:</p>
      <ul>
        <li v-for="sale in favoriteSales" :key="sale">{{ sale }}</li>
      </ul>
      <br><br>
      <h2>Payment Options</h2>
      <br>
      <p>{{ paymentOptions }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StoreInfo',
    data() {
      return {
        description: "Stepping out and finding a perfect fashion choice is difficult? Why worry when you have your own Fashion Store at home where you can browse through thousands of choices and you can order clothes according to your liking. Don't worry if you don't like the item after you receive it, you can always consider the option for exchanging your item or even you can return your item and you will get the full amount back. Isn't that amazing? Start searching for your desired clothes and see it yourself. Once you are done with your first shopping, we are very sure that you will continue that in future as well and we will try our best to give you more and more choices so that you can have a variety of clothes to choose from and so you can find one which suits you the best.",
        festivalSalesInfo: "We keep coming with different sales on our Indian Festivals where we offer huge discounts on your favorite clothes. If you want to get the notifications of all our future sales then you can subscribe to us and we will make sure that you will not miss any offer in future so that you can get your favorite cloth at the best possible price.",
        favoriteSales: ['Independence Day Sale', 'Diwali Sale', 'Christmas Sale', 'New Year Sale'],
        paymentOptions: "We support a large variety of payment options so that you won't miss a cloth due to unavailability of any payment option. You can use a debit card or your credit card to make the payment. Also, you can directly use your UPI ID to make the payment. We also provide EMI options if you think you can not afford a complete amount at once. Other than that, you can directly make your payment through your bank details and even if you are not sure or you are in doubt then you can choose the Cash option where you can pay the amount in cash to our partner who will be delivering your cloth at your doorstep."
      }
    }
  }
  </script>