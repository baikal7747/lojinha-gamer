<script setup lang="ts">
import rodape from './components/rodape.vue';
import cabecalho from './components/cabecalho.vue';




// window.addEventListener('scroll', function () {
//     const header = document.querySelector('header');
//     if (window.scrollY > 50) {
//         header.classList.add('header-shrink');
//     } else {
//         header.classList.remove('header-shrink');
//     }
// });
</script>
<template>
    <cabecalho>
    </cabecalho>
    
    <RouterView></RouterView>   
    
    <rodape>
    </rodape>
    
</template>


<style scoped>

        .header-shrink {
            height: 60px; /* Altura menor para o cabeçalho ao rolar */
        }

        h1 {
            font-size: 36px;
            margin: 0;
            color: #fff;
        }

        .logo {
            float: right; /* Define o logo para flutuar à direita */
            margin-right: 50px; /* Adiciona um espaço à esquerda do logo */
            margin-top: -50px;
        }

        .logo img {
            max-width: 70px; /* Define a largura máxima da imagem da logo */
        }



</style>



