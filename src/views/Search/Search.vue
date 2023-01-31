<template>
  <div>
    <Top-Header/>
<!--    <div>-->
<!--      <input v-model="searchText" placeholder="Search for a movie, tv show, person......">-->
<!--      <button @click="goToSearchPage">Search</button>-->
<!--    </div>-->
    <SearchData/>
  </div>
</template>

<script>
import SearchData from "../../components/Search/SearchData.vue";

export default {
  name: "search",
  components: {SearchData},
  data() {
    return {
      searchText: ""
    }
  },
  methods: {
    goToSearchPage() {
      this.$router.push({name: "search", params: {query: this.searchText}});
      window.location.reload();
    },

  }
}
</script>

<style scoped>

</style>