<script lang="ts" setup>
import Card from '../components/card.vue';
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
<div class="container">
 <div class="card-group">
    <Card v-for="produto in (produtos as any).data">

      <template #title>{{(produto as any)?.attributes.marca}}</template>
      <template #description>{{(produto as any)?.attributes.modelo}}</template>

      <template #imagens>
          <img :src="getImgUrl((produto as any)?.attributes.imagem)"  
               class="card-img-top" 
               :alt="(produto as any)?.attributes.modelo" />
      </template>
    </Card>
</div>

</div>
</template>

