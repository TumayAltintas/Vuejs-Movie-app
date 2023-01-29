<template>
<div>
  <Top-Header style="margin-bottom: 50px"/>

  <MoviePopular/>
</div>
</template>

<script>
import MoviePopular from "../MoviePages/MoviePopular.vue";
export default {
  name: "Popular",
  components: {MoviePopular},

}
</script>

<style scoped>

</style>