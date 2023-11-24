<template>
  <v-app>
    <v-main>
      <v-container
        fluid
        class="pa-0 d-flex flex-column wrapper"
      >
        <Navbar v-if="utilStore.isAuthenticated" />
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { VApp, VMain, VContainer } from 'vuetify/components';
import { RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'
import { useUserStore } from './store/modules/user';
const utilStore = useUserStore();
utilStore.isAuthenticated = localStorage.getItem('token') !== null ? true : false
utilStore.currentUserName = localStorage.getItem('currentUserName') ?? null
</script>
<style>
.wrapper {
  height: 100% !important;
}
</style>
