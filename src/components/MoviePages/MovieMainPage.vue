<template>
  <div class="row">
    <div class="blur scroll" id="carousel-wrapper">
      <router-link class="rout" :to="'/MovieDetail/' + Movie.id + '/' + Movie.title.replace(/ /g, '+')"
                   v-for="(Movie,index) in movie" :key="index">
        <div class="average">
          <span>
            {{ Movie.vote_average }}
          </span>
        </div>
        <div class="LinkItem">
          <img class="opacity-100 shadow-lg rounded rounded-150" :src="this.API_IMG_URL + Movie.poster_path" alt="">
        </div>
        <div class="LinkItem">
          <div class="title">
            <h6 class="TitleText">{{ Movie.title }}</h6>
          </div>
        </div>
      </router-link>
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
      movie: [],

    }
  },

  mounted() {
    axios
        .get(this.API + 'movie/top_rated?' + this.API_KEY + '&language=en-US&page=' + this.currentPage)
        .then((response) => {
          this.movie = response.data.results
        })
  },

}
</script>


<style scoped>

#carousel-wrapper {
  display: flex;
  position: relative;
  transition: transform 0.5s;
  height: 360px;
}

span {
  color: red;
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

.rout {
  padding: 0;
  margin-right: 25px;
  width: 165px;
  height: 350px;
  text-decoration: none;
}

.TitleText {
  color: white;
  font-weight: 700;
}
</style>
