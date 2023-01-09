<template>
  <div>
    <div class="row">
      <ol style="width: max-content" class="d-flex">
        <h3>Trending</h3>
      </ol>
      <div style="margin-left: 25px">
        <button style="color: black;" v-if="showtrend" @click="showtrend=!showtrend">Day</button>
        <button style="color: black;" v-else="" @click="showtrend=!showtrend">Week</button>
      </div>
    </div>
    <TrendingDay v-if="showtrend"/>
    <TrendingWeek v-else=""/>
  </div>
</template>

<script>

import TrendingDay from "./TrendingDay.vue";
import TrendingWeek from "./TrendingWeek.vue";
export default {
  name: "TrendCombine",
  components:{
    TrendingWeek,
    TrendingDay

  },
  data(){
    return{
      showtrend : true
    }
  }
}
</script>

<style scoped>
h4{
  margin-left: 15px;
  font-size: 1.17em;
}
</style>
