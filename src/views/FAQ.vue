<template>
  <div>
    <Header/>
    <section class="hero">
    </section>
    
    <section class="about container">
      <h1>Frequently Asked questions</h1>
      <br/>
      <strong>Where do you pick up and drop off?</strong>
      <p>We pick up from residences, cruise ports, airports, hotels and other businesses.</p>

      <strong>Does Ways sell transportation to residences? </strong>
      <p>Yes, we sell transportation to anywhere in South Florida. </p>

      <strong>What if I need to cancel my reservation?</strong>
      <p>If canceling your reservation within 2 days of first service, no refund will be issued. A
cancellation fee may be applicable if canceling your reservation outside of 2 Days.
Cancellation fee is determined by a number of factors including but not limited to date,
number of passengers, total amount of reservation and type of vehicle. </p>

      <strong>Does Ways provide shared rides? YES AND NO</strong>
      <p>No, only non-stop private shuttles are available for cruise ports, airports, residences,
hotels and businesses. </p>
      <p>Yes, this service is only available for hotel guests staying at the Fort Points by Sheraton
hotel located at 1800 South Federal Highway Fort Lauderdale, FL 33316. Shared ride is
available for guest going to Fort Lauderdale Cruise Port. The cost is $8.00 each way. If you
are a non-guest and want this service, please call for more information. </p>

      <strong>My shuttle was late do I get a refund? </strong>
      <p>No, weather and traffic conditions are situations out of our control. If a shuttle is late, the
driver will contact you before your schedule pick up time to let you know what his/her
estimated time of arrival (ETA) is and the reason why he/she is late.</p>

      <strong>Why is having my cellphone so important? </strong>
      <p>This is how the driver will communicate with you during your shuttle service. If the driver
cannot reach you via cellphone, this may cause delays on your shuttle service. If the driver
cannot contact you after 30 minutes of your schedule pick up time, it is considered a no
show no call and no refund will be given.</p>

    </section>

    <!-- <section class="airport-trans">
      <h1>airport transportation</h1>
      <h2>Fort Lauderdale</h2>
      <p>Proper planning &amp; preparation prevents a poor travel experience.  Use any mobile device or computer and schedule your ride now!</p>
    </section> -->
    
    

    <Footer/>
  </div>
</template>


<style scoped>
  .hero {
    padding: 6% 0;
  }

  .about {
    background-image: none;
  }

  strong {
    font-size: 18px;
  }

  h1 {
    padding-bottom: 30px;
  }

@media (max-width: 1000px){
  .hero {
    padding: 26% 0;
  }
}

</style>



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
