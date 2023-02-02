<template>
  <div class="row">
    <div class="blur scroll" id="carousel-wrapper">
      <router-link class="LinkItem" :to="'/TvDetail/' + Tv.id  + '/' + Tv.name.replace(/ /g, '+')" v-for="(Tv,index) in slides"
                   :key="index">
        <div class="average">
          <span style="color:red;">
            {{ Tv.vote_average }}
          </span>
        </div>
        <div>
          <img class="opacity-100 shadow-lg rounded rounded-150" :src="this.API_IMG_URL + Tv.poster_path" alt="">
        </div>
        <div>
          <div class="title">
            <h6 class="TitleText">{{ Tv.name }}</h6>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TvMainPage',
  components: {},
  data() {
    return {
      slides: [],

    }
  },
  async mounted() {
    axios
        .get(this.API + 'tv/top_rated?' + this.API_KEY + '&language=en-US&page=' + this.currentPage)
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

img {
  width: 165px;
}

.blur {
  overflow-y: hidden;
  white-space: nowrap;
}

.LinkItem {
  text-decoration: none;
  padding: 0;
  margin-right: 25px;
  width: 165px;
  height: 350px;
}

.TitleText {
  color: white;
  font-weight: 700;
}
</style>
