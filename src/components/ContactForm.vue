<template>
  <form id="formContainer" @submit.prevent="submitData">
    <div>
      <label>Form:</label>
    </div>
    <BaseInput id="nameInput" v-model="inputs.name" label="Name: " type="text"/>
    <BaseInput id="emailInput" v-model="inputs.email" label="Email" type="text"/>
    <BaseInput id="messageInput" v-model="inputs.message" label="Message" type="text"/>

    <div>
      <button id="submitButton" @click="validateEmail" :disabled="isDisabled" type="submit">Submit</button>
      <div id="resultDiv">{{post_result}}</div>
    </div>


  </form>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import axios from "axios";
export default {
  name: "ContactForm",
  components: {BaseInput},

  data() {
    return {
      inputs: {
        name: "",
        email: "",
        message: "",
      },
      post_result: "",
      email_result: "",
    }
  },
  methods: {
    submitData() {
      this.$store.commit("SET_NAME",this.inputs.name);
      this.$store.commit("SET_EMAIL",this.inputs.email);
      axios.post(
          'https://my-json-server.typicode.com/marshy/db/form',
          this.inputs
      )
          .then(
              this.post_result = "Success!",
              this.inputs.name = this.$store.state.name,
              this.inputs.email = this.$store.state.email,
              this.inputs.message = ""
          )
          .catch(error =>{
            this.post_result = error
          })
    },
    validateEmail(){
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!regex.test(String(this.inputs.email).toLowerCase())) {
        this.email_result = 'Please enter a valid email address'
      }
      else{
        this.submitData()
        this.email_result = ""
        return true
      }
    }
  },
  computed: {
    isDisabled() {
      return !(this.inputs.name && this.inputs.email && this.inputs.message);
    }
  },
  created(){
    this.inputs.name = this.$store.state.name;
    this.inputs.email = this.$store.state.email;
  }
}
</script>

<style scoped>

#formContainer{
  background-color: pink;
  font-palette: black;
}
</style>