<template>
  <div>
    <Header/>
   

    <section class="hero">
      <h1>SELECT A SERVICE</h1>
      <div class="hero-top">
        <a href="/..">
          <span class="btn-title1">CRUISE PORT SHUTTLE</span>

        </a>        
      </div>
      <div class="bottom-section">
        <div>
          <a href="/..">PORT OF MIAMI</a>
        </div>
        <div>
          <a href="/..">PORT OF MIAMI</a>
        </div>
        <div>
          <a href="/..">PORT OF MIAMI</a>
        </div>
        <div>
          <a href="/..">PORT OF MIAMI</a>
        </div>
      </div>
    </section>

    <section class="book-a-ride">
      <div class="book-a-ride__city">
      </div>
    </section>
    
    <section class="about">
      <h1>about ways</h1>
    </section>

    <section class="airport-trans">
      <h1>airport transportation</h1>
      <h2>Fort Lauderdale</h2>
    </section>
    
    <section class="miami-ft container">
      <div class="miami">
        <h1>miami</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam a eum sunt? Exercitationem optio voluptatum beatae facilis odio rem laboriosam quam accusantium ut. Eligendi repellat a numquam dolor nulla ratione?</p>
      </div>
      <div class="miami">
         <h1>fort lauderdale</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam a eum sunt? Exercitationem optio voluptatum beatae facilis odio rem laboriosam quam accusantium ut. Eligendi repellat a numquam dolor nulla ratione?</p>
      </div>
    </section>

    <Footer/>
  </div>
</template>

<script>
import axios from 'axios'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import config from '@/config/settings'

export default {
  name: 'Home',
  components: {
    Footer,
    Header,
  },
}

</script>
