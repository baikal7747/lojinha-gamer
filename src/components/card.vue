<script lang="ts">

import {useRouter} from 'vue-router';

const router = useRouter
export default {
    props: {
    title: String,
    description: String,
    image: String,
},
};
</script>

<template>
    <div class="product-box " style="width: 18rem;">
  

      <div class= product-image> <slot name="imagens"> </slot>
      <img src="..." class="card-img-top" alt="..."></div>
      <div class="card-body">
        <h1 class="product-title"><slot name="title"> </slot></h1>
        <p class="product-description"> <slot nome="descricao"> </slot></p>

      </div>
      <div>
        <slot name="actions">
        <button @click="router.push('/AppCart')"  class="buy-button">Comprar</button>
        </slot>
        
      </div>
    </div>
  </template>

  <style scoped >


@media (min-width: 576px) {
  .card-deck {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    margin-right: -15px;
    margin-left: -15px;
    width: 100vw;
  }

}

.product-box {
    display: flex;
    align-items: center;
    background-image:url("https://i.pinimg.com/236x/ed/69/6a/ed696ad19bc44aa144ced8618dca843d.jpg") ;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    width: 50vw;
}
.product-image {
    max-width: 100px;
    max-height: 100px;
    margin-right: 10px;
}

.buy-button {
    background-color: rgb(97, 247, 10); /* Botão branco */
    color: rgb(0, 0, 0); /* Texto vermelho */
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
}



.product-title {
    font-size: 20px;
    margin: 0;
    color:aliceblue;
}

.product-description {
    margin: 0;
}




</style>





