<template>
    <div class="product-box">

        <img :src="image" alt="Product Image" class="product-image">


    <div class="product-info">

        <h1 class="product-title"><slot name="title"> </slot></h1>
 
        <h3 class="product-modelo"><slot nome="modelo"> </slot></h3>

        <p class="product-description"> <slot nome="descricao"> </slot></p>


        <button class="buy-button">Comprar</button>
    </div>
</div>
</template>

<script lang="ts">
    export default {
    props: {
    title: String,
    description: String,
    image: String,
},
};
</script>

<style scoped>
.product-box {
    display: flex;
    align-items: center;
    background-color: rgb(182, 167, 167); /* Fundo vermelho */
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}

.product-image {
    max-width: 100px;
    max-height: 100px;
    margin-right: 10px;
}

.product-info {
    color: white; /* Texto branco */
    flex-grow: 1;
}

.product-title {
    font-size: 20px;
    margin: 0;
}

.product-description {
    margin: 0;
}

.buy-button {
    background-color: rgb(97, 247, 10); /* Botão branco */
    color: rgb(0, 0, 0); /* Texto vermelho */
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
}
</style>