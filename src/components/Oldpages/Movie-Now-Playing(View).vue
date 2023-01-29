<template>
<div>
  <Top-Header style="margin-bottom: 50px"/>
  <MovieNowPlaying/>
</div>
</template>

<script>
import MovieNowPlaying from "./MovieNowPlaying.vue";
export default {
  name: "Movies",
  components: {MovieNowPlaying}
}
</script>

<style scoped>

</style>