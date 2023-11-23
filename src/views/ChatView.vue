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
          <v-icon
            color="#6C69FF"
            size="32px"
            @click="openCreateChatModal = true"
          >
            mdi-plus-box
          </v-icon>
        </div>
        <ChatGroupListing />
      </v-card>
    </v-col>
    <GroupChat />
    <NewChatGroup />
  </v-row>
</template>
<script setup>
import { VIcon} from 'vuetify/components';
import { ref } from 'vue'
import ChatGroupListing from '../components/ChatGroupListing.vue'
import GroupChat from '../components/GroupChat.vue'
import NewChatGroup from '../components/NewChatGroup.vue'

const openCreateChatModal = ref(false);
</script>
