<script setup lang="ts">
import {useRouter} from 'vue-router';
import {useLoginStore} from '../store/login';

const store = useLoginStore()
const router = useRouter()


function logout(){

store.email = ""
store.id = ""
store.token = ""

}

</script>

<template>
      <div class="container text-bg-dark ">
      <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <router-link  class="nav-link " aria-current="page" to="/#">
            <div>
              <img src="../assets/menu.gif" height="45" alt="MDB Logo"
          loading="lazy" class="h-10" />
            </div>
            Home
          </router-link >
          <router-link  class="nav-link active" to="/about">
            <div>
              <span class="badge rounded-pill badge-notification bg-danger"><i class="bi bi-file-earmark-person-fill"></i></span>
            </div>
            Sobre
          </router-link >
        
        
        <router-link  class="nav-link active" to="/Cart">
            <div>
              <span class="badge rounded-pill badge-notification bg-info"><i class="bi bi-cart4"></i></span>
            </div>
            Carinho
        </router-link >
        <router-link  class="nav-link active" to="/top3">
            <div>
              <span class="badge rounded-pill badge-notification bg-danger"><i class="bi bi-file-earmark-person-fill"></i></span>
            </div>
            Novo
          </router-link >
      </ul>    

        

      <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
      </form>
      <div v-if="store.email === ''" class="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
        <button type="button" class="btn btn-outline-light me-2" @click="router.push('/login')">Entre</button>
        <button type="button" class="btn btn-warning" @click="router.push('/cadastro')">Cadastro</button>
      </div>
      <div v-else class="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
        <p style="color: rgb(21, 235, 50);">{{store.email}}</p>
        <button type="button" class="btn btn-warning" @click="logout()">Sair</button>
      </div>
   
    </div>

</template>

<style scoped>

.btn {
  padding: .55rem 1.5rem .45rem;
}

</style>