<script setup lang="ts">
import Menu from '@/components/menu.vue'
</script>

<template>
  <v-app>
    <v-app-bar elevation="2" color="secondary">
      <Menu/>
      <v-app-bar-title>Energy Tracker</v-app-bar-title>
       <template v-slot:append>
          <v-btn icon color="accent">
            <v-icon>mdi-file-download</v-icon>
          </v-btn>
        </template> 
      </v-app-bar>
      <v-main>
     
      <RouterView>

      </RouterView>
    </v-main>
  </v-app>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
