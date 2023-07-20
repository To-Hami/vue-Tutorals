<template>
  <h3> Countprice  Componant  </h3>
  <div> 
    <p class="Price"> Price : {{Price}} </p>
    <p class="amount"> Amount : {{Amount}}  </p>
    <input type="range" class="range" min="1" max="20" v-model="Amount">
    <p class="totalamount">Total Amount : {{Amount}}  </p>
    <p class="totalprice"> Total Price : {{calculate}} </p>
  </div>
</template>

<script>
export default {
       data(){
            return{
                Price:"20",
                Amount:"1",
            }
       },
       
        computed: {
          calculate() {
            return this.Amount * this.Price
          }
        } 
}
</script>

<style>

</style>