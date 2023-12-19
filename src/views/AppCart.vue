<script lang="ts" setup>
import CartItem from "../components/CartItem.vue"
import { useRoute } from 'vue-router'
import { ref } from 'vue';
import { useCartStore } from '../store/CartStore.ts'

const store = useCartStore();
const route = useRoute();
const id = route.params.id;

console.log(route.name)
if (route.name === "AddCart"){
  if(store.products[id] === undefined){
    store.products[id] = 1
  }else{
    store.products[id] += 1
  }
}


</script>
<template>

<section class="h-100" style="background-color: #414040;">
  <div class="container h-100 py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10">

        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="fw-normal mb-0 text-black">Carrinho de compras</h3>

        </div>

        <CartItem v-for="(quantity, id) in store.products" :id="id"/>


        <div class="card">
          <div class="card-body">
            <button type="button" class="btn btn-warning btn-block btn-lg">Finalizar compra</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
</template>
