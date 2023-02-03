<template>
  <div class=" container">
    <div class="scroll" ref="carousel" style=" white-space: nowrap;" id="carousel-wrapper">
      <router-link :to="'/Person/' + cast.id + '/' + cast.name.replace(/ /g, '+')" v-for="(cast,index) in MoviesCast" :key="index"
                   class="opacity-100 shadow-lg rounded-3 col m-2 person">
        <div>
          <div v-if="cast.profile_path == null" >
            <img class="ImgCast" style="height: 207px"
                 src="../photo/empty-profile-picture-png-2-2.png" alt="">
          </div>
          <div v-else>
            <img class="ImgCast" :src="this.API_IMG_URL + cast.profile_path" alt="">
          </div>
          <p class=" title2">{{ cast.name }}</p>
          <p class=" title">{{ cast.character }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCast",
  props: ['MoviesCast'],
}
</script>

<style scoped>
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
  color: white;
}

.person {
  width: 138px;
  height: 320px;
  display: inline-block;
  flex: 0 0 auto;
  text-decoration: none;
}

.title {
  white-space: normal;
}

img.ImgCast {
  width: 138px;
  padding: 0;
  margin: 0;
}

#carousel-wrapper {
  display: flex;
  position: relative;
  transition: transform 0.5s;
  height: 380px;
}
</style>