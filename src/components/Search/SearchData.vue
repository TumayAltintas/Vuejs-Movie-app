<template>
  <div class="container">
    <button v-on:click.prevent="previous()">Next</button>
    <button v-on:click.prevent="next()">Back</button>
    <button class="btn btn-primary" @click="TvButton()">Tv</button>
    <button class="btn btn-primary" @click="MovieButton()">Movie</button>
    <button class="btn btn-primary" @click="PersonButton()">Person</button>
  </div>
  <div>
    <SearchMain :search="search"/>
  </div>
</template>

<script>
import axios from "axios";
import SearchMain from "./SearchMain.vue";
let currentPage = 1;
export default {
  name: "SearchData",
  components : {
    SearchMain
  },
  data() {
    return {
      search: '',
      text: 'movie',
      MoviesDetails: '',
      quary : this.$route.params.query.split(" ")


    }
  },
  mounted() {
    this.fetchActors(currentPage)
  },
  methods: {
    async fetchActors(page) {
      try {
        axios
            .get(this.API + 'search/' + this.text + '?' + this.API_KEY + '&language=en-US&query=' + this.quary + '&page=' + page)
            .then((response) => {
              this.search = response.data.results
            })
      } catch (error) {
        console.log(error)
      }
    },
    TvButton() {
      this.text = 'tv'
      this.fetchActors(currentPage)
    },
    MovieButton() {
      this.text = 'movie'
      this.fetchActors(currentPage)
    },PersonButton() {
      this.text = 'person'
      this.fetchActors(currentPage)
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

</style>