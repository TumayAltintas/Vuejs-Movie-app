<template>
  <header>
      <div class="container d-flex">
        <div class="" style="position: absolute; top: 25%">
          <router-link to="/" class="TopA">HOME</router-link>
          <div style="margin-left: 25px" class="dropdown">
            <a style="color: white;cursor: pointer;position: relative" >Movies</a>
            <div class="dropdown-content">
              <router-link class="LinkItem" :to="'/Movie/' + 'popular' ">Popular</router-link>
              <router-link class="LinkItem" :to="'/Movie/' + 'now_playing'">Now Playing</router-link>
              <router-link class="LinkItem" :to="'/Movie/' + 'top_rated'">Top Rated</router-link>
              <router-link class="LinkItem" :to="'/Movie/' + 'upcoming'">Upcoming</router-link>
            </div>
          </div>
          <div style="margin-left: 25px" class="dropdown">
            <a style="color: white;cursor: pointer;" >Tv Shows</a>
            <div class="dropdown-content">
              <router-link class="LinkItem" :to="'/Tv/' + 'popular'">Popular</router-link>
              <router-link class="LinkItem" :to="'/Tv/' + 'airing_today'">Airing Today</router-link>
              <router-link class="LinkItem" :to="'/Tv/' + 'on_the_air'">On The air</router-link>
              <router-link class="LinkItem" :to="'/Tv/' + 'top_rated'">Top Rated</router-link>
            </div>
          </div>
          <div style="margin-left: 25px" class="dropdown">
            <a style="color: white;cursor: pointer;" >People</a>
            <div class="dropdown-content">
              <router-link class="LinkItem" to="/Person/Popular">Popular People</router-link>
            </div>
          </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  // methods: {
  //   onLogout() {
  //     this.$store.commit("logoutUser");
  //     this.$router.push({name: "home"});
  //   }
  // },
}
</script>

<style scoped>
/*.logout {*/
/*  position: absolute;*/
/*  right: 0;*/
/*  margin-right: 20px;*/
/*}*/
header {
  background-color: #032541;
  width: 100%;
  height: 64px;
  position: relative
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
  width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  padding: 12px 16px;
  background-color: white;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 0 0 0.25rem 0.25rem;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.LinkItem{
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  color: black;
  padding: 0.5rem 0.5rem;
  outline: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
}
.TopA{
  color: white;
  white-space: nowrap;
  cursor: pointer;
  outline: 0;
  text-decoration: none;
}

</style>
<!--<img @click="onLogout" class="d-flex logout" src="../photo/icons8-logout-rounded-50.png">-->
