<template>
  <v-dialog
    v-model="openCreateChatModal"
    width="500"
  >
    <v-card class="text-center pa-6">
      <h1 class="sub-heading mb-4">
        Create a Chat
      </h1>
      <p class="mb-4">
        Chats are where your circle communicates. They’re best when organized around a topic — #Writing, for
        example.
      </p>
      <h2 class="text-16 mb-4">
        Name
      </h2>
      <v-text-field
        v-model="chatGroupName"
        placeholder="# e.g. Writing"
        variant="outlined"
        rounded="8px"
        density="compact"
      />
      <v-btn
        class="text-none font-weight-bold text-16"
        color="#6C69FF"
        block
        rounded="8px"
        size="large"
        @click="openCreateChatModal = false"
      >
        Create
      </v-btn>
    </v-card>
  </v-dialog>
</template>
<script setup>
import {VBtn, VTextField } from 'vuetify/components';
import { ref } from 'vue'
const openCreateChatModal = ref(false);
</script>
