<template>
  <div class="home">
    
    <information
    :product="product"
    :active="active.details"
    v-on:close-detail="close()"/>

    <div class="product-cards-container">
      <summarycard 
      v-for="product in items" 
      :key="product.id" 
      :product="product"
      v-on:view="view($event)" />

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import items from '../data/items.js'
import summarycard from'../components/products/summary.vue'
import information from '../components/products/detailsInfo.vue'

export default {
  name: 'Home',
  components: {
    summarycard, information
  },
  data(){
    return{
      items:items,
      product:null,
      active: {
        details: false
      }
    }
  },                                                    
  methods:{
    view(product){
      this.product = product
      this.active.details = true
      console.log(this.product)
    },
    close(){
      this.active.details = false
    }
  }
}
</script>

<style>
  .product-cards-container{
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

  }

</style>
