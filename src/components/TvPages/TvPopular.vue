<template>
  <div class="container">
    <div>
      <button v-on:click.prevent="previous()">Next</button>
      <button v-on:click.prevent="next()">Back</button>
    </div>
    <div>
      <div class="row">
        <div v-for="(tv,index) in Tv" :key="index" class="col item">
          <div class="item-product">
            <router-link :to="'/Tv/'+ tv.id">
              <img class="image" :src="IMG_URL + tv.poster_path" alt="">
            </router-link>
          </div>
          <div>
            <h2>{{ tv.name }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";

let currentPage = 1;
export default {
  name: "tvPopular",
  data() {
    return {
      Tv: [],
      IMG_URL: 'https://image.tmdb.org/t/p/w500',

    }

  },
  mounted() {
    this.fetchActors(currentPage)
  },
  methods: {
    async fetchActors(page) {
      try {
        const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
        const TOP_MOVIE_URL = 'https://api.themoviedb.org/3/tv/popular?';
        axios
            .get(TOP_MOVIE_URL + API_KEY + '&language=en-US&page=' + page)
            .then((response) => {

              this.Tv = response.data.results
            })
      } catch (error) {
        console.log(error)
      }
    },
    scroll() {
      window.onscroll = () => {
        let BottomWindow =
            document.documentElement.scrollTop + window.innerWidth ===
            document.documentElement.offsetHeight;
        if (BottomWindow) {
          currentPage += 1;
          this.fetchActors((currentPage += 1))
        }
      }
    },
    next() {
      currentPage += 1;
      this.fetchActors(currentPage);
    },
    previous() {
      currentPage -= 1;
      this.fetchActors(currentPage);
    },
  },

}
</script>


<style scoped>
.image {
  width: 100%;
  border-radius: 8px
}
.item-product{
  width: 180px;
}
.item {
  margin-right: 40px;
  padding: 0;
  border: 1px solid #e3e3e3;;
  max-width: 180px;
  border-radius: 8px
}

h2 {
  font-size: 16px;
  color: #000000
}
</style>
