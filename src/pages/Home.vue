<template>
<div class="">
  <link rel="stylesheet" href="static/css/home.css">
  <div class="slider col-sm-12 no-padding">
    <swiper :options="swiperOption">
      <swiper-slide><img src="static/img/bild.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="static/img/bild.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="static/img/bild.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="static/img/bild.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="static/img/bild.jpg" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
  <div class="clearfix">

  </div>

  <div class="quote col-sm-12 no-padding">
    <h1>درخواست سفارش</h1>
    <div class="container box-quote">
      <form>
        <div class="box-1">
          <div class="col-sm-6 col-xs-12 col-md-4 order-three box1-1">
            <label for="">نوع حمل و نقل</label>
            <select class="" name="">
              <option value=""></option>
            <option value="">زابل</option>
            <option value="">زاهدان</option>
            <option value="">نکا</option>
            <option value="">بابل</option>
          </select>
          </div>
          <div class="col-sm-6 col-md-4 col-xs-12 order-two box1-1">
            <label for="">شهر مقصد</label>
            <select class="" name="">
              <option value=""></option>
            <option value="">زابل</option>
            <option value="">زاهدان</option>
            <option value="">نکا</option>
            <option value="">بابل</option>
          </select>
          </div>
          <div class="col-sm-6 col-md-4 col-xs-12 order-one box1-1">
            <label for="">شهر مبدا</label>
            <select class="" name="">
              <option value=""></option>
            <option value="">زابل</option>
            <option value="">زاهدان</option>
            <option value="">نکا</option>
            <option value="">بابل</option>
          </select>
          </div>
          <div class="col-sm-6 col-md-4 col-xs-12 order-4 box1-1">
            <label for="">نام</label>
            <input type="email" name="" value="">
          </div>
          <div class="col-sm-6 col-md-4 col-xs-12 order-5 box1-1">
            <label for="">نام خانوادگی</label>
            <input type="email" name="" value="">
          </div>
          <div class="col-sm-6 col-md-4 col-xs-12 order-6 box1-1">
            <label for="">ایمیل</label>
            <input type="email" name="" value="">
          </div>
          <div class="col-sm-6 col-md-4 col-xs-12 order-7 box1-1">
            <label for="">شماره موبایل</label>
            <input type="text" name="" value="">
          </div>
          <div class="col-sm-6 col-md-4 col-xs-12 order-8 box1-2">
            <input type="submit" name="" value="درخواست سفارش">
          </div>
        </div>
      </form>

    </div>
  </div>
  <div class="clearfix"></div>
  <div class="col-sm-12 no-padding services">
    <h1>خدمات ما</h1>
    <div class="container box-services">
      <a href="#" class="service-1 col-xs-6 col-md-3">
        <div class=" over-box">
          <img src="static/img/service1.jpg" alt="" class="image">
          <div class="overlay">
            <div class="text">Hello World</div>
          </div>
        </div>
      </a>
      <a href="#" class="service-1 col-xs-6 col-md-3">
        <div class=" over-box">
          <img src="static/img/service2.jpg" alt="" class="image">
          <div class="overlay">
            <div class="text">Hello World</div>
          </div>
        </div>
      </a>
      <a href="#" class="service-1 col-xs-6 col-md-3">
        <div class=" over-box">
          <img src="static/img/service3.jpg" alt="" class="image">
          <div class="overlay">
            <div class="text">Hello World</div>
          </div>
        </div>
      </a>
      <a href="#" class="service-1 col-xs-6 col-md-3">
        <div class=" over-box">
          <img src="static/img/service4.jpg" alt="" class="image">
          <div class="overlay">
            <div class="text">Hello World</div>
          </div>
        </div>
      </a>
    </div>
  </div>
  <div class="clearfix"></div>
  <div class="col-sm-12 no-padding about">
    <h1>درباره ی ما</h1>
    <div class="container about-box">
      <div class="col-md-3 col-sm-3">

      </div>
      <div class="col-md-6 col-sm-6">
        <ul class="tabs">
          <li>
            <input type="radio" checked name="tabs" id="tab1">
            <label for="tab1">کار ما</label>
            <div id="tab-content1" class="tab-content animated fadeIn">
              نان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال
            </div>
          </li>
          <li>
            <input type="radio" name="tabs" id="tab2">
            <label for="tab2">پسیسب</label>
            <div id="tab-content2" class="tab-content animated fadeIn">
              ی طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
              دستاو
            </div>
          </li>
          <li>
            <input type="radio" name="tabs" id="tab3">
            <label for="tab3">سیبسی</label>
            <div id="tab-content3" class="tab-content animated fadeIn">
              راحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت
            </div>
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <div class="clearfix"></div>
      <div class="col-md-3 col-sm-3">
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="col-sm-12 read-more">
      <a href="#">بیشتر بدانیم</a>
    </div>
  </div>
  <div class="clearfix"></div>
  <div class="col-sm-12 no-padding statistics">
    <div class="col-sm-6 no-padding">
      <div class="col-xs-6 no-padding">
        <div class="statis-box">
        <div class="iCountUp">
          <i-count-up
            :start="0"
            :end="12"
            :decimals="0"
            :duration="2.5"
            :options="options"
          ></i-count-up>
          <h4>بای بای</h4>
        </div>
      </div>
      </div>
      <div class="col-xs-6 no-padding">
        <div class="statis-box">
        <div class="iCountUp">
          <i-count-up
            :start="0"
            :end="10"
            :decimals="0"
            :duration="2.5"
            :options="options"
          ></i-count-up>
          <h4>خدافز</h4>
        </div>
        </div>
      </div>
      <div class="col-xs-6 no-padding">
        <div class="statis-box">
        <div class="iCountUp">
          <i-count-up
            :start="0"
            :end="98"
            :decimals="0"
            :duration="2.5"
            :options="options"
          ></i-count-up>
          <h4>خوبی</h4>
        </div>
        </div>
      </div>
      <div class="col-xs-6 no-padding">
        <div class="statis-box">
        <div class="iCountUp">
          <i-count-up
            :start="0"
            :end="23"
            :decimals="0"
            :duration="2.5"
            :options="options"
          ></i-count-up>
          <h4>سلام</h4>
        </div>
      </div>
      </div>
    </div>
    <div class="col-sm-6 img-box-sta no-padding">
      <img src="static/img/sta.jpg" alt="">
    </div>
  </div>
    <div class="clearfix"></div>
</div>
</template>

<script>
import ICountUp from 'vue-countup-v2'
export default {
  components: {
    ICountUp
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true
      },
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: '',
        numerals: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
      }
    }
  }
  // methods: {
  //   callback: function (ins) {
  //     ins.update(ins.endVal + 100)
  //   }
  // }
}
</script>

<style lang="css">
</style>
