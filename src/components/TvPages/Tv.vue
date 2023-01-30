<template>
  <div class="container">
    <div>
      <button v-on:click.prevent="previous()">Back</button>
      <button v-on:click.prevent="next()">Next</button>
    </div>
    <div>
      <div class="row">
        <div v-for="(tv,index) in Tv" :key="index" class="col item">
          <div class="item-product">
            <router-link :to="'/TvDetail/'+ tv.id">
              <img class="image" :src="this.API_IMG_URL + tv.poster_path" alt="">
            </router-link>
          </div>
            <h2>{{ tv.name }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

let currentPage = 1;
export default {
  name: "Tv",
  data() {
    return {
      Tv: [],
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
  height: 300px;
  border-top-left-radius: 8px 8px;
  border-top-right-radius: 8px 8px;

}

.item-product {
  width: 200px;
}

.item {
  margin-right: 20px;
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
