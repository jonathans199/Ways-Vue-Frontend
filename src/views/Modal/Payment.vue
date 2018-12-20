<template>
  <div>
    <b-modal ref="myModalRef" hide-footer class="modal-custom"  >
      <div v-if="step === 1">
        <div class="d-block text-center">
          <h3>YOUR INFORMATION</h3>
        </div>

        <b-form class="mt-5"  >
          <b-form-group id="exampleInputGroup1"
                        label="First and last name"
                        label-for="exampleInput1"
                        >
            <b-form-input id="exampleInput1"
                          type="email"
                          v-model="form.name"
                          required
                          placeholder="">
            </b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup2"
                        label="Cell phone / phone number"
                        label-for="exampleInput2">
            <b-form-input id="exampleInput2"
                          type="text"
                          v-model="form.phone"
                          required
                          placeholder="">
            </b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup3"
                        label="Email:"
                        label-for="exampleInput3">
              <b-form-input id="exampleInput2"
                          type="text"
                          v-model="form.email"
                          required
                          placeholder="">
            </b-form-input>
          </b-form-group>
          <hr>
          <b-form-group id="exampleInputGroup3" label="CARD INFORMATION" label-for="exampleInput3">
              <div class="stripe__container">
                <form action="/charge" method="post" id="payment-form">
                  <div class="">
                    <!-- <input type="number" pattern="[0-9]*"> --> 
                    <div id="card-element" >
                    </div>
                    <div id="card-errors" role="alert"></div>
                  </div>
                  <button  v-if="!loading" class="btn btn-lg btn-block btn-warning mt-5 payment-button" type="submit"   >PAY ${{ride_price}} USD</button>
                  <button v-if="loading" class="btn btn-lg btn-block btn-warning mt-5 payment-button" disabled>Loading <i class="fa fa-spinner fa-spin"/></button>
                </form>
              </div>

          </b-form-group>
        </b-form>

      </div>
      
      <div v-if="step === 2">
        <div class="d-block text-center">
          <h3>Payment Completed <i class="fa fa-success"></i></h3>
        </div>

        <div class="payment__content">
          <img class="payment__content-img" src="/img/check.svg" alt="">
          <h1 class="mt-5">Payment Success</h1>
          <h4 class="mt-1">We have emailed you with a confirmation of your trip</h4>
        </div>
        
        <b-form-group id="exampleInputGroup3" label-for="exampleInput3">
            <button @click="hideModal" class="btn btn-lg btn-block btn-secondary payment-button" type="submit"   >CLOSE</button>
        </b-form-group>

      </div>

    </b-modal>
  </div>
</template>

<style lang="scss" scoped>
 
  .modal-content{
    padding: 5rem;
  }

  .form-group {
    font-size: 14px;
    padding: 1rem 5rem;
  }

  .form-control {
    font-size: 14px;
    padding: 1.5rem;
  }

  .payment__content-img{
    max-width: 50%
  }

  .payment__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 500px;
  }
     
  .StripeElement {
    background-color: white;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid transparent;
    box-shadow: 0 1px 3px 0 #e6ebf1;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
  }

  .StripeElement--focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
  }

  .StripeElement--invalid {
    border-color: #fa755a;
  }

  .StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
  }

  .payment-button{
    // height: 60px;
    // font-size: 26px;
    // font-weight: 600
  }

  #card-element{
    // width: 700px;
  }

  .btn-group {
    display: flex;
    justify-content: space-evenly;;
    flex-wrap: wrap;
    height: 42%;
  }

  .top-btn-selectcruise {
    display: flex;
    width: 35%;
    height: 30px;
    margin-bottom: 2%;
    font-size: 3rem;
    padding: 8rem;
    align-items: center;
    justify-content: center;
    

    background-color: black;
    border: solid #FCBB10 1px;
    border-radius: 11px;

      &:hover {
        border: solid #FCBB10 4px;
      }

  }

</style>

<script>
import { serverBus } from '@/main'
import * as config from '@/config/settings'
import * as axios from 'axios'

export default {
  
  data(){
    return{
      form:{},
      order:{},
      stripeResponse: {},
      loading: false,
      ride_price: 0,
      step: 1
    }
  },

  created(){
    serverBus.$on('openPayment', (ride_price) => {
      this.ride_price = ride_price
      this.createStripe()
      this.showModal()
    })
    
  },

  methods: {
    showModal() {
      this.$refs.myModalRef.show()
    },

    hideModal() {
      this.form = {}
      this.order = {}
      this.loading = false
      this.ride_price = 0
      this.step = 1
      this.$refs.myModalRef.hide()
    },
    
    // 1. submit the whole form and create stripe token
    createStripe(data){
      // Create a Stripe client.
      var stripe = Stripe(config.stripeAPI);

      // Create an instance of Elements.
      var elements = stripe.elements()

      // Custom styling can be passed to options when creating an Element.
      // (Note that this demo uses a wider set of styles than the guide below.)
      var style = {
        base: {
          color: '#000',
          // lineHeight: '50px',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: 'antialiased',
          // fontSize: '26px',
          '::placeholder': {
            color: '#aab7c4'
          }
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a'
        }
      }

      // Create an instance of the card Element.
      var card = elements.create('card', {hidePostalCode: true, style: style})

      // Add an instance of the card Element into the `card-element` <div>.
      card.mount('#card-element')

      // Handle real-time validation errors from the card Element.
      card.addEventListener('change', function(event) {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = '';
        }
      })

      // Handle form submission.
      var form = document.getElementById('payment-form')
      form.addEventListener('submit', (event) => {
        event.preventDefault()
        this.loading = true
        stripe.createToken(card).then((result) => {
          if (result.error) {
            // Inform the user if there was an error.
            this.loading = false
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
            this.snackbar = true
            this.text = result.error.message
          } else {
            this.stripeResponse = result
            this.createUser()
          }
        })
      })
    },

    // 2. create the user on the api
    createUser(){
      axios({
        url: config.defaultURL + '/users',
        method: 'post',
        data: this.form,
        headers: {
          "content-type": "application/json"
        }
      })
      .then((response) => {
        if(response.status === 201){
          let currentRide   = JSON.parse(localStorage.getItem('currentRide'))
          localStorage.setItem('currentUser', JSON.stringify(response.data))
          this.$toasted.show('Customer created!', {
            position:'top-right', 
            duration: 3000,
            type: 'default',
            closeOnSwipe: true
          })
          this.createOrder(currentRide)
        }
      })
      .catch((err) => {
        err.response.data.map((m,index) => {
          this.loading = false
          this.$toasted.show(m, {
            position:'top-right', 
            duration: 5000,
            type: 'default',
            closeOnSwipe: true
          })
        })
      })
    },

    // 3. create the order on the api
    createOrder(ride){
      axios({
        url: config.defaultURL + '/orders',
        method:'post',
        data:{
          ride_id: ride.id,
          passenger_qty: ride.passenger_qty
        },
        headers: {
          "content-type": "application/json"
        }
      })
      .then((response) => {
        if(response.status === 201){
          localStorage.setItem('currentOrder', JSON.stringify(response.data))
          this.$toasted.show('Order created!', {
            position:'top-right', 
            duration: 3000,
            type: 'default',
            closeOnSwipe: true
          })
          this.createPayment()
        }
      })
      .catch((error) => {
        error.response.data.map((m,index) => {
          this.loading = false
          this.$toasted.show(m, {
            position:'top-right', 
            duration: 5000,
            type: 'error',
            closeOnSwipe: true
          })
        })
      })
    },

    // 4. we create a token with stripe api
    createPayment(){
      
      let currentRide  = JSON.parse(localStorage.getItem('currentRide'))
      let order        = JSON.parse(localStorage.getItem('currentOrder'))
      let user         = JSON.parse(localStorage.getItem('currentUser'))
      let stripe_token = this.stripeResponse

      axios({
        url: config.defaultURL + '/orders/' + order.id,
        method:'put',
        data:{
          order: this.order,
          stripe_token: stripe_token.token,
          user: user
        },
        headers: {
          "content-type": "application/json"
        }
      })
      .then((response) => {
        if(response.status === 200){
          this.sendConfirmation()
        }
      })
      .catch((err) => {
        this.loading   = false
      })
    },

    sendConfirmation(){
      let order    = JSON.parse(localStorage.getItem('currentOrder'))
      let customer = JSON.parse(localStorage.getItem('currentUser'))

      axios({
        url: config.defaultURL + '/confirmations',
        method: 'post',
        data:{
          email: customer.email,
          order: order
        }
      })
      .then((response) => {
        if(response.status === 201){
          localStorage.removeItem('currentOrder')
          localStorage.removeItem('currentRide')
          localStorage.removeItem('currentUser')
          this.$toasted.show('Payment Success!', {
            position:'top-right', 
            duration: 5000,
            type: 'success',
            closeOnSwipe: true
          })
          this.loading = false
          this.step = 2
        }
      })
      .catch((err) => {
        this.loading = false
        err.response.data.map((m,index) => {
          this.$toasted.show(m, {
            position:'top-right', 
            duration: 5000,
            type: 'error',
            closeOnSwipe: true
          })
        })
      })
    }
  }
}
</script>