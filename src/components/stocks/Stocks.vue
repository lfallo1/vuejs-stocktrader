<template>
  <div class="container">
    <app-stock :stock="stock" v-for="stock in stocks"></app-stock>
  </div>
</template>

<script>

  import Stock from './Stock.vue'

  export default {
    computed: {
      stocks(){
        return this.$store.getters.stocks
      }
    },
    components: {
      appStock : Stock
    }
  }
</script>
