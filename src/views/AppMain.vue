<script lang="ts" setup>
import Card from '../components/card.vue';
import inicio from '../components/inicio.vue';
import CartItem from '../components/CartItem.vue';
import { ref } from 'vue';
const produtos = ref(null);



function getImgUrl(idImg: string) {
  const urlbase = 'https://storage.googleapis.com/webclass_imgs/leandro/imagens/';
  let urlimg: string;
  urlimg = urlbase + idImg
  return urlimg
}


fetch("https://pc.4cc.shop/api/computador")
    .then(response => response.json())
    .then(data => produtos.value = data);


</script>

<template>
 <inicio></inicio>

<!-- <i class="bi bi-binoculars"></i> -->

<div class="container text-center">
  <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-md-center">
    <Card v-for="produto in (produtos as any)?.data">

      <template #title>{{(produto as any)?.attributes.marca}}</template>
      <template #description>{{(produto as any)?.attributes.modelo}}</template>
      <template #marca>{{(produto as any)?.attributes.marca}}</template>
      <template #valor>{{(produto as any)?.attributes.valor}}</template>

      <template #imagens>
          <img :src="getImgUrl((produto as any)?.attributes.imagem)"  
              class="card-img-top" 
             :alt="(produto as any)?.attributes.modelo" />
      </template>
      <template #actions>
        <router-link :to="'/cart/' + (produto as any)?.id" class="btn btn-primary">Comprar</router-link>
      </template>



  </Card>
</div>

</div>
</template>

