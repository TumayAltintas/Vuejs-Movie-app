<template>
<div>
  <Top-Header/>
  <MainPageMovieAndTv/>
</div>
</template>

<script>
import MainPageMovieAndTv from "../components/MainPageMovieAndTv/MainPageMovieAndTv.vue";
export default {
  name: "Home",
  components: {MainPageMovieAndTv}
}
</script>

<style scoped>
.blur {
  transition: linear 0.3s;
  opacity: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: column;
  min-height: 100%;
  height: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  background-color: rgba(var(--tmdbDarkBlue), 1);
  color: #000;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: 1em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.blur::after {
  content: '';
  width: 60px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #fff 100%);
  will-change: opacity;
  pointer-events: none;
}
</style>