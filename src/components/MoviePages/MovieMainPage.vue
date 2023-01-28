<template>
  <div>
    <div class="row">
      <div class="blur" id="carousel-wrapper">
        <div v-for="(Movie,index) in slides" :key="index"
             style="padding: 0;margin-right: 25px;width: 165px;height: 350px">
          <div class="average">
          <span style="color:#000;">
            {{ Movie.vote_average }}
          </span>
          </div>
          <img class="opacity-100 shadow-lg rounded rounded-150" :src="this.API_IMG_URL + Movie.poster_path" alt="">
          <router-link class="LinkItem" :to="'/Movie/' + Movie.id">
            <div class="title">
              <h6 class="TitleText">{{ Movie.title }}</h6>
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
      currentSlide: 0,

    }
  },

  mounted() {

    axios
        .get(this.API_MOVIE + 'top_rated?' + this.API_KEY + '&language=en-US&page=' + this.currentPage)
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

.blur {
  overflow-y: hidden;
  white-space: nowrap;
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

.LinkItem {
  text-decoration: none;
}

.TitleText {
  color: black;
  font-weight: 700;
}


</style>
