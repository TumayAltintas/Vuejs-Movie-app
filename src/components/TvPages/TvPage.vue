<template>
  <div class="container">
    <div class="row">
      <div v-for="(tv,index) in TvData" :key="index" class="col item">
        <div class="item-product">
          <router-link :to="'/TvDetail/'+ tv.id + '/' + tv.name.replace(/ /g, '+')">
            <img class="image" :src="this.API_IMG_URL + tv.poster_path" alt="">
          </router-link>
        </div>
        <h2>{{ tv.name }}</h2>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "Tv",
  props: ['TvData'],

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
