<template>
  <div class="col-md-6 col-sm-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <div class="panel-title">
          {{stock.name}} <small>Price: {{stock.price | currency}}</small>
        </div>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            v-model="quantity"
            type="number"
            class="form-control"
            placeholder="Quantify" />
        </div>
        <div class="pull-right">
          <button
            :disabled="!validQuantity"
            class="btn"
            :class="{'btn-success' : validQuantity, 'btn-danger': !validQuantity && quantity > 0}"
            @click="buyStock">{{validQuantity || quantity == 0 ? 'Buy' : 'Invalid Quantity'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        quantity: 0
      }
    },
    props: {
      stock: {type: Object, required: true}
    },
    methods: {
      buyStock(){
        if(!this.validQuantity){
          return;
        }
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    },
    computed: {
      validQuantity() {
        return !isNaN(this.quantity) && this.quantity > 0;
      }
    }
  }
</script>

<style scoped>

</style>
