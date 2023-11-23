<template>
  <v-col
    cols="8"
    class="secondary-bg pa-10"
  >
    <h1 class="sub-heading">
      Scouting
    </h1>
    <div class="d-flex flex-column mt-10 justify-end">
      <div
        v-for="(message, index) in groupMessages"
        :key="index"
        class="d-flex mt-10"
      >
        <v-avatar color="#9C9B9F">
          <h3 class="text-16">
            {{ message.userName }}
          </h3>
        </v-avatar>
        <v-row class="d-flex flex-column">
          <v-col cols="6">
            <div class="d-flex flex-column w-100">
              <div
                v-for="(userMessage, indexMessages) in message.messages"
                :key="indexMessages"
                class="ml-4 no-white-space mb-2"
              >
                <div class="ma-2 d-flex flex-column w-100">
                  <p class="text-16">
                    {{ userMessage.content }}
                  </p>
                  <p class="text-right mt-1 pr-4 date">
                    {{ userMessage.createdAt }}
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
        v-model="newMessage"
        rows="1"
        density="compact"
        bg-color="white"
        row-height="15"
        no-resize
        auto-grow
        variant="outlined"
        placeholder="Write a message..."
        @keyup.enter="addNewMessage()"
      />
      <v-btn
        class="ml-5"
        color="#6C69FF"
        icon="mdi-send"
        size="small"
        @click="addNewMessage()"
      />
    </div>
  </v-col>
</template>
<script setup>
import { ref, watchEffect } from 'vue'
import { VTextarea, VBtn, VAvatar } from 'vuetify/components';
import { useUserStore } from '../store/modules/user';

const utilStore = useUserStore();
const groupMessages = ref(null)
const newMessage = ref('')
watchEffect(() => {
  groupMessages.value = utilStore.messages.He
})
const addNewMessage = ()=> {
  let obj = {
    content: newMessage.value,
    createdAt: '12:22'
  }
  newMessage.value = ''
  utilStore.updateMessages(obj);
}
</script>
<style scoped>
.no-white-space {
    display: flex;
    padding: 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    background: #FFF;
    border-radius: 40px;
}
</style>
