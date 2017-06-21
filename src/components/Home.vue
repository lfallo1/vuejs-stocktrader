<template>
  <div class="container">
    <h1>Home component</h1>
    <h4>Current funds: {{funds | currency}}</h4>
  </div>
</template>

<script>

  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'funds'
      ])
    }
  }
</script>
