<script setup lang="ts">
import { ref, onMounted, onBeforeMount, computed } from 'vue'
import { useCartStore } from '../store/CartStore'

const store = useCartStore()

const produto = ref(null)
const quantity = ref(1)



const props = defineProps({
  id: { type: String, required: true },
  show: { type: Boolean, required: true },
})


onBeforeMount(() => {
  quantity.value = 1

})

onMounted(() => {

if (store.products[props.id] === undefined){
  store.products[props.id] = 1
  quantity.value = 1
}else{
  if(!props.show){
    quantity.value = store.products[props.id] + 1
  }else{
    quantity.value = store.products[props.id] 
  }
}

  fetch("https://pc.4cc.shop/api/computador/" + props.id)
    .then(response => response.json())
    .then(data => produto.value = data.data);
})

function getImgUrl(idImg: string) {
  const urlbase = 'https://storage.googleapis.com/webclass_imgs/leandro/imagens/';
  let urlimg: string;
  urlimg = urlbase + idImg
  return urlimg
}

function increment(){
  quantity.value = quantity.value + 1
  store.products[props.id] = quantity.value
}

function decrement(){
  if(quantity.value > 0){
    quantity.value = quantity.value - 1
    store.products[props.id] = quantity.value
  }
}

function update(){
    store.products[props.id] = quantity.value
}

</script>



<template>       
  <div class="row">
    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
      <!-- Image -->
             <div class= product-image> <slot name="imagens"> </slot>
      <img :src="getImgUrl(produto?.attributes.imagem)" class="card-img-top" alt="..."></div>
      <!-- Image -->
    </div>

    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
      <!-- Data -->
      <p>{{produto?.attributes.modelo}}</p>
      <p>{{produto?.attributes.tipo}}</p>
      <p>{{produto?.attributes.valor}}</p>
      <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" aria-label="Remove item" data-mdb-original-title="Remove item">
        <i class="fas fa-trash"></i>
      </button>
      <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip" aria-label="Move to the wish list" data-mdb-original-title="Move to the wish list">
        <i class="fas fa-heart"></i>
      </button>
      <!-- Data -->
    </div>

    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
      <!-- Quantity -->
      <div class="d-flex mb-4" style="max-width: 300px">
        <button class="btn btn-primary px-3 me-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
          <i class="fas fa-minus"></i>
        </button>

        <div class="form-outline">
          <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control active">
          <label class="form-label" for="form1" style="margin-left: 0px;">Quantidade</label>
        <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 32px;"></div><div class="form-notch-trailing"></div></div></div>

        <button class="btn btn-primary px-3 ms-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <!-- Quantity -->

      <!-- Price -->
      <p class="text-start text-md-center">
        <strong><slot name="valor"> </slot></strong>
      </p>
      <!-- Price -->
    </div>
  </div>

</template>