<template>
  <v-row>
    <v-col
      cols="4"
      class="pa-0"
    >
      <v-card
        height="100%"
        class="px-8 py-15 login-content"
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
        <v-row class="d-flex align-center mt-10 chart-groups-hover">
          <v-col
            cols="8"
            class="d-flex align-center"
          >
            <div class="name-container d-flex align-center justify-center">
              <h3 class="text-16">
                CO
              </h3>
            </div>
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
      </v-card>
    </v-col>
    <v-col
      cols="8"
      class="secondary-bg pa-10"
    >
      <h1 class="sub-heading">
        Scouting
      </h1>
      <div class="d-flex flex-column mt-10 justify-end">
        <div
          v-for="i in 2"
          :key="i"
          class="d-flex mt-10"
        >
          <div class="name-container d-flex align-center justify-center">
            <h3 class="text-16">
              CO
            </h3>
          </div>
          <v-row class="d-flex flex-column">
            <v-col cols="6">
              <div
                class="d-flex flex-column"
              >
                <div
                  v-for="j in 5"
                  :key="j"
                  class="ml-4 no-white-space mb-2"
                >
                  <div class="ma-2">
                    <p class="text-16">
                      Neque sagittis at ut consequat dolor odio penatibus lacus vel.  Neque sagittis at ut consequat dolor odio penatibus lacus vel.
                    </p> 
                    <p class="text-right mt-2 date">
                      12:34AM
                    </p>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="mt-10 d-flex align-start">
        <v-textarea
          v-model="message"
          rows="1"
          density="compact"
          bg-color="white"
          row-height="15"
          no-resize
          auto-grow
          variant="outlined"
          placeholder="Write a message..."
        />
        <v-btn
          class="ml-5"
          color="#6C69FF"
          icon="mdi-send"
          size="small"
        />
      </div>
    </v-col>
    <v-dialog
      v-model="openCreateChatModal"
      width="500"
    >
      <v-card class="text-center pa-6">
        <h1 class="sub-heading mb-4">
          Create a Chat
        </h1>
        <p class="mb-4">
          Chats are where your circle communicates. They’re best when organized around a topic — #Writing, for example.
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
          @click="openCreateChatModal=false"
        >
          Create
        </v-btn>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script setup>
import {  VTextarea, VIcon, VBtn, VTextField } from 'vuetify/components';
import { ref } from 'vue'
const message = ref('')
const openCreateChatModal = ref(false);
</script>
<style scoped>
.name-container {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: #9C9B9F;
  color: white;
}
.date {
  color: #9C9B9F;
  text-align: center;
  font-size: 13px;
}
.chart-groups-hover:hover {
  background-color: #ECEEF3;
}
.login-content {
  box-shadow: 2px 4px 36px 0px rgba(10, 5, 255, 0.16) !important;
}

.sub-heading {
  color: #393640;
  font-size: 32px;
  font-weight: 600;
}

.no-white-space {
  display: flex;
padding: 8px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
align-self: stretch;
background:  #FFF;
border-radius: 40px;
}

.caption {
  color: #393640;
  letter-spacing: -0.224px;
}

.text-16 {
  font-size: 16px;
}
</style>
