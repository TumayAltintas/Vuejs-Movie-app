<template>
  <div class="container">
    <div class="blur container" ref="carousel" style="overflow-y: hidden; white-space: nowrap;" id="carousel-wrapper">
      <div v-for="(cast,index) in TvCast" :key="index"
           class="opacity-100 shadow-lg rounded-3 col m-2"
           style="width: 138px;height: 320px;display: inline-block; flex: 0 0 auto;">
        <div>
          <router-link v-if="cast.profile_path == null" :to="'/Person/' + cast.id + '/' + cast.name">
            <img class="ImgCast" style="height: 207px" src="../photo/empty-profile-picture-png-2-2.png" alt="">

          </router-link>
          <router-link v-else :to="'/Person/' + cast.id + '/' + cast.name.replace(/ /g, '+')">
            <img class="ImgCast" :src="this.API_IMG_URL + cast.profile_path" alt="">
          </router-link>
          <p class=" title2">{{ cast.name }}</p>
          <p class=" title">{{ cast.character }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TvCast",
  props : ['TvCast'],
}
</script>

<style scoped>
#carousel-wrapper {
  display: flex;
  position: relative;
  transition: transform 0.5s;
  height: 350px;
}
.title {
  white-space: normal;
}
.title2 {
  width: 100%;
  position: relative;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #000;
}

img.ImgCast {
  width: 138px;
  padding: 0;
  margin: 0;
}

</style>