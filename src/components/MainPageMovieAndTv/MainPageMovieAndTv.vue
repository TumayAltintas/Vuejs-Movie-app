<template>
  <div class="container">
    <div style="bottom: 25px;">
      <img style="width: 100%; height: 300px"
           src="https://blog.havacilikpsikolojisi.net/wp-content/uploads/2020/01/1-1-1024x747.jpg">
    </div>
    <div>
      <button @click="show=!show">Movie</button>
      <button @click="show=!show">Tv Series</button>
      <div>
        <TvMainPage v-if="show"/>
        <MovieMainPage v-else/>
      </div>
      <div>
        <div>deneme</div>
        <TrendCombine/>
      </div>
    </div>
  </div>
</template>

<script>


import TrendCombine from "../MainPageTrending/TrendCombine.vue";
import MovieMainPage from "../MoviePages/MovieMainPage.vue";
import TvMainPage from "../TvPages/TvMainPage.vue";

export default {
  name: "MainPageMovieAndTv",
  components: {
    MovieMainPage,
    TrendCombine,
    TvMainPage


  },
  data() {
    return {
      show: true,
    }
  }
}
</script>

<style scoped>

</style>
