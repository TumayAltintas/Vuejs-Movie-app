<template>
  <div class="container">
    <SearchBack/>
    <div>
      <div>
        <div style="margin-top: 50px">
          <TrendCombine/>
        </div>
        <div style="margin-top: 25px">
          <button class="custom-button" style="color: black;" v-if="show" @click="show=!show">Tv</button>
          <button class="custom-button" style="color: black;" v-else @click="show=!show">Movie</button>
        </div>
        <TvMainPage v-if="show"/>
        <MovieMainPage v-else/>
      </div>
    </div>
  </div>
</template>

<script>


import TrendCombine from "../MainPageTrending/TrendCombine.vue";
import MovieMainPage from "../MoviePages/MovieMainPage.vue";
import TvMainPage from "../TvPages/TvMainPage.vue";
import SearchBack from "../Search/SearchBack.vue";

export default {
  name: "MainPageMovieAndTv",
  components: {
    MovieMainPage,
    TrendCombine,
    TvMainPage,
    SearchBack


  },
  data() {
    return {
      buttonText: 'Tv',
      buttonColor: '#ccc',
      show: true,
      isChecked: false

    }
  },
}
</script>

<style scoped>
.custom-button {
  display: inline-block;
  color: #fff;
  text-align: center;

  background-color: #007bff;
  padding: 0.375rem 0.75rem;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  border-radius: 30rem;
  cursor: pointer;
}

.custom-button:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}

.custom-button:active {
  color: #fff;
  background-color: #0062cc;
  border-color: #005cbf;
}

.custom-button:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

</style>

