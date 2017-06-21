<template>
  <div class="col-md-6 col-sm-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <div class="panel-title">
          {{stock.name}} <small>Price: {{stock.price | currency}}</small>
          <div class="pull-right">Quantity: {{stock.quantity}}</div>
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
              :class="{'btn-success' : validQuantity, 'btn-danger': !validQuantity && quantity != 0}"
              @click="sellStock">{{validQuantity || quantity == 0 ? 'Sell' : 'Invalid Quantity'}}</button>
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
      sellStock(){
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('sellStock', order);
        this.quantity = 0;
      }
    },
    computed: {
      validQuantity() {
        return Number(this.quantity) <= this.stock.quantity && !isNaN(this.quantity) && Number(this.quantity) > 0;
      }
    }
  }
</script>

<style scoped>

</style>
