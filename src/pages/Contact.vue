<template lang="html">
  <div class="">
      <link rel="stylesheet" href="static/css/contact.css">
  <div class="contact col-sm-12 no-padding">
<div class="parallax">
  <h2>تماس با ما</h2>
</div>
  <div class="navbar-header">
    <ul>
      <li class="after-li"><router-link to="/">خانه</router-link></li>
      <li>تماس با ما</li>
    </ul>
  </div>
  <div class="col-sm-12 no-padding text-ri">
    <div class="col-md-5 contact-inf">
      <h2>اطلاعات تماس</h2>
      <div class="box-inf col-sm-12">
        <div class="col-sm-12 partition">
          <p class="tittle">آدرس</p>
          <p class="content-inf">
            <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
            <a href="#">تهران خیابان جمهوری نبش پست بانک پلاک۱۲</a>
          </p>
        </div>
        <div class="col-sm-12 partition have-border">
          <p class="tittle">تلفن</p>
          <p class="content-inf">
            <span><i class="fa fa-phone" aria-hidden="true"></i></span>
            <a href="#">۰۲۱-۸۸۹۲-۲۱۳</a>
          </p>
        </div>
        <div class="col-sm-12 partition">
          <p class="tittle">شبکه های اجتماعی</p>
          <p class="content-inf">
            <ul class="social-inf">
              <li><a class="fa fa-instagram" aria-hidden="true"></a></li>
              <li><a class="fa fa-telegram" aria-hidden="true"></a></li>
            </ul>
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-7 contact-form">
      <h2>در تماس باشید</h2>
      <div class="col-sm-12 no-padding">
        <form>
          <div class="col-sm-12">
            <div class="col-sm-6 content-pad-r">
              <input type="text" name="" class="inp-inf" placeholder="شماره موبایل">
            </div>
            <div class="col-sm-6 content-pad-l">
              <input type="text" name="" class="inp-inf" placeholder="نام و نام خانوادگی">
            </div>
          </div>
          <div class="clearfix">
          </div>
          <div class="col-sm-12">
            <div class="col-sm-12 tex-pad">
              <textarea name="name" rows="8" cols="80" class="text-inf" placeholder="توضیحات"></textarea>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="col-sm-6 content-pad-r">
              <input type="submit" name="" class="inf-sub" value="ثبت">
            </div>
            <div class="col-sm-6 content-pad-l">
              <input type="text" name="" class="inp-inf top-marg" placeholder="ایمیل">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="css">
</style>
