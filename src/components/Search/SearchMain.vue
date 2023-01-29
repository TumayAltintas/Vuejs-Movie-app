<template>
  <div class="container">
    <div>
      <button v-on:click.prevent="previous()">Next</button>
      <button v-on:click.prevent="next()">Back</button>
      <button class="btn btn-primary" @click="TvButton()">Tv</button>
      <button class="btn btn-primary" @click="MovieButton()">Movie</button>
      <button class="btn btn-primary" @click="PersonButton()">Movie</button>
    </div>
    <div>
      <div class="row">
        <div v-for="(data,index) in search" :key="index" class="col item">
          <div class="item-product">
            <img class="imageE" v-if="data.poster_path == null" src="../photo/empty.jpg" alt="">
            <img v-else class="image" :src="this.API_IMG_URL + data.poster_path" alt="">
          </div>
          <div>
            <router-link class="LinkItem" :to="'/Tv/'+ data.id">
              <h2>{{ data.name }}</h2>
            </router-link>
            <router-link class="LinkItem" :to="'/Movie/'+ data.id">
              <h2>{{ data.title }}</h2>
            </router-link>
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
  name: "SearchMain",
  data() {
    return {
      search: '',
      text: 'movie',
      MoviesDetails: '',
      quary : this.$route.params.query.split(" ")


    }
  },

  // computed: {
  //   filteritem() {
  //     const quary = this.searchQuery.toLowerCase()
  //     if (this.searchQuery === '') {
  //       return this.search
  //     }
  //     return this.search.filter((user) => {
  //       return Object.values(user).some((word) =>
  //           String(word).toLowerCase().includes(quary))
  //     })
  //   },
  // },
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
.image {
  width: 100%;
  border-radius: 8px
}

.imageE {
  width: 100%;
  height: 270px;
}

.item-product {
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

.LinkItem {
  text-decoration: none;
  margin: 0;
  padding: 0;
}
</style>