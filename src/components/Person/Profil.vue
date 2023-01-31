<template>
  <div class="container">
    <div class="content">
      <div class="person">
        <section>
          <div v-if="person.profile_path == null" class="posterImg-profil">
            <img class="personImage" src="../photo/empty-profile-picture-png-2-2.png" alt="">
          </div>
          <div v-else class="posterImg-profil">
            <img class="personImage" :src="this.API_IMG_URL + person.profile_path" alt="">
          </div>
        </section>
        <section>
          <!--            <div class="d-flex">-->
          <!--              <div>-->
          <!--                <a class="social_link" title="Visit Instagram"-->
          <!--                   :href="'https://instagram.com/'+ socialmedia.instagram_id"-->
          <!--                   target="_blank" rel="noopener" data-role="tooltip"><span class="glyphicons_v2 instagram"></span></a>-->
          <!--              </div>-->
          <!--            </div>-->
          <h3>Personal Info</h3>
          <section>
            <p>
              <strong>
                <bdi>Known For</bdi>
              </strong>
              <br>
              {{ person.known_for_department }}
            </p>
            <p>
              <strong>
                <bdi>Known Credits</bdi>
              </strong>
              <br>
              {{ person.popularity }}
            </p>
            <p v-if="person.gender === 2 ">
              <strong>
                <bdi>Gender</bdi>
              </strong>
              <br>
              Male
            </p>
            <p v-else>
              <strong>
                <bdi>Gender</bdi>
              </strong>
              <br>
              Female
            </p>
            <p v-if="person.birthday != null">
              <strong>
                <bdi>Birthday</bdi>
              </strong>
              <br>
              {{ person.birthday }} ({{ age - 1 }} years old)
              <br>
            </p>
            <p v-if="person.deathday !=null">
              <strong>
                <bdi>Deathday</bdi>
              </strong>
              <br>
              {{ person.deathday }} ({{ deadage }} years old)
            </p>
            <p>
              <strong>
                <bdi>Place of Birth</bdi>
              </strong>
              <br>
              {{ person.place_of_birth }}
            </p>
            <ul class="person-know-ul">
              <strong>
                <bdi>Also Known As</bdi>
              </strong>
              <br>
              <li class="person-know" v-for="know in person.also_known_as">
                {{ know }}
              </li>
            </ul>
          </section>
        </section>
      </div>
      <div class="person-information">
        <section>
          <h2 class="title"><a>{{ person.name }}</a></h2>
        </section>
        <section class="person-biography">
          <h3>Biography</h3>
          <div class="out-text">
            <div class="inline-text">
              <p>{{ person.biography }}</p>
            </div>
          </div>
        </section>
        <section class="person-know-for">
          <h3>Known For</h3>
          <div class="blur container" ref="carousel" id="carousel-wrapper">
            <div v-show="know.vote_average > 8" v-for="(know,index) in knowfor" :key="index" class="col list">
              <div>
                <img class="image" :src="this.API_IMG_URL + know.poster_path" alt="">
                <router-link class="LinkItem" v-if="know.media_type === 'movie'" :to="'/MovieDetail/'+ know.id">
                  <p>{{ know.title }}</p>
                </router-link>
                <router-link class="LinkItem" v-if="know.media_type === 'tv'" :to="'/TvDetail/'+ know.id">
                  <p>{{ know.name }}</p>
                </router-link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Profil",
  props: ['socialmedia', 'person', 'knowfor', 'age', 'deadage'],
}
</script>

<style scoped>
.LinkItem {
  text-decoration: none;
}

.image {
  width: 100%;
  height: 300px;
  border-top-left-radius: 8px 8px;
  border-top-right-radius: 8px 8px;

}

.list {
  width: 150px;
  height: 350px;
  display: inline-block;
  flex: 0 0 auto;
  margin-right: 25px
}

.blur {
  max-width: 850px;
  overflow-y: hidden;
  white-space: nowrap;
}

.person-know-for {
  margin-top: 30px;
  width: 100%;
}

.title {
  font-weight: 700;
  color: #000;
}

.out-text {
  position: relative;
  top: 0;
  left: 0;
}

.inline-text {
  line-height: 1.4em;
  max-height: none;
  overflow: hidden;
  text-align: start;
}

.person-biography {
  margin-top: 30px;
  width: 100%;
}

.person-information {
  padding-left: 25px;
}

.person-know-ul {
  margin: 0;
  padding: 0
}

.person-know {
  width: 100%;
  margin-bottom: 0;
  display: inline-flex;
  align-content: center;
  align-items: center;
}

.person {
  width: 300px;
  height: max-content;
}

.posterImg-profil {
  display: block;
  min-width: 300px;
  width: 300px;
  height: 450px;
  position: relative;
  top: 0;
  left: 0;
}

.personImage {
  display: block;
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  border-width: 0;
  outline: none;
  border-radius: 8px;
}

.content {
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>