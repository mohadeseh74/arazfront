<template>
<div>
  <nav class="col-sm-12 no-padding desk">
    <div class="col-sm-4 social">
      <ul>
        <li>
          ۰۲۱۶۶۴۱۵۸۹۶
        </li>
        <li>
          <a href="tel:02166415896"><i class="fa fa-phone" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
    <div class="col-sm-4 logo-shape no-padding">
      <div class="logo-holder">
        <a href="#">
          <img src="../static/img/LOGO1.png" class="part-1-logo">
          <img src="../static/img/233.png" class="part-2-logo">
        </a>
      </div>
    </div>
    <div class="col-sm-4">
      <ul class="links">
        <li>
          <router-link to="/">خانه</router-link>
        </li>
        <li>
          <router-link to="/Gallery">گالری</router-link>
        </li>
        <li>
          <router-link to="Service">خدمات</router-link>
        </li>
        <li>
          <router-link to="About">درباره ی ما</router-link>
        </li>
        <li>
          <router-link to="Contact">تماس با ما</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <nav class="bottomMenu col-sm-12 no-padding">
    <div class="col-sm-4 social">
      <ul>
        <li>
          ۰۲۱۶۶۴۱۵۸۹۶
        </li>
        <li>
          <a href="tel:02166415896"><i class="fa fa-phone" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
    <div class="col-sm-4 logo-shape no-padding">
      <div class="logo-holder">
        <a href="#">
        <img src="../static/img/LOGO1.png" class="part-1-logo3">
        </a>
      </div>
    </div>
    <div class="col-sm-4">
      <ul class="links">
        <li>
          <router-link to="/">خانه</router-link>
        </li>
        <li>
          <router-link to="/Gallery">گالری</router-link>
        </li>
        <li>
          <router-link to="Service">خدمات</router-link>
        </li>
        <li>
          <router-link to="About">درباره ی ما</router-link>
        </li>
        <li>
          <router-link to="Contact">تماس با ما</router-link>
        </li>
      </ul>
    </div>
</nav>
<div class="mobile-menu">
  <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open" >
    <nav id="menu">
      <ul class="links">
        <li>
          <router-link to="/">خانه</router-link>
        </li>
        <li>
          <router-link to="/Gallery">گالری</router-link>
        </li>
        <li>
          <router-link to="Service">خدمات</router-link>
        </li>
        <li>
          <router-link to="About">درباره ی ما</router-link>
        </li>
        <li>
          <router-link to="Contact">تماس با ما</router-link>
        </li>
      </ul>
    </nav>
    <main id="panel">
      <header>
        <div class="icon-menu-3">
          <button class="toggle-button"><i><div onclick="myFunction(this)">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div></i>
          </button>
          <img src="../static/img/LOGO (2).png" alt="">
          <i class="fa fa-ellipsis-v icon-3-point" aria-hidden="true"></i>
        </div>
        <div class="social-hide">
          <div class="col-sm-5 social">
            <ul>
              <li>
                <a href="tel:02166415896"><i class="fa fa-phone" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </main>
  </Slideout>
</div>
      <router-view/>
        <div class="clearfix"></div>
      <footer>
        <div class="map-box">
          <gmap-map
             :center="center"
             :zoom="7"
             style="width: 100%; height: 400px"
           >
             <gmap-marker
               :key="index"
               v-for="(m, index) in markers"
               :position="m.position"
               :clickable="true"
               :draggable="true"
               @click="center=m.position"
             ></gmap-marker>
           </gmap-map>
        </div>
          <div class="clearfix"></div>
        <div class="footer col-sm-12 no-padding">
          <div class="col-lg-3 col-sm-12 quick">
            <h3>لینک سریع</h3>
            <ul class="footer-links">
              <li>
                <router-link to="/">خانه</router-link>
              </li>
              <li>
                <router-link to="/Gallery">گالری</router-link>
              </li>
              <li>
                <router-link to="Service">خدمات</router-link>
              </li>
              <li>
                <router-link to="About">درباره ی ما</router-link>
              </li>
              <li>
                <router-link to="Contact">تماس با ما</router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-sm-4 address">
            <h3>آدرس</h3>
            <p>خیابان سرپرست جنوبی طبقه ۵ پلاک ۵</p>
          </div>
          <div class="col-lg-3 col-sm-4 phone">
            <h3>تلفن</h3>
            <p>22330923</p>
            <p>araz@info.com</p>
          </div>
          <div class="col-lg-3 col-sm-4 hours">
            <h3>ساعات کاری</h3>
            <p>شنبه تا چهارشنبه:<span> ۸:۰۰ تا ۲۲:۰۰</span></p>
            <p>پنجشنبه تا جمعه:<span> ۹:۰۰ تا ۲۱:۰۰</span></p>
          </div>

          <div class="col-sm-12 footer-2 no-padding">
            <p>کلیه حقوق این سایت ب محی تعلق دارد</p>
          </div>
        </div>
      </footer>
</div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'
import Slideout from 'vue-slideout'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAoMkfNFRDjjObAb_uQzpbhMQbo5GyDV-Y',
    v: 'v=3'
    // libraries: 'places', //// If you need to use place input
  }
})
export default {
  name: 'app',
  data () {
    return {
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }]
    }
  },
  components: {
    Slideout
  },
  methods: {
    open: function () {
      console.log('slideoutOpen')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
