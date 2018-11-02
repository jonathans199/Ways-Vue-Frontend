<template>
  <div>
    <div class="contact-bar">
      <span>CONTACT US / 1800 - WAYS 123 </span>
      <a href="/.."> INFO@WAYSFL.COM </a>
    </div>
    <nav class="navbar__custom">
      <div class="menu">
          <a href="/"><img class="header__logo" alt="Ways Logo" src="@/assets/img/ways-logo.png"></a>
          <div class="menu-container">
            <a href="/">BOOK A RIDE</a>
            <a href="/">SERVICES</a>
            <a href="/">MY TRIPS</a>
            <a href="/">CONTACT</a>
            <a href="/">ABOUT US</a>
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
      items:[]
    }
  },

  created(){
    this.updateCart()
    serverBus.$on('updateHeaderCart', () => {
      this.updateCart()
    })
  },

  methods:{
    
    updateCart(){
      this.items = []
      let cartProducts = JSON.parse(config.getLocalCart())
          cartProducts.map((product,index) => {
            this.fetchProducts(product)
          })
    },

    fetchProducts(product){
      axios
      .get(config.defaultURL + config.storeUUID + '/client/products/' + product.uuid)
      .then((response) => {
        let item = response.data
        if(item.images.length ==  0) {
          item['images'] = [{
            thumb: '/img/default.jpg'
          }]
        }
        this.items.push({
          name:item.name,
          qty:product.qty,
          images:item.images
        })
        this.count = this.items.length
      })
      .catch(function(error){
        console.log(error)
      })

    },
    
    openNav() {
      document.getElementById("myNav").style.height = "100%"
    },

    closeNav() {
      document.getElementById("myNav").style.height = "0%"
    },

    // scroll(id){
    //   let data = async() => {
    //     await helper.goToByScroll(id)
    //     await this.closeNav()
    //   }
    //   data()
    // }
  }
}
</script>
