<template>
  <section class="contact__container">
      <div class="col-12 col-md-6">
        <img src="@/assets/img/contact_shoe.jpg" class="img-fluid" alt="">
      </div>
      <div class="col-12 col-md-6 contact_form"> 
        <div class="container row">
          <h1 class="col-12 text-center mb-5">CONTACT US</h1>
          <button class="vv-button col-6">FACEBOOK</button>
          <button class="vv-button col-6">GOOGLE</button>
          <span class="col-12 text-center my-5">or</span>
          <h1 class="col-12 text-center mb-5">STAY IN TOUCH</h1>
          <b-form-group class="col-6 contact__form-group "  label-for="elementsAppend" >
            <b-input-group>
              <b-form-input placeholder="EMAIL"  type="text" ></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group class="col-6 contact__form-group" label-for="elementsAppend" >
            <b-input-group>
              <b-form-input placeholder="NAME"  type="text" ></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group class="col-6 contact__form-group"  label-for="elementsAppend" >
            <b-input-group>
              <b-form-input placeholder="PHONE" type="text" ></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group class="col-6 contact__form-group" label-for="elementsAppend" >
            <b-input-group>
              <b-form-input placeholder="CITY" type="text" ></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group class="col-6 contact__form-group"  label-for="elementsAppend" >
            <b-input-group>
              <b-form-input placeholder="YOUR MESSAGE" type="text" ></b-form-input>
            </b-input-group>
          </b-form-group>
          <div class="col-6 contact__form-group contact__form-submit" label-for="elementsAppend" >
            <button class="contact__form-button">
              <span style="flex-grow: 5;">SUBMIT</span>
              <span class="submit-arrow" style="flex-grow: 1;"><i class="fa fa-arrow-right" /></span>
            </button>
          </div>
          <h3 class="col-12 text-center mt-5">INFO@waysfl.COM / MIAMI </h3>
        </div>
      </div>
  </section>
</template>

<style>
  .submit-arrow {
    border-left: 0.5px solid black
  }
  .contact__form-button {
    flex: 1;
    display: flex;
    color: white;
    background-color: #70555f;
    border: 1px solid #70555f;
    cursor: pointer;
  }
  .contact__form-submit {
    display: flex;
    justify-content: center;
  }

  .contact__form-group {
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 0px
  }
  .contact_form input {
    border-radius: 0px;
    height: 45px;
    border: 0.1px solid black;
    background-color: transparent
  }
  .contact_form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contact__container {
    margin-bottom: 0px;
    background-color: #ECECEC;
    display: flex;
    flex-direction: row
  }
</style>


<script>
export default {
  name:'Contact',

  data(){
    return {
      form: {}
    }
  }
}
</script>
