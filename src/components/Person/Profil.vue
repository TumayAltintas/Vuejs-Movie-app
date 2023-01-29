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
        <div>
          <section>
            <div class="social-media">

            </div>
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
              <p>
                <strong>
                  <bdi>Gender</bdi>
                </strong>
                <br>
                {{ person.gender }}
              </p>
              <p>
                <strong>
                  <bdi>Birthday</bdi>
                </strong>
                <br>
                {{ person.birthday }} ({{age -1 }} years old)
                <br>
                <strong v-if="person.deathday !=null">
                  <bdi>Deathday</bdi>
                </strong>
                <br>
                {{person.deathday}}
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
      </div>
      <div class="person-information">
        <section>
          <h2 class="title"><a>{{ person.name }}</a></h2>
        </section>
        <section class="person-biography">
          <h3>Biography</h3>
          <div class="out-text">
            <div class="inline-text">
              <p>{{person.biography}}</p>
            </div>
          </div>
        </section>
        <section class="person-know-for container"  >
        <h3>Known For</h3>
          <div style="overflow-y: hidden; width: 100%">
            <div class="row">
              <ul class="col know-img-d" v-for="(know,index) in knowfor" :key="index" v-show="know.vote_average > 8">

                  <div class="know-img-d" v-if="know.media_type === 'movie'">
                    <img class="know-img" :src="this.API_IMG_URL + know.poster_path" alt="">
                    <p>{{know.title}}</p>
                  </div>
                  <div class="know-img-d" v-if="know.media_type === 'tv'">
                    <img class="know-img" :src="this.API_IMG_URL + know.poster_path" alt="">
                    <p>{{know.name}}</p>
                  </div>

              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";

export default {
  name: "Profil",
  data() {
    return {
      person: '',
      knowfor : '',
      age : ''
    }
  },
  async mounted() {

    axios
        .get(this.API + 'person/' + this.$route.params.id + '?' + this.API_KEY + '&language=en-US')
        .then((response) => {
          this.person = response.data
          this.age = 2023 - this.person.birthday.slice(0,4)

        })
    axios
        .get(this.API + 'person/'  + this.$route.params.id + '/combined_credits?' + this.API_KEY + '&language=en-US')
        .then((response) => {
          this.knowfor = response.data.cast
          console.log(this.knowfor)
        })

  },

}
</script>

<style scoped>

.know-img-d{
  width: 130px;
  height: 195px;
}
.know-img{
  width: 100%;
  height: 100%;
  border-radius: 8px;

}
.person-know-for{
  margin-top: 30px;
  width: 100%;
}
.title{
  font-weight: 700;
  color: #000;
}
.out-text{
  position: relative;
  top: 0;
  left: 0;
}
.inline-text{
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

.social-media {
  width: 100%;
  background-color: black;
  height: 50px;
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