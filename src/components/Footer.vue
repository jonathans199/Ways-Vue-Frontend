<template>
  <footer class="footer__container">
        <div class="">
          <img class="footer-logo" src="@/assets/img/ways-logo.png" alt="">
        </div>
        <div class="footer-links">
          <ul>
            <li> <router-link to="/FAQ">FAQ</router-link></li>
            <li><a href="/ways-privacy.pdf" target="_blank">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions.pdf" target="_blank">Terms &amp; Conditions</a></li>
          </ul>
        </div>
        <div class="col-2 d-flex justify-content-center align-items-center">
          <span class="mr-4" v-if="store['facebook']"><a :href="store['facebook']"><i class="fa fa-facebook" /></a></span>
          <a class="sm-links" href="https://facebook.com" target="_blank"><span class="mr-4"><i class="fa fa-facebook-square" /></span></a>
          <a class="sm-links" href="https://instagram.com" target="_blank"><span class="mr-4"><i class="fa fa-instagram" /></span></a>
          <a class="sm-links" href="https://twitter.com" target="_blank"><span><i class="fa fa-twitter-square" /></span></a>
        </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
      loading: false,
      store: {}
    }
  },

  created(){
    this.getLocalData()
  },

  methods: {
    getLocalData(){
      if(localStorage.getItem('store')) this.store = JSON.parse(localStorage.getItem('store'))
    },
  }
}
</script>