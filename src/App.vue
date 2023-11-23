<template>
  <v-app>
    <v-main>
      <v-container
        fluid
       
        class="pa-0 d-flex flex-column wrapper"
      >
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { VApp, VMain, VContainer } from 'vuetify/components';
import { RouterView } from 'vue-router'
</script>
<style>
@import '/main.css';
.wrapper {
   height: 100% !important;
}
</style>
