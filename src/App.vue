<template>
    <div class="container">
      <app-header :app-title="title"></app-header>
      <div class="row">
        <div class="col-xs-12">
          <router-view></router-view>
        </div>
      </div>

    </div>
</template>

<script>

    import Header from './components/Header.vue';

    export default {
      created(){
        this.$store.dispatch('initStocks');
      },
      data(){
        return {
          title : 'Stock Trader'
        }
      },
      components: {
        'app-header': Header
      }
    }
</script>

<style>
  body{
    padding: 30px;
  }
</style>
