<template>
  <section>
    <div>
      <Header></Header>
    </div>
    <div>
      <div class="container">
        <div>
          <button v-on:click.prevent="previous()"><<</button>
          <button v-on:click.prevent="next()">>></button>
        </div>
        <div>
        </div>
        <div>
          <section >
            <div class="row">
              <div v-for="person in People" :key="person.id"  class="col-lg-2 col-md-3 m-3">
                <div>
                  <div>
                    <router-link to="">
                      <img class="opacity-100 shadow-lg rounded rounded-150" :src="IMG_URL + person.profile_path" alt="">
                    </router-link>
                  </div>
                </div>
                <h2>{{ person.name }}</h2>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import axios from "axios";

let currentPage = 1;
export default {
  name: "person",
  data() {
    return {
      People: [],
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
        const People = 'https://api.themoviedb.org/3/person/popular?';
        axios
          .get(People + API_KEY + '&language=en-US&page=' + page)
          .then((response) => {

            this.People = response.data.results
            console.log(this.People)
          })
      } catch (error) {
        console.log(error)
      }
    },
    scroll() {
      window.onscroll = () => {
        let bottomofWindow =
          document.documentElement.scrollTop + window.innerWidth ===
          document.documentElement.offsetHeight;
        if (bottomofWindow) {
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
img{
  width: 150px;
}
h2{
  font-size: 16px; color: blue
}
</style>
