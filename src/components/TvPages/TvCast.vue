<template>
  <div class="container">
    <div class="blur container" ref="carousel" style="overflow-y: hidden; white-space: nowrap;" id="carousel-wrapper">
      <router-link :to="'/Person/' + cast.id + '/' + cast.name.replace(/ /g, '+')" v-for="(cast,index) in TvCast"
                   :key="index"
                   class="opacity-100 shadow-lg rounded-3 col m-2 person">
        <div>
          <div v-if="cast.profile_path == null">
            <img class="ImgCast" style="height: 207px" src="../photo/empty-profile-picture-png-2-2.png" alt="">
          </div>
          <div v-else>
            <img class="ImgCast" :src="this.API_IMG_URL + cast.profile_path" alt="">
          </div>
          <div class="d-flex flex-column">
            <p class="title2">{{ cast.name }}</p>
            <p class="title">{{ cast.roles[0].character }}</p>
            <p class="title3">{{ cast.roles[0].episode_count }} Episodes</p>
          </div>

        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TvCast",
  props: ['TvCast'],
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
  display: flex;
  margin: 0;
  padding: 0;
  white-space: normal;
  font-size: 0.8rem;

}

.title3 {
  display: flex;
  font-size: 12px;
  color: #000;
  font-weight: 500;
  margin: 0;
  padding: 0;
}

.title2 {
  width: 100%;
  font-size: 1rem;
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

.person {
  width: 138px;
  height: 320px;
  display: inline-block;
  flex: 0 0 auto;
  text-decoration: none;
}


img.ImgCast {
  width: 138px;
  padding: 0;
  margin: 0;
}

</style>