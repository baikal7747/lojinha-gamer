<script setup lang="ts">
import {useRouter} from 'vue-router';
import {useLoginStore} from '../store/login';

const store = useLoginStore()
const router = useRouter()


function logout(){

store.email = ""
store.id = ""
stote.token = ""

}

</script>



<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <!-- Container wrapper -->
  <div class="container-fluid">

          <!-- Navbar brand -->
        <a class="navbar-brand mt-2 mt-lg-0" href="/login">
        <img src="../assets/menu.gif" height="45" alt="MDB Logo"
          loading="lazy" class="h-10" />
        </a>

    <!-- Toggle button -->
    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <i class="fas fa-bars text-light"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Left links -->
      <ul class="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
        <li class="nav-item text-center mx-2 mx-lg-1">
          <router-link  class="nav-link " aria-current="page" to="/">
            <div>
              <span class="badge rounded-pill badge-notification bg-danger"><i class="bi bi-house-fill"></i></span>
            </div>
            Home
          </router-link >
        </li>
        <li class="nav-item text-center mx-2 mx-lg-1">
          <router-link  class="nav-link active" to="/about">
            <div>
              <span class="badge rounded-pill badge-notification bg-danger"><i class="bi bi-file-earmark-person-fill"></i></span>
            </div>
            Sobre
          </router-link >
        </li>
        <li class="nav-item text-center mx-2 mx-lg-1">
          <router-link  class="nav-link active" to="/top3">
            <div>
              <span class="badge rounded-pill badge-notification bg-danger"><i class="bi bi-file-earmark-person-fill"></i></span>
            </div>
            destaques
          </router-link >
        </li>
        
      </ul>
      <!-- Left links -->

      <!-- Right links -->
      <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
        <li class="nav-item text-center mx-2 mx-lg-1">
          <router-link  class="nav-link active" to="/Cart">
            <div>
              <span class="badge rounded-pill badge-notification bg-info"><i class="bi bi-cart4"></i></span>
            </div>
            Carinho
          </router-link >
        </li>
      </ul>
      <!-- Right links -->

      <!-- Search form -->
      <form class="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
        <input type="search" class="form-control" placeholder="Search" aria-label="Search" />
        <button class="btn btn-primary" type="button" data-mdb-ripple-color="dark">
          Search
        </button>
      </form>

      <div v-if="store.email === ''" class="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
        <button type="button" class="btn btn-outline-light me-2" @click="router.push('/login')">Entre</button>
        <button type="button" class="btn btn-warning" @click="router.push('/cadastro')">Cadastro</button>
      </div>
      <div v-else class="d-flex input-group w-auto ms-lg-3 my-3 my-lg-0">
        <p style="color: azure;">{{store.email}}</p>
        <button type="button" class="btn btn-warning" @click="logout()">Sair</button>
      </div>
      
    </div>
    <!-- Collapsible wrapper -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->


</template>

<style scoped>

.btn {
  padding: .55rem 1.5rem .45rem;
}

</style>