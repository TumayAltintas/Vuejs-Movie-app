<template>
<div>
  <Top-Header style="margin-bottom: 50px"/>

  <TvPopular/>
</div>
</template>

<script>
import TvPopular from "./TvPopular.vue";
export default {
  name: "Popular",
  components: {
    TvPopular
  }
}
</script>

<style scoped>

</style>