<template>
  <v-row class="d-flex align-center mt-10 chart-groups-hover">
    <v-col
      cols="8"
      class="d-flex align-center"
    >
      <v-avatar
        color="#9C9B9F"
        class="rounder-border"
        size="55"
      >
        <h3 class="text-16">
          CO
        </h3>
      </v-avatar>
      
      <h2 class="text-16 ml-4">
        Coding Pals
      </h2>
    </v-col>
    <v-col
      cols="4"
      class="pa-0"
    >
      <p class="date">
        Created 4Feb2022
      </p>
    </v-col>
  </v-row>
</template>
<script setup>
import { VAvatar } from 'vuetify/components';

</script>
<style scoped>
.rounder-border{
  border-radius: 8px !important;
}

.chart-groups-hover:hover {
    background-color: #ECEEF3;
}
</style>
