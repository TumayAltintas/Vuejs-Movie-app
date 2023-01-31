<template>
  <div class="container">
    <button v-on:click.prevent="previous()">Back</button>
    <button v-on:click.prevent="next()">Next</button>
  </div>
  <Tv :TvData="TvData"/>
</template>

<script>
import axios from "axios";
import Tv from "./TvPage.vue";
let currentPage = 1;
export default {
  name: "TvPagesData",
  components : {
    Tv
  },
  data() {
    return {
      TvData: [],
    }
  },
  mounted() {
    this.fetchActors(currentPage)
  },
  computed: {

    getQuary() {
      return this.$route.params.name
    }

  },
  watch: {
    getQuary(newValue, oldValue) {
      if (newValue !== oldValue) {
        window.location.reload();
      }
    }
  },
  methods: {
    async fetchActors(page) {
      try {
        axios
            .get(this.API + '/tv/' + this.getQuary + '?' + this.API_KEY + '&language=en-US&page=' + page)
            .then((response) => {

              this.TvData = response.data.results
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

</style>