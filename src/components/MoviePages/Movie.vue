<template>
  <div class="container">
      <div class="row">
        <div v-for="(movie,index) in Movies" :key="index" class="col item">
          <div class="item-product">
            <router-link :to="'/MovieDetail/'+ movie.id + '/' + movie.title.replace(/ /g, '+')">
              <img class="image" :src="this.API_IMG_URL + movie.poster_path" :alt="movie.title">
            </router-link>
          </div>
          <div>
            <h2>{{ movie.title }}</h2>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "MovieNowPlaying",
  props: ['Movies'],
}


</script>

<style scoped>
.image {
  width: 100%;
  height: 100%;
  border-top-left-radius: 8px 8px;
  border-top-right-radius: 8px 8px;

}

.item-product {
  width: 165px;
  height: 248px;

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