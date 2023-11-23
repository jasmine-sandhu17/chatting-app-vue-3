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
        v-for="i in 2"
        :key="i"
        class="d-flex mt-10"
      >
        <v-avatar color="#9C9B9F">
          <h3 class="text-16">
            CO
          </h3>
        </v-avatar>
        <v-row class="d-flex flex-column">
          <v-col cols="6">
            <div class="d-flex flex-column">
              <div
                v-for="j in 5"
                :key="j"
                class="ml-4 no-white-space mb-2"
              >
                <div class="ma-2">
                  <p class="text-16">
                    Neque sagittis at ut consequat dolor odio penatibus lacus vel. Neque sagittis at
                    ut consequat dolor odio penatibus lacus vel.
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
</template>
<script setup>
import { VTextarea, VBtn, VAvatar } from 'vuetify/components';
import { ref } from 'vue'
const message = ref('')
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
