<template>
  <div class="row mb-5">
    <div ref="carousel" style="overflow-y: hidden; white-space: nowrap;" id="carousel-wrapper"
         :style="{ width: (slides.length * 100) + '%', transform: 'translateX(' + (-currentSlide * (100 / slides.length)) + '%)' }">
      <div v-for="(day,index) in slides" :key="index" class="col-lg-2 col-md-3 col-sm-4 m-2"
           style="width: 250px;height: 250px;display: inline-block; flex: 0 0 auto;">
        <div>
          <div class="average">
            <span style="color: black"> {{ day.vote_average }}</span>
          </div>
          <router-link to="">
            <img class="opacity-100 shadow-lg rounded rounded-150" :src="IMG_URL + day.poster_path">
          </router-link>
        </div>
        <div class="title">
          <p v-if="day.media_type='movie'">{{ day.title }}</p>
          <p v-if="day.media_type='tv'">{{ day.name }}</p>
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
#carousel-wrapper {
  display: flex;
  position: relative;
  transition: transform 0.5s;
  height: 350px;
}

#carousel-wrapper > * {
  width: calc(100% / slides.length);
}

#Full {
  margin-top: 150px
}

div.average {
  position: relative;
  top: 0;
  width: max-content;
}

div.title {
  justify-content: start;
  text-align: start;
}

p {
  color: red;
}

img {
  width: 165px;
}
</style>


