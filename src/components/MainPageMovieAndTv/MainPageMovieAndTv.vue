<template>
  <div class="container">
    <SearchBack/>
    <div class="trend">
      <TrendCombine/>
    </div>
    <div class="d-flex">
      <div class="row col">
        <h3 class="movie-tv">Top Movie/Tv</h3>
        <div class="select d-flex">
          <div :class="{ SelectedFirst: SelectedFirst}"><h3 class="text" @click="toggleActive"><a>Tv</a></h3></div>
          <span></span>
          <div :class="{selected: selected}"><h3 class="text" @click="secondSelect"><a>Movie</a></h3></div>
        </div>
      </div>
    </div>
    <TvMainPage v-if="ShowTrend"/>
    <MovieMainPage v-else/>
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
      ShowTrend: true,
      selected: false,
      SelectedFirst: true,
    }
  },
  methods: {
    toggleActive() {
      this.SelectedFirst = true
      this.selected = false
      this.ShowTrend = true

    },
    secondSelect() {
      this.SelectedFirst = false
      this.selected = true
      this.ShowTrend = false
    },
  },
}
</script>

<style scoped>
.trend{
  margin-top: 50px
}

.SelectedFirst {
  margin: 0;
  padding: 0;
  width: 50px;
  height: 100%;
  position: relative;
  transition: 1s;
  background-color: blue;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;

}
.movie-tv{
  margin-right: 15px;
  font-size: 1.5em;
  padding: 0;
  width: max-content;
  color: white;
}
.selected {
  float: right;
  width: 90px;
  height: 100%;
  position: relative;
  transition: 1s;
  background-color: blue;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

.text {
  display: inline-flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  padding: 4px 20px;
  margin-bottom: 0;
  white-space: nowrap;
  color: white;
  cursor: pointer;
}

.select {
  border: white solid 1px;
  border-radius: 50px;
  width: 150px;
  height: 30px;
  margin: 0;
  padding: 0;
}
</style>

