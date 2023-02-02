<template>
  <header>
    <div class="d-flex">
      <a href="https://www.themoviedb.org/ " class="flash">Go to MovieDb</a>
    </div>
    <div class="container d-flex">
      <div class="" style="position: absolute; top: 25%">

        <div style="margin-left: 25px" class="dropdown">
          <a style="color: white;cursor: pointer;position: relative">Movies</a>
          <div class="dropdown-content">
            <router-link class="LinkItem" :to="'/Movie/' + 'popular' ">Popular</router-link>
            <router-link class="LinkItem" :to="'/Movie/' + 'now_playing'">Now Playing</router-link>
            <router-link class="LinkItem" :to="'/Movie/' + 'top_rated'">Top Rated</router-link>
            <router-link class="LinkItem" :to="'/Movie/' + 'upcoming'">Upcoming</router-link>
          </div>
        </div>
        <div style="margin-left: 25px" class="dropdown">
          <a style="color: white;cursor: pointer;">Tv Shows</a>
          <div class="dropdown-content">

          </div>
        </div>
        <div style="margin-left: 25px" class="dropdown">
          <a style="color: white;cursor: pointer;">People</a>
          <div class="dropdown-content">
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "test4",
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
.SelectedFirst {
  margin: 0;
  padding: 0;
  width: 87px;
  height: 100%;
  position: relative;
  transition: 1s;
  background-color: rgb(10, 14, 51);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;

}

.selected {
  float: right;
  width: 107px;
  height: 100%;
  position: relative;
  transition: 1s;
  background-color: rgb(10, 14, 51);
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
  color: green;
}

.select {
  border: black solid 1px;
  border-radius: 50px;
  width: 192px;
  height: 30px;
  margin: 0;
  padding: 0;
}
</style>