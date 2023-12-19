<template>
  <div class="jogo_destaque">
      <div class="oferta">
          <h2 class="informacao">RTX</h2>
          <p class="informacao">10% OFF</p>
          <a class="botao_confirmar" href="/teste">conferir</a>
      </div>
  </div>
</template>

<style scoped>
  .jogo_destaque{
  background-image: url(../assets/4090.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50rem;
  margin-top: -10%;
}
.oferta{
  color: whitesmoke;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.informacao{
  margin: 1rem;
  font-size: 3rem;
  color:rgb(0, 247, 0);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.botao_confirmar{
  font-size: 2rem;
  background-color: rgb(46, 74, 163);
  padding: 0.5rem 2rem;
  border-radius: 5px;
  color: whitesmoke;
}
</style>