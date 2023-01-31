<template>
  <Moviedetail :MoviesDetails='MoviesDetails' :AirDate="AirDate"/>
  <MovieCast :MoviesCast="MoviesCast"/>
</template>
<script>
import Moviedetail from "./Moviedetail.vue";
import axios from "axios";
import MovieCast from "./MovieCast.vue";

export default {
  name: "DetailData",
  components: {Moviedetail, MovieCast},
  data() {
    return {
      MoviesDetails: '',
      MoviesCast: [],
      AirDate: ''
    }
  },
  async mounted() {
    axios
        .get(this.API + 'movie/' + this.$route.params.id + '?' + this.API_KEY + '&language=en-US')
        .then((response) => {
          this.MoviesDetails = response.data
          this.AirDate = response.data.release_date.slice(0, 4)
        })
    axios
        .get(this.API + 'movie/' + this.$route.params.id + '/credits?' + this.API_KEY + '&language=en-US')
        .then((res) => {
          this.MoviesCast = res.data.cast
        })
    window.addEventListener('resize', this.handleResize)
  },
}
</script>

<style scoped>

</style>