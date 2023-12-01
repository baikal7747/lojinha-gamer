<script lang="ts">



</script>



<figure class="thermal_fans_animate thermal_animate_control fans_animate_flow_frame1 bg-contain bg-webp d-block" style="animation-play-state: running;"></figure>
<figure class="thermal_fans_animate thermal_animate_control fans_animate_flow_frame2 bg-contain bg-webp d-block" style="animation-play-state: running;"></figure>
<figure class="thermal_fans_animate thermal_animate_control fans_animate_flow_frame3 bg-contain bg-webp d-block" style="animation-play-state: running;"></figure>
<figure class="thermal_fans_animate thermal_animate_control fans_animate_flow_frame4 bg-contain bg-webp d-block" style="animation-play-state: running;"></figure>
<figure class="thermal_fans_animate thermal_animate_control fans_animate_flow_frame5 bg-contain bg-webp d-block" style="animation-play-state: running;"></figure>
<figure class="thermal_fans_animate thermal_animate_control fans_animate_flow_frame6 bg-contain bg-webp d-block" style="animation-play-state: running;"></figure>
<figure class="thermal_fans_animate thermal_animate_control fans_animate_flow_frame7 bg-contain bg-webp d-block" style="animation-play-state: running;"></figure>




<template>

<div class="slideshow-container">
  <div class="main-slide">
    <img src="fundo_do_site.jpeg" class="main-img">
  </div>

  <div class="side-slides">
    <div class="side-slide-left">
      <img src="fundo_do_site.jpeg" class="side-img">
    </div>
    <div class="side-slide-right">
      <img src="fundo_do_site.jpeg" class="side-img">
    </div>
  </div>
</div>


</template>




<style scoped>
/* Estilos para ocultar imagens inicialmente */
.side-slides {
  display: flex;
  position: relative;
  overflow: hidden;
}

.side-slide-left,
.side-slide-right {
  flex: 1;
  overflow: hidden;
}

.side-img {
  width: 100%;
  position: absolute;
  top: 0;
  transition: transform 0.6s ease;
}

.main-slide {
  position: relative;
}

.main-img {
  width: 100%;
  display: block;
}

/* Estilos para ajustar a posição das imagens laterais */
.side-slide-left {
  right: 50%;
  transform: translateX(-50%);
}

.side-slide-right {
  left: 50%;
  transform: translateX(50%);
}
</style>