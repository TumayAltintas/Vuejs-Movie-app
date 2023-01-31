<template>
  <TvDetail :TvDetails="TvDetails" :AirDate="AirDate"/>
  <TvCast :TvCast="TvCast"/>
</template>

<script>
import axios from "axios";
import TvDetail from "./TvDetail.vue";
import TvCast from "./TvCast.vue";

export default {
  name: "DetailData",
  components: {
    TvDetail,
    TvCast
  },
  data() {
    return {
      TvCast: [],
      TvDetails: '',
      AirDate: ''
    }
  },
  async mounted() {
    axios
        .get(this.API + 'tv/' + this.$route.params.id + '?' + this.API_KEY + '&language=en-US')
        .then((response) => {
          this.TvDetails = response.data
          this.AirDate = response.data.first_air_date.slice(0, 4)
        })
    axios
        .get(this.API + 'tv/' + this.$route.params.id + '/credits?' + this.API_KEY + '&language=en-US')
        .then((res) => {
          this.TvCast = res.data.cast
        })
    window.addEventListener('resize', this.handleResize)
  },

}
</script>

<style scoped>

</style>