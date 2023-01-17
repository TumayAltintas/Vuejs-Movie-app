<template>
  <div class="row mb-5">
    <div class="imgarka blur" style="overflow-y: hidden; white-space: nowrap;" id="carousel-wrapper">
      <div v-for="(week,index) in slides" :key="index" style="padding: 0;margin-right: 25px;width: 165px;height: 350px">
        <div class="average">
          <span style="color:#000;">
            {{ week.vote_average }}
          </span>
        </div>
        <img class="opacity-100 shadow-lg rounded rounded-150" :src="IMG_URL + week.poster_path">
        <div v-if="week.media_type='movie'" class="title">
          <router-link class="link-item" v-if="week.media_type='tv'" :to="'/Movie/' + week.id">
            <p>{{ week.title }}</p>
          </router-link>
        </div>
        <div v-if="week.media_type='tv'" class="title2">
          <router-link class="link-item" :to="'/Tv/'+ week.id">
            <p>{{ week.name }}</p>
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
    const TOP_MOVIE_URL = 'https://api.themoviedb.org/3/trending/all/week?';

    axios
        .get(TOP_MOVIE_URL + API_KEY)
        .then((response) => {

          this.slides = response.data.results
        })
  },
}


</script>

<style scoped>
.imgarka {
  background-image: url(/src/components/photo/1.png);
  background-position: 50% 200px;
  background-position-x: 50%;
  background-position-y: 120px;
  background-repeat: no-repeat;
  background-repeat-x: no-repeat;

}

#carousel-wrapper {
  display: flex;
  position: relative;
  transition: transform 0.5s;
  height: 380px;
}

div.average {
  position: relative;
  top: 0;
  width: max-content;
}

div.title {
  width: 100%;
  height: 0;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  text-decoration: none;

}

div.title2 {
  width: 100%;
  height: 0;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
}

.link-item {
  text-decoration: none;
}

p {
  color: black;
  font-size: 1.2rem;
  font-weight: 700;
}

img {
  width: 165px;
}

</style>

