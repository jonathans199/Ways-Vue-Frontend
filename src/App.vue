<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

@import '@/../assets/css/main.scss';

</style>

<script>
import Vue from 'vue'
import Toasted from 'vue-toasted'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Toasted)
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

export default {
  
}

</script>