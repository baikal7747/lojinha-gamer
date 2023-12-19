
<script setup lang="ts">
import { ref } from 'vue';

const d_Marca = ref();
const d_Modelo = ref();
const d_Tipo = ref();
const d_Processador= ref();
const d_GPU = ref();
const d_RAM = ref();
const d_Armazenamento = ref();
const d_imagens = ref();



async function createcomputador(){

  try {

    let body =  JSON.stringify({
        "data": 
             { 
                "type": "computador",
                "attributes": {
                  "Marca": d_Marca.value,
                  "Modelo": d_Modelo.value,
                  "Tipo": d_Tipo.value,
                  "Processador": d_Processador.value,
                  "GPU": d_GPU.value,
                  "RAM": d_RAM.value,
                  "Armazenamento": d_Armazenamento.value,
                  "imagens": d_imagens.value,
                }
             }
          });

    const response = await fetch("https://jogo.4cc.shop/api/computador", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body
    
    });
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }

}



</script>


<template>

  <section class="vh-100 mt-5">
    <div class="container-fluid h-custom " >
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-8 col-lg-6 col-xl-4">
          <form>
            
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input v-model="d_Marca"  type="email" id="form3Example3" class="form-control form-control-lg"
                placeholder="Entre com um Marca" />
              <label class="form-label" for="form3Example3">Marca</label>
            </div>
  
            <!-- Password input -->
            <div class="form-outline mb-3">
              <input v-model="d_Modelo" type="Modelo" id="form3Example4" class="form-control form-control-lg"
                placeholder="Entre com o Modelo" />
              <label class="form-label" for="form3Example4">Modelo</label>
            </div>

            <div class="form-outline mb-3">
              <input v-model="d_Tipo" type="Tipo" id="form3Example5" class="form-control form-control-lg"
                placeholder="Entre com o Tipo " />
              <label class="form-label" for="form3Example5">Tipo</label>
            </div>
            <div class="form-outline mb-3">
              <input v-model="d_Processador" type="Processador" id="form3Example6" class="form-control form-control-lg"
                placeholder="Entre com o Processador " />
              <label class="form-label" for="form3Example6">Processador</label>
            </div>
            <div class="form-outline mb-3">
              <input v-model="d_GPU" type="GPU" id="form3Example7" class="form-control form-control-lg"
                placeholder="Entre com o GPU " />
              <label class="form-label" for="form3Example7">GPU</label>
            </div>

            <div class="form-outline mb-3">
              <input v-model="d_RAM" type="RAM" id="form3Example8" class="form-control form-control-lg"
                placeholder="Entre com o RAM " />
              <label class="form-label" for="form3Example8">RAM</label>
            </div>
            <div class="form-outline mb-3">
              <input v-model="d_Armazenamento" type="Armazenamento" id="form3Example9" class="form-control form-control-lg"
                placeholder="Entre com o Armazenamento " />
              <label class="form-label" for="form3Example9">Armazenamento</label>
            </div>

            <div class="form-outline mb-3">
              <input v-model="d_imagens" type="imagens" id="form3Example10" class="form-control form-control-lg"
                placeholder="Entre com o imagens " />
              <label class="form-label" for="form3Example10">imagens</label>
            </div>

            

  
            <div class="text-center text-lg-start mt-4 pt-2">
              <button @click="createcomputador()" type="button" class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem;">Finalizar</button>
            </div>
  
          </form>
        </div>
      </div>
    </div>
   </section>
  
  </template>
  



