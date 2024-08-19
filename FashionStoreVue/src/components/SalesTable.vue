<template>
    <div class="Shopping-container">
      <h2>OUR UPCOMING SALES</h2>
      <br>
      <table class="Sales-table">
        <thead class="Sales-table-head">
          <tr>
            <th v-for="header in headers" :key="header" class="Sales-table">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sale in sales" :key="sale.festival">
            <td v-for="(value, key) in sale" :key="key" class="Sales-table">
              <template v-if="key === 'discount'">
                <s>{{ value.original }}</s> {{ value.new }}
              </template>
              <template v-else>
                {{ value }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SalesTable',
    data() {
      return {
        headers: ['Festival', 'Discount', 'Starting Date', 'Ending Date'],
        sales: [
          { festival: 'Independence Day', discount: { original: '30%', new: '40%' }, startDate: '10 August', endDate: '18 August' },
          { festival: 'Diwali', discount: { original: '50%', new: '60%' }, startDate: '10 November', endDate: '21 November' },
          { festival: 'Christmas', discount: { original: '35%', new: '50%' }, startDate: '20 December', endDate: '26 December' },
          { festival: 'New Year', discount: { original: '60%', new: '75%' }, startDate: '30 December', endDate: '6 January' }
        ]
      }
    }
  }
  </script>