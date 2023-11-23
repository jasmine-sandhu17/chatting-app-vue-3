<template>
  <v-col
    cols="8"
    class="secondary-bg pa-10"
  >
    <h1 class="sub-heading">
      {{ groupName }}
    </h1>
    <div class="d-flex flex-column mt-10 justify-end">
      <div
        v-for="(group, index) in groupMessages"
        :key="index"
        class="mt-10"
      >
        <div :class="[utilStore.currentUserName === group.userName ? 'flex-row-reverse' : '', 'd-flex']">
          <v-avatar
            color="#9C9B9F"
            class="mx-2"
          >
            <h3 class="text-16">
              {{ group.userName }}
            </h3>
          </v-avatar>
          <v-row>
            <v-col
              :offset="utilStore.currentUserName === group.userName ? '6' : ''"
              cols="6"
            >
              <div class="d-flex flex-column w-100">
                <div
                  v-for="(userMessage, indexMessages) in group.messages"
                  :key="indexMessages"
                  class="ml-4 no-white-space mb-2"
                >
                  <div class="ma-2 d-flex flex-column w-100">
                    <p class="text-16">
                      {{ userMessage.content }}
                    </p>
                    <span class="text-right mt-1 pr-4 date">
                      {{ userMessage.createdAt }}
                    </span>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
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
const groupMessages = ref(null);
const newMessage = ref('');
const groupName = ref('');
watchEffect(()=>{
  groupName.value = utilStore.selectedChat;
})

watchEffect(() => {
  groupMessages.value = utilStore.selectedGroupChat
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
