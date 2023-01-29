<template>
<div>
  <Top-Header style="margin-bottom: 50px"/>
  <TvAiringToday/>
</div>
</template>

<script>
import TvAiringToday from "./TvAiringToday.vue";
export default {
  name: "AiringNow",
  components: {
    TvAiringToday
  }
}
</script>

<style scoped>

</style>