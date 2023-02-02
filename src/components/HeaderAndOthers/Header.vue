<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon bg-white"></span>
      </button>
      <div class="collapse navbar-collapse container" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
            <router-link to="/" class="TopA nav-link active">HOME</router-link>
          </li>
          <li class="nav-item dropdown dropdown-content">
            <a class="nav-link dropdown-content"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Movies
            </a>
            <ul class="dropdown-menu" style="width: max-content">
              <router-link class="LinkItem" :to="'/Movie/' + 'popular' ">Popular</router-link>
              <router-link class="LinkItem" :to="'/Movie/' + 'now_playing'">Now Playing</router-link>
              <router-link class="LinkItem" :to="'/Movie/' + 'top_rated'">Top Rated</router-link>
              <router-link class="LinkItem" :to="'/Movie/' + 'upcoming'">Upcoming</router-link>
            </ul>
          </li>
          <li class="nav-item dropdown dropdown-content">
            <a class="nav-link dropdown-content" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Tv Shows
            </a>
            <ul class="dropdown-menu" style="width: max-content">
              <router-link class="LinkItem" :to="'/Tv/' + 'popular'">Popular</router-link>
              <router-link class="LinkItem" :to="'/Tv/' + 'airing_today'">Airing Today</router-link>
              <router-link class="LinkItem" :to="'/Tv/' + 'on_the_air'">On The air</router-link>
              <router-link class="LinkItem" :to="'/Tv/' + 'top_rated'">Top Rated</router-link>
            </ul>
          </li>
          <li class="nav-item dropdown dropdown-content">
            <a class="nav-link dropdown-content"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
              People
            </a>
            <ul class="dropdown-menu" style="width: max-content">
              <router-link class="LinkItem" to="/Person/Popular">Popular People</router-link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <li class="nav-item d-flex  align-content-center justify-content-end">
      <a href="https://www.themoviedb.org/" class="flash">Go to MovieDb</a>
    </li>
  </nav>
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
/*
değişim oldu
 */
</script>

<style scoped>
.flash {
  animation: flash 3s infinite;
  cursor: pointer;
  text-decoration: none;
  font-weight: 800;
  color: white;
  position: absolute;
  align-content: center;
  margin: 0;
  padding: 0;
}
a{
  color: white;
}
@keyframes flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

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
.dropdown:hover .dropdown-content {
  display: block;
}

.LinkItem {
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  color: white;
  padding: 0.5rem 0.5rem;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex: 1 1 auto;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
}

.TopA {
  color: white;
  white-space: nowrap;
  cursor: pointer;
  outline: 0;
  text-decoration: none;
}

</style>

