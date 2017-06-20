<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">Stock Trader</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
          <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">End Day</a></li>
          <li>
            <a href="" @click.prevent="showDropdown = !showDropdown"
                class="dropdown-toggle">Dropdown <span class="caret"></span></a>
            <ul v-if="showDropdown">
              <li><a href="#">Save Data</a></li>
              <li><a href="#">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  export default {
    data(){
      return{
        showDropdown: false
      }
    },
    props : {
      appTitle: {
        type: String,
        required: true
      }
    }
  }
</script>
