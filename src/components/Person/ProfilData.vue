<template>
<div>
  <Profil :person="person" :knowfor="knowfor" :age="age" :deadage="deadage" :socialmedia="socialmedia"/>
</div>
</template>

<script>
import axios from "axios";
import Profil from "./Profil.vue";
export default {
  name: "ProfilData",
  components : {
    Profil
  },

  data() {
    return {
      person: '',
      knowfor: '',
      age: '',
      deadage: '',
      socialmedia: '',
    }
  },
  async mounted() {
    axios
        .get(this.API + 'person/' + this.$route.params.id + '?' + this.API_KEY + '&language=en-US')
        .then((response) => {
          this.person = response.data
          this.age = 2023 - this.person.birthday.slice(0, 4)
          this.deadage = this.person.deathday.slice(0, 4) - this.person.birthday.slice(0, 4)
        })
    axios
        .get(this.API + 'person/' + this.$route.params.id + '/combined_credits?' + this.API_KEY + '&language=en-US')
        .then((response) => {
          this.knowfor = response.data.cast
        })
    axios
        .get(this.API + 'person/' + this.$route.params.id + '/external_ids?' + this.API_KEY + '&language=en-US')
        .then((response) => {
          this.socialmedia = response.data
        })
  },
}
</script>

<style scoped>

</style>