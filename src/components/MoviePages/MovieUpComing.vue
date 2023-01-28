<template>
  <div class="container">
    <div>
      <button v-on:click.prevent="previous()">Next</button>
      <button v-on:click.prevent="next()">Back</button>
    </div>
    <div>
      <div class="row">
        <div v-for="(movie,index) in Movies" :key="index" class="col item">
          <div class="item-product">
            <router-link :to="'/Movie/'+ movie.id">
              <img class="image" :src="this.API_IMG_URL + movie.poster_path" alt="">
            </router-link>
          </div>
          <div>
            <h2>{{ movie.title }}</h2>
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
  name: "MovieUoComing",
  data() {
    return {
      Movies: [],


    }
  },
  mounted() {
    this.fetchActors(currentPage)
  },
  methods: {
    async fetchActors(page) {
      try {
        axios
            .get(this.API_MOVIE+ 'upcoming?' + this.API_KEY + '&language=en-US&page=' + page)
            .then((response) => {
              this.Movies = response.data.results
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
  height: 300px;
  border-top-left-radius: 8px 8px;
  border-top-right-radius: 8px 8px;

}
.item-product{
  width: 200px;
}
.item {
  margin-right: 40px;
  padding: 0;
  border: 1px solid #e3e3e3;;
  max-width: 200px;
  border-radius: 8px;
  margin-bottom: 25px;
}

h2 {
  font-size: 16px;
  color: #000000
}
</style>