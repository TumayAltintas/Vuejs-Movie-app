<template>
  <div class="container">
      <div class="row">
        <div v-for="(data,index) in search" :key="index" class="col item">
          <div class="item-product">
            <img class="imageE" v-if="data.poster_path == null" src="../photo/empty.jpg" alt="">
            <img v-else class="image" :src="this.API_IMG_URL + data.poster_path" alt="">
          </div>
          <div>
            <router-link class="LinkItem" :to="'/TvDetail/'+ data.id  + '/' + data.name">
              <h2>{{ data.name }}</h2>
            </router-link>
            <router-link class="LinkItem" :to="'/MovieDetail/'+ data.id + '/'  + data.title">
              <h2>{{ data.title }}</h2>
            </router-link>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "SearchMain",
  props: ['search'],

}
</script>


<style scoped>
.image {
  width: 100%;
  height: 100%;
  border-radius: 8px
}

.imageE {
  width: 100%;
  height: 100%;
}

.item-product {
  width: 165px;
  height: 248px;

}

.item {
  margin-right: 20px;
  padding: 0;
  border-radius: 8px
}

h2 {
  font-size: 16px;
  color: white;
}

.LinkItem {
  text-decoration: none;
  margin: 0;
  padding: 0;
}
</style>