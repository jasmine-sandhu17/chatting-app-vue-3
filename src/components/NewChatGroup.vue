<template>
  <v-dialog
    v-model="openCreateChatModal"
    width="500"
    persistent
  >
    <template #activator="{ props: activatorProps }">
      <v-icon
        v-bind="activatorProps"
        color="#6C69FF"
        size="32px"
        @click="openCreateChatModal = true"
      >
        mdi-plus-box
      </v-icon>
    </template>

    <v-card class="text-center pa-6">
      <div class="d-flex align-center mb-4">
        <h1 class="sub-heading text-center w-100">
          Create a Chat
        </h1>
        <v-icon
          color="#393640"
          size="24px"
          @click="openCreateChatModal = false, groupName=''"
        >
          mdi-close
        </v-icon>
      </div>
      <p class="mb-4">
        Chats are where your circle communicates. They’re best when organized around a topic — #Writing, for
        example.
      </p>
      <h2 class="text-16 mb-4">
        Name
      </h2>
      <v-text-field
        v-model="groupName"
        placeholder="# e.g. Writing"
        variant="outlined"
        rounded="8px"
        density="compact"
        @keyup.enter="addNewChatGroup"
      />
      <v-btn
        class="text-none font-weight-bold text-16"
        color="#6C69FF"
        block
        rounded="8px"
        size="large"
        :disabled="groupName.length < 3"
        @click="addNewChatGroup"
      >
        Create
      </v-btn>
    </v-card>
  </v-dialog>
</template>
<script setup>
import {VBtn, VTextField, VIcon } from 'vuetify/components';
import { ref } from 'vue'
import { useUserStore } from '../store/modules/user';
const utilStore = useUserStore();

const openCreateChatModal = ref(false);
const groupName = ref('')
const addNewChatGroup = ()=> {
  utilStore.updateChatGroups(groupName.value.toLowerCase());
  groupName.value = ''
  openCreateChatModal.value = false
}
</script>
