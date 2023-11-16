<template>
    <div class="product-box " style="width: 18rem;">
  

      <div class= product-image> <slot name="imagens"> </slot>
      <img src="..." class="card-img-top" alt="..."></div>
      <div class="card-body">
        <h1 class="product-title"><slot name="title"> </slot></h1>
        <p class="product-description"> <slot nome="descricao"> </slot></p>

      </div>
      <div>
        <button class="buy-button">Comprar</button>
      </div>
    </div>
  </template>

  <style>

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
    background-color: rgb(196, 196, 196); /* Fundo vermelho */
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
}

.product-description {
    margin: 0;
}




</style>





<script lang="ts">
    export default {
    props: {
    title: String,
    description: String,
    image: String,
},
};
</script>
