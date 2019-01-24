<template>
  <div>
    <Header/>
    <div class="hero">
    </div>
    
    <section class="about">
      <div class="about__container container">
        <h1>BOOK A RIDE</h1>
        <br/>
        <h1>Fort Lauderdale Airport to Port Everglades/Ft. Lauderdale Hotels/City Limits</h1>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">PAX</th>
              <th scope="col">1 - 6</th>
              <th scope="col">7 - 10</th>
              <th scope="col">11 - 14</th>
              <th scope="col">15 - 21</th>
              <th scope="col">22 - 33</th>
              <th scope="col">34 - 45</th>
              <th scope="col">46 - 55</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Price</th>
              <td>$65</td>
              <td>$100</td>
              <td>$150</td>
              <td>$230</td>
              <td>$250</td>
              <td>$390</td>
              <td>$500</td>
            </tr>
            
          </tbody>
          
        </table>
        <p>Private shuttles/Nonstop To reserve this service, please click on the BOOK NOW button or call (1800- 529-6061) Yes, pick up at private residences are available. Prices listed is per group. Meet and Greet available $40 additional</p>


        <br/>
        <h1>Fort Lauderdale Airport to Port Everglades/Ft. Lauderdale Hotels/City Limits</h1>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">PAX</th>
              <th scope="col">1 - 6</th>
              <th scope="col">7 - 10</th>
              <th scope="col">11 - 14</th>
              <th scope="col">15 - 21</th>
              <th scope="col">22 - 33</th>
              <th scope="col">34 - 45</th>
              <th scope="col">46 - 55</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Price</th>
              <td>$65</td>
              <td>$100</td>
              <td>$150</td>
              <td>$230</td>
              <td>$250</td>
              <td>$390</td>
              <td>$500</td>
            </tr>
            
          </tbody>
          
        </table>
        <p>Private shuttles/Nonstop To reserve this service, please click on the BOOK NOW button or call (1800- 529-6061) Yes, pick up at private residences are available. Prices listed is per group. Meet and Greet available $40 additional</p>


        </br>

        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip">
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck">
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>







      

        
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


<style scoped>
  .hero {
    padding: 6% 0;
  }

  .about {
    background-image: url('../assets/img/ways-bg.jpg');
    background-repeat: no-repeat;
    background-color: black;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    color: white;

  }

  table {
    background-color: #ffc107;
    color: black;
    text-align: center;
  }

  table th {
    font-size: 25px;
    margin: 10px;
  }

  table td {
    font-weight: 600;
    font-size: 20px;
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
  name: 'Points',
  components: {
    Footer,
    Header,
  },
}

</script>
