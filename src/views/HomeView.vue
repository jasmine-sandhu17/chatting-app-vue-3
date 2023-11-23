<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
      class="pa-0"
    >
      <v-card
        height="100%"
        class="px-8 py-15 login-content"
      >
        <div class="d-flex flex-column align-center">
          <v-img
            src="/logo.svg"
            height="205px"
            width="216px"
            class="mb-10"
          />
          <h1 class="main-heading mb-2">
            Let’s Connect
          </h1>
          <h2 class="sub-heading mb-4">
            One click away from your Circle!!
          </h2>
          <p class="caption text-center">
            Nisi nunc et mi egestas nibh eget. Est cras suspendisse id erat elit felis, eu. Sollicitudin ullamcorper massa dictum enim id malesuada orci nibh pulvinar. Sed at feugiat arcu lorem et porttitor. Scelerisque amet orci congue dignissim.
          </p>
        </div>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      md="6"
      class="secondary-bg d-flex align-center justify-center"
    >
      <v-card
        class="pa-6"
        width="460px"
        flat
        rounded="8px"
      >
        <v-form @submit.prevent="generateAuth">
          <h2 class="sub-heading mb-10">
            Log in
          </h2>
          <v-text-field
            v-model="email"
            label="Email"
            variant="outlined"
            rounded="8px"
            :error-messages="emailValidationError"
          />
          <v-btn
            class="text-none font-weight-bold text-16 mt-10"
            color="#6C69FF"
            type="submit"
            block
            size="large"
            :disabled="!email || !isEmailValid"
          >
            Log in
          </v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
 import { VImg, VForm, VTextField, VBtn} from 'vuetify/components';
 import { ref, watchEffect } from 'vue'
 import useDebouncedRef from '../composables/useDebouncedRef'
 
 const email =  useDebouncedRef('', 500)
 const isEmailValid = ref(false)
 const emailValidationError = ref('')


watchEffect(()=>{
  const emailRegx =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (email.value && email.value.match(emailRegx) === null) {
    isEmailValid.value = false
    return emailValidationError.value = 'Please enter a valid Email'
  } else {
    isEmailValid.value = true
    return emailValidationError.value = ''
  } 
})

 const generateAuth = async()=> {
  console.log('gello');
 }
</script>
<style scoped>
.login-content {
  box-shadow: 2px 4px 36px 0px rgba(10, 5, 255, 0.16) !important;
}
.main-heading{
  color: #393640;
  font-size: 48px;
  font-weight: 700;
}
.sub-heading {
  color: #393640;
  font-size: 32px;
  font-weight: 600;
}
.caption {
  color:  #393640;
  letter-spacing: -0.224px;
}
.text-16 {
  font-size: 16px;
}
</style>
