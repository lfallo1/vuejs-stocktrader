<template>
    <div class="container">
      <app-header :app-title="title"></app-header>
      <router-view></router-view>
    </div>
</template>

<script>

    import Header from './components/Header.vue';

    export default {
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

</style>
