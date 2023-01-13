<template>
  <div>
    <div class="row">
      <div class="blur" style="overflow-y: hidden; white-space: nowrap;" id="carousel-wrapper">
        <div v-for="(Movie,index) in slides" :key="index" style="padding: 0;margin-right: 25px;width: 165px;height: 350px">
          <div class="average">
          <span style="color:#000;">
            {{ Movie.vote_average }}
          </span>
          </div>
          <img class="opacity-100 shadow-lg rounded rounded-150" :src="IMG_URL + Movie.poster_path">
          <router-link :to="'/Movie/' + Movie.id">
            <div class="title">
              <h6>{{ Movie.title }}</h6>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'MovieMainPage',
  components: {},
  data() {
    return {
      slides: [],
      IMG_URL: 'https://image.tmdb.org/t/p/w500',
      currentSlide: 0,

    }
  },

  mounted() {
    const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
    const TOP_MOVIE_URL = 'https://api.themoviedb.org/3/movie/top_rated?';

    axios
        .get(TOP_MOVIE_URL + API_KEY + '&language=en-US&page=' + this.currentPage)
        .then((response) => {

          this.slides = response.data.results
        })
  },

  computed: {
    rows() {
      return this.Movies.length
    },
    slidesLength() {
      return this.slides.length;
    }
  },

}
</script>


<style scoped>

#carousel-wrapper {
  display: flex;
  position: relative;
  transition: transform 0.5s;
  height: 350px;
}

div.title {
  width: 100%;
  position: relative;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
}

div.average {
  position: relative;
  top: 0;
  width: max-content;
}


p {
  color: red;
}

img {
  width: 165px;
}

.blur {
  transition: linear 0.1s;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  flex-direction: column;

}

.blur::after {
  content: '';
  width: 60px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #fff 100%);
}
</style>
