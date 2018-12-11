<template>
  <div>
    <b-modal ref="myModalRef" hide-footer  >
      fewfewef
      <b-btn class="mt-3" variant="success" block @click="hideModal">PAY $16 USD</b-btn>
    </b-modal>

    <button @click="showModal">testing</button>
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
    
    console.log(this.$refs.myModalRef)
  },

  methods: {
    showModal() {
      console.log('clcick')
      this.$refs.myModalRef.show()
    },

    hideModal() {
      this.$refs.myModalRef.hide()
    }
  }
}
</script>