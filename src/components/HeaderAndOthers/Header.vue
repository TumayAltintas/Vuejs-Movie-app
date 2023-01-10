<template>
  <header>
      <div class="container d-flex">
        <div style="position: absolute; top: 25%">
          <router-link to="/" class="TopA">ANASAYFA</router-link>
          <div style="margin-left: 25px" class="dropdown">
            <a style="color: white" >Movies</a>
            <div class="dropdown-content">
              <router-link class="link-item" to="/Movie/Popular">Popular</router-link>
              <router-link class="link-item" to="/Movie/NowPlaying">Now Playing</router-link>
              <router-link class="link-item" to="/Movie/MovieUpComing">Upcoming</router-link>
              <router-link class="link-item" to="/Movie/">Top Rated</router-link>
            </div>
          </div>
          <div style="margin-left: 25px" class="dropdown">
            <a style="color: white" >Tv Shows</a>
            <div class="dropdown-content">
              <router-link class="link-item" to="/Tv/Popular">Popular</router-link>
              <router-link class="link-item" to="/Tv/AiringToday">Airing Today</router-link>
              <router-link class="link-item" to="/Tv/OnTheAir">On Tv</router-link>
              <router-link class="link-item" to="/Tv/TopRated">Top Rated</router-link>
            </div>
          </div>
          <div style="margin-left: 25px" class="dropdown">
            <a style="color: white" >People</a>
            <div class="dropdown-content">
              <router-link class="link-item" to="#">Popular People</router-link>
            </div>
          </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
header {
  background-color: #032541;
  width: 100%;
  height: 60px;
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
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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
.link-item{
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
  white-space: nowrap;
  cursor: pointer;
  outline: 0;
}

</style>
