import Vue from 'vue'

Vue.filter('currency', (data) => '$' + data.toLocaleString());
