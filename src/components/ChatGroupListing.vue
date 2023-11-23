<template>
  <v-row
    v-if="groupProps"
    class="d-flex align-center mt-10 chart-groups-hover"
  >
    <v-col
      cols="8"
      class="d-flex align-center"
    >
      <v-avatar
        color="#9C9B9F"
        class="rounder-border"
        size="55"
      >
        <h3 class="text-16 text-uppercase">
          {{ groupInitials }}
        </h3>
      </v-avatar>
      
      <h2 class="text-16 ml-4 text-capitalize">
        {{ groupProps.details?.name }}
      </h2>
    </v-col>
    <v-col
      cols="4"
      class="pa-0"
    >
      <p class="date">
        Created {{ groupProps.details.createdAt }}
      </p>
    </v-col>
  </v-row>
</template>
<script setup>
import { computed } from 'vue'
  import { VAvatar } from 'vuetify/components';
  const groupProps = defineProps({
    details: {type: Object, default: null},
  })
  const groupInitials = computed(() => {
    if (groupProps.details?.name?.length > 2) {
    return  groupProps.details.name.slice(0, 2)
    } else {
      return groupProps.details.name
    }
})
</script>
<style scoped>
.rounder-border{
  border-radius: 8px !important;
}

.chart-groups-hover:hover {
    background-color: #ECEEF3;
}
</style>
