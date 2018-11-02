<template>
  <footer class="footer__container">
    <div class="container">
      <div class="row">
        <div class="col-2 d-flex justify-content-center align-items-center">
          <img class="footer-logo" src="@/assets/img/ways-logo.png" alt="">
        </div>
        <div class="col-8">
          <ul>
            <li>ABOUT</li>
            <li>SHOP</li>
            <li>COLLECTIONS</li>
          </ul>
        </div>
        <div class="col-2 d-flex justify-content-center align-items-center">
          <span class="mr-4"><i class="fa fa-facebook-square" /></span>
          <span class="mr-4"><i class="fa fa-instagram" /></span>
          <span><i class="fa fa-twitter-square" /></span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
  .footer__container span{
    font-size: 2.5rem;
  }

  .footer__container{
    background-color: #000;
    color: white;
  }

  .footer__container ul {
    font-size: 15px;
  }

  .footer__container ul li {
    margin-right: 0px;
    margin-left: 40px;
  }
</style>
