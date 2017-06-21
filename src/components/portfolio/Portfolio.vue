<template>
  <div class="container">
    <div v-if="myFunds" class="alert alert-warning text-center">Funds: {{myFunds | currency}}</div>
    <app-stock :stock="stock" v-for="stock in stocks"></app-stock>
  </div>
</template>

<script>

  import Stock from './Stock.vue'
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio',
        myFunds: 'funds'
      })
    },
    components: {
      appStock : Stock
    }
  }
</script>
