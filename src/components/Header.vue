<template>
  <div>
    <h1>{{appTitle}}</h1>
    <a href="/">Home</a>
    <a href="/portfolio">Portfolio</a>
    <a href="/stocks">Stocks</a>
  </div>
</template>

<script>
  export default {
    props : {
      appTitle: {
        type: String,
        required: true
      }
    }
  }
</script>
