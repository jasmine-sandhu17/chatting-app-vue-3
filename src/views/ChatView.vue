<template>
  <v-row class="ma-0">
    <v-col
      cols="4"
      class="pa-0"
    >
      <v-card
        height="100%"
        class="px-8 py-15 container-shadow"
      >
        <div class="d-flex align-center justify-space-between">
          <h1 class="sub-heading">
            Chats
          </h1>
          <NewChatGroup />
        </div>
        <div v-if="!utilStore.noMatchingGroup">
          <ChatGroupListing
            v-for="(chatGroup, index) in chatGroups"
            :key="index"
            :details="chatGroup"
            :selected-chat="utilStore.selectedChat"
            @click="utilStore.selectedChat = chatGroup.name"
          />
        </div>
        <h1 class="mt-15 text-center primary-text">
          No Group Found, try searching for another one
        </h1>
      </v-card>
    </v-col>
    <GroupChat />
  </v-row>
</template>
<script setup>
import { ref, watchEffect } from 'vue'
import { useUserStore } from '../store/modules/user';

import ChatGroupListing from '../components/ChatGroupListing.vue'
import GroupChat from '../components/GroupChat.vue'
import NewChatGroup from '../components/NewChatGroup.vue'

const utilStore = useUserStore();
const chatGroups = ref([])
watchEffect(()=>{
  if (utilStore.selectedChat) {
    return utilStore.filterChatGroupData()
  } else{
    utilStore.selectedChat = utilStore.chatGroups[0].name;
    return utilStore.filterChatGroupData();
  }
})
watchEffect(()=>{
  if (utilStore.filteredChatGroups.length) {
    chatGroups.value = utilStore.filteredChatGroups
  } else {
    chatGroups.value = utilStore.chatGroups
  }
})
</script>
<style scoped>
.primary-text {
  color: #6C69FF;
}
</style>
