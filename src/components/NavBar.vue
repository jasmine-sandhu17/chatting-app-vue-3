<template>
  <v-toolbar
    color="white"
    class="container-shadow pa-2"
  >
    <div class="d-flex justify-space-between align-center w-100">
      <div class="d-flex align-center w-30">
        <v-img
          src="/logo.svg"
          class="ml-2"
          max-width="51px"
        />
        <v-text-field
          v-model="enteredGroupName"
          placeholder="Search"
          variant="solo-filled"
          rounded="8px"
          flat
          class="ml-3 mt-4"
          append-inner-icon="mdi-magnify"
          density="compact"
        />
      </div>
      <v-avatar color="#9C9B9F">
        <h3 class="text-16">
          {{ utilStore.currentUserName }}
        </h3>
      </v-avatar>
    </div>
  </v-toolbar>
</template>
<script setup>
import useDebouncedRef from '../composables/useDebouncedRef'
import { VToolbar, VTextField } from 'vuetify/components';
import { useUserStore } from '../store/modules/user';
import { watchEffect } from 'vue';
const utilStore = useUserStore();
const enteredGroupName = useDebouncedRef('', 300);
watchEffect(()=>{
  if (enteredGroupName.value) {
    utilStore.filteredChatGroups =  utilStore.chatGroups.filter((chatGroup)=>chatGroup.name.startsWith(enteredGroupName.value.toLowerCase()))
  }else{
    utilStore.filteredChatGroups = []
  }
})
</script>
<style>
.v-toolbar__content,
.v-toolbar__extension {
    padding: 4px 16px !important;
}
.w-30 {
    width: 30%;
}
</style>
