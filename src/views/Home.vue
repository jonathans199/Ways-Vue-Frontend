<template>
  <div>
    <Header/>
   

    <section class="hero">
      <h1 class="hero-title">SELECT A SERVICE</h1>
      <div class="top-btn">
        <a class="top-btn__container" href="/..">
          <div class="top-btn__fourpoints"></div>
          <div class="top-btn__rightside">
            <span class="top-btn__title">CRUISE PORT SHUTTLE</span>
            <span class="top-btn__subtitle">1800 SOUTH FEDERAL HWY <br> FORT LAUDERDALE, FL 33316</span>
          </div>
        </a>        
      </div>
      <div class="bottom-section">
        <a class="bottom-section__btn" href="/..">
          <h1>PORT OF MIAMI</h1>
        </a>
        <a class="bottom-section__btn" href="/..">
          <h1>MIAMI AIRPORT</h1>
        </a>
      </div>
      <div class="bottom-section">
        <a class="bottom-section__btn" href="/..">
          <h1>PORT EVERGLADES</h1>
        </a>
        <a class="bottom-section__btn" href="/..">
          <h1>FT LAUDERDALE AIRPORT</h1>
        </a>
      </div>
    </section>

    <section class="book-a-ride">
      <div class="book-a-ride__city"></div>
      <div class="book-a-ride__content">
        <form class="book-a-ride__form" action="submit">
          <div class="book-a-ride__formlabel">book a ride</div>
          <div class="book-a-ride__formcontent">
            <div class="book-a-ride__formfield">
              <h5>PICK UP</h5>
              <input type="text" placeholder="Pick up address">
            </div>
            <div class="book-a-ride__formfield">
              <h5>DROP OFF</h5>
              <input type="text" placeholder="Pick up address">
            </div>
            <div class="book-a-ride__passangers">
              <h1>passangers</h1>
              <select>
                <option value="volvo">1</option>
                <option value="saab">2</option>
                <option value="mercedes">3</option>
                <option value="audi">4</option>
              </select>
            </div>
            <div class="book-a-ride__oneway">
              <h1>$95 ONE WAY</h1>
              <button>BOOK NOW</button>
            </div>
            <div class="book-a-ride__oneway">
              <h1>$95 ROUND TRIP</h1>
              <button>BOOK NOW</button>
            </div>
            <p class="text-center book-a-ride__lowertext">Ways nonstop shuttle will take you directly to your destination. Different from share ride, you do not share the ride with other passengers. Good for families, friends and large groups.</p>
          </div>
          </form>
        <h1 class="book-a-ride__slogan">WE ARE THE BRIDGE TO YOUR DESTINATION</h1>
      </div>
    </section>
    
    <section class="about container">
      <h1>about ways</h1>
      <p>Ways Shuttle Solutions is a web/mobile application designed for you to book shuttle services. Ways is built to help you experience reliable, flexible and convenient shuttle service to your destination.</p>
      <div class="about-features container">
        <div class="about-features-1">
          <img src="../../src/assets/img/shield.png" alt="">
          <h1>SAFETY FIRST</h1>
          <p>All affiliated ground transportation companies are licensed and insured.  
          <br>Drivers must pass extensive background checks and pass training protocol</p>
        </div>
        <div class="about-features-1">
          <img src="../../src/assets/img/24-hours.png" alt="">
          <h1>AVAILABLE 24/7</h1>
          <p>Pre-arranged private transportation is available 24/7</p>
        </div>
        <div class="about-features-1">
          <img src="../../src/assets/img/acreditations.png" alt="">
          <h1>ACREDITATIONS</h1>
          <p>We are a start-up company, in the process of building trustworthy acreditations.</p>
        </div>
      </div>
    </section>

    <!-- <section class="airport-trans">
      <h1>airport transportation</h1>
      <h2>Fort Lauderdale</h2>
      <p>Proper planning &amp; preparation prevents a poor travel experience.  Use any mobile device or computer and schedule your ride now!</p>
    </section> -->
    
    

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
