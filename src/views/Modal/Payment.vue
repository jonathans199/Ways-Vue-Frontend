<template>
  <div>
    <b-modal ref="myModalRef" hide-footer  >
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>

      <b-form class="mt-5"  >
      <b-form-group id="exampleInputGroup1"
                    label="Your Name:"
                    label-for="exampleInput1"
                    >
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Phone"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Email:"
                    label-for="exampleInput3">
          <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <hr>
      <b-form-group id="exampleInputGroup3"
                    label="Email:"
                    label-for="exampleInput3">
          <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
    </b-form>


      <b-btn class="mt-3" variant="success" block @click="hideModal">PAY $16 USD</b-btn>
    </b-modal>
  </div>
</template>

<script>
import { serverBus } from '@/main'

export default {
  
  data(){
    return{
      form:{}
    }
  },

  created(){
    serverBus.$on('openPayment', () => {
      this.showModal()
    })
  },

  mounted(){
    
  },

  methods: {
    showModal () {
      this.$refs.myModalRef.show()
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    }
  }
}
</script>