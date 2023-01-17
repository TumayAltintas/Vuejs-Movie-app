<section :movie="MoviesDetails" class="container d-flex">
<div>
  <img class="ImgAllof" :src="IMG_URL + MoviesDetails.poster_path">
</div>
<div class="MoviesDetails">
  <h3>{{ MoviesDetails.title }} ({{ MoviesDetails.release_date }})</h3>
</div>
<section class="d-flex" style="position: absolute; left: 37%;margin-top: 45px;">
  <div v-for="genre in MoviesDetails.genres">
    <span class="genres" style="margin-left: 1.5rem">{{ genre.name }}</span>
  </div>
</section>
<section class="Overview">
  <div>
    <h3 style="color: darkblue">Overview</h3>
  </div>
  <div class="Overview">
    <p class="Overview">
      {{ MoviesDetails.overview }}
    </p>
  </div>
</section>