<template>
  <div class="container">
    <div>
      <button v-on:click.prevent="previous()">Back</button>
      <button v-on:click.prevent="next()">Next</button>
    </div>
    <div>
      <div class="row">
        <router-link :to="'/Person/' + person.id + '/' + person.name.replace(/ /g, '+')" v-for="person in People" :key="person.id" class="col item">
          <div class="item-product">
            <div v-if="person.profile_path == null">
              <img class="image" src="../photo/empty-profile-picture-png-2-2.png" alt="">
            </div>
            <div v-else>
              <img class="image" :src="this.API_IMG_URL + person.profile_path" alt="">
            </div>
          </div>
          <div>
            <h2>{{ person.name }}</h2>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

let currentPage = 1;
export default {
  name: "person",
  data() {
    return {
      People: [],


    }
  },
  mounted() {
    this.fetchActors(currentPage)
  },
  methods: {
    async fetchActors(page) {
      try {
        axios
            .get(this.API + 'person/popular?' + this.API_KEY + '&language=en-US&page=' + page)
            .then((response) => {

              this.People = response.data.results
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
  max-width: 200px;
  border-radius: 8px;
  margin-bottom: 25px;
}

h2 {
  font-size: 16px;
  color: white;
}
</style>
