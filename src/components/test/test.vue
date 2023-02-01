<template>
  <div v-if="text === 'tv'" class="container">
    <div class="row">
      <div v-for="(data,index) in search" :key="index" class="col item">
        <div class="item-product">
          <router-link v-if="data.poster_path == null" :to="'/TvDetail/'+ data.id">
            <img class="imageE"  src="../photo/empty.jpg" alt="">
          </router-link>
          <router-link v-else :to="'/TvDetail/'+ data.id">
            <img  class="image" :src="this.API_IMG_URL + data.poster_path" alt="">
          </router-link>
        </div>
        <div>
          <router-link class="LinkItem" :to="'/TvDetail/'+ data.id">
            <h2>{{ data.name }}</h2>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div v-if="text === 'movie'" class="container">
    <div class="row">
      <div v-for="(data,index) in search" :key="index" class="col item">
        <div class="item-product">
          <router-link v-if="data.poster_path == null" :to="'/MovieDetail/'+ data.id">
            <img class="imageE"  src="../photo/empty.jpg" alt="">
          </router-link>
          <router-link v-else :to="'/MovieDetail/'+ data.id">
            <img  class="image" :src="this.API_IMG_URL + data.poster_path" alt="">
          </router-link>
        </div>
        <div>
          <router-link class="LinkItem" :to="'/MovieDetail/'+ data.id">
            <h2>{{ data.title }}</h2>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div v-if="text === 'person'" class="container">
    <div class="row">
      <div v-for="(data,index) in search" :key="index" class="col item">
        <div class="item-product">
          <router-link  v-if="data.poster_path == null" :to="'/Person/'+ data.id + data.name">
            <img class="imageE" src="../photo/empty.jpg" alt="">
          </router-link>
          <router-link v-else :to="'/Person/'+ data.id + data.name">
            <img  class="image" :src="this.API_IMG_URL + data.profile_path" alt="">
          </router-link>
        </div>
        <div>
          <router-link class="LinkItem" :to="'/Person/'+ data.id + data.name">
            <h2>{{ data.name }}</h2>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'test',
  components: {},
  data() {
    return {
      slides: [],
      IMG_URL: 'https://image.tmdb.org/t/p/w500',

    }
  },

  mounted() {

    const TOP_MOVIE_URL = 'https://api.themoviedb.org/3/movie/top_rated?';

    axios
        .get(TOP_MOVIE_URL + this.API_KEY + '&language=en-US&page=' + this.currentPage)
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
  height: 320px;


}


#Full {
  margin-top: 150px
}

div.average {
  text-align: end;
  position: relative;

}

div.title {
  justify-content: center;
  text-align: center;
}

p.title {
  color: red;
}

img {
  width: 165px;
}

.cat {
  position: relative;
  width: 200px;
  height: 200px;
  border: 3px solid black;
  border-radius: 50%;
}

.cat::before,
.cat::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: black;
}

.cat::before {
  width: 100px;
  height: 100px;
  top: -50px;
  left: 50px;
}

.cat::after {
  width: 50px;
  height: 50px;
  top: -25px;
  left: 125px;
}

</style>


<script>
import axios from 'axios'


export default {
  name: 'MovieMainPage',
  components: {},
  data() {
    return {
      slides: [],
      IMG_URL: 'https://image.tmdb.org/t/p/w500',
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

