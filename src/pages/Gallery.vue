<template lang="html">
<div class="">
  <div v-if="loading" >
   Loading...
</div>
<div class="gallery col-sm-12 no-padding" v-else  v-cloak>
  <link rel="stylesheet" href="static/css/gallery.css">
<div class="parallax">
  <h2>گالری</h2>
</div>
<div class="navbar-header">
<ul>
  <li class="after-li"><router-link to="/">خانه</router-link></li>
  <li>گالری</li>
</ul>
</div>
<div class="col-sm-12 no-padding ">
<h2>پروژه های ما</h2>
<div class="container">
  <div class="col-md-4 col-sm-6 col-xs-12 img-boxes">
    <lightbox src="static/img/grid-gallery-1-370x320.jpg" album="a">
     <div class=" over-box">
         <img src="static/img/grid-gallery-1-370x320.jpg" class="gallery-img">
       <div class="overlay">
         <div class="text">Hello World</div>
       </div>
     </div>
   </lightbox>
   </div>
  <div class="col-md-4 col-sm-6 col-xs-12 img-boxes">
    <lightbox src="static/img/grid-gallery-1-370x320.jpg" album="a">
     <div class=" over-box">
         <img src="static/img/grid-gallery-1-370x320.jpg" class="gallery-img">
       <div class="overlay">
         <div class="text">Hello World</div>
       </div>
     </div>
   </lightbox>
   </div>
  <div class="col-md-4 col-sm-6 col-xs-12 img-boxes">
    <lightbox src="static/img/grid-gallery-1-370x320.jpg" album="a">
     <div class=" over-box">
         <img src="static/img/grid-gallery-1-370x320.jpg" class="gallery-img">
       <div class="overlay">
         <div class="text">Hello World</div>
       </div>
     </div>
   </lightbox>
   </div>
   <div class="col-md-4 col-sm-6 col-xs-12 img-boxes">
     <lightbox src="static/img/grid-gallery-1-370x320.jpg" album="a">
      <div class=" over-box">
          <img src="static/img/grid-gallery-1-370x320.jpg" class="gallery-img">
        <div class="overlay">
          <div class="text">Hello World</div>
        </div>
      </div>
    </lightbox>
    </div>
</div>
</div>
</div>
</div>

</template>

<script>
import VueLightbox from 'vue-lightbox'
export default {
  components: {
    VueLightbox
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  data: {
    loading: true
  }
}
</script>

<style lang="css">
[v-cloak] {
  display: none;
}
</style>
