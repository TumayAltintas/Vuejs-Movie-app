<template>
  <div class="row mb-5">
    <div class="blur" ref="carousel" style="overflow-y: hidden; white-space: nowrap;" id="carousel-wrapper">
      <div v-for="(week,index) in slides" :key="index" style="padding: 0;margin-right: 25px;width: 165px;height: 250px">
        <div class="average">
          <span style="color:#000;">
            {{ week.vote_average }}
          </span>
        </div>
        <img class="opacity-100 shadow-lg rounded rounded-150" :src="IMG_URL + week.poster_path">
        <div v-if="week.media_type='movie'" class="title">
          <router-link v-if="week.media_type='tv'" :to="'/Movie/' + week.id">
            <h6>{{ week.title }}</h6>
          </router-link>
        </div>
        <div v-if="week.media_type='tv'" class="title2">
          <router-link :to="'/Tv/'+ week.id">
            <h6>{{ week.name }}</h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'TrendingWeek',

  data() {
    return {
      slides: [],
      IMG_URL: 'https://image.tmdb.org/t/p/w500',
      currentSlide: 0,

    }
  },

  mounted() {
    const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
    const TOP_MOVIE_URL = 'https://api.themoviedb.org/3/trending/all/day?';

    axios
        .get(TOP_MOVIE_URL + API_KEY)
        .then((response) => {

          this.slides = response.data.results
        })
  },
}


</script>

<style scoped>
.blur{
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
.blur::after{
  content: '';
  width: 60px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-image: linear-gradient(to right, rgba(255,255,255,0) 0%, #fff 100%);
  will-change: opacity;
  pointer-events: none;
}
#carousel-wrapper {
  display: flex;
  position: relative;
  transition: transform 0.5s;
  height: 350px;
}


div.average {
  position: relative;
  top: 0;
  width: max-content;
}

div.title {
  width: 100%;
  position: relative;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  text-decoration: none;
}

div.title2 {
  width: 100%;
  position: relative;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
}

p {
  color: red;
}

img {
  width: 165px;
}
</style>


