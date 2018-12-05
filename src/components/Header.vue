<template>
  <div>
    <div class="contact-bar">
      <a class="contact-bar__links" href="tel:1800-529-6061">1800-529-6061 </a>
      <a class="contact-bar__links" href="mailto:info@waysfl.com"> INFO@WAYSFL.COM </a>
    </div>
    <nav class="navbar__custom">
      <div class="menu">
          <a href="/"><img class="header__logo" alt="Ways Logo" src="../assets/img/ways-logo.png"></a>
          <div class="menu-container">
            <!-- <a href="#" v-scroll-to=" '#services' ">SERVICES</a> -->
            <a href="#" v-scroll-to=" '#book-a-ride' ">BOOK A RIDE</a>
            <router-link to="/faq"> FAQ</router-link>
            <a href="#" v-scroll-to=" '#about-us' ">ABOUT US</a>
          </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from 'axios'
import config from '@/config/settings'
import { serverBus } from '@/main'

export default {
  name:'menu2',

  data(){
    return{
      count: 0,
      items:[],
    }
  }
}
</script>
