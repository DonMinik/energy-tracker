<template>
  <v-menu >
    <template v-slot:activator="{ props }">
      <v-app-bar-nav-icon color="accent" v-bind="props"> </v-app-bar-nav-icon>
    </template> 
    <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" @click="routeTo(item)" :class="i === selected? 'active': ''">
         <v-list-item-title >{{
            item.title  
          }}
          </v-list-item-title> 
        </v-list-item>
    </v-list> 
  </v-menu> 
</template>

<script setup lang="ts">
import router from '@/plugins/routing'
import {ref} from 'vue'
const selected = ref(0) 

const items = [
  { title: 'Home', path: '/'},
  { title: 'Gas', path: '/gas' },
  { title: 'Electricity', path:'/electricity'},
];

function routeTo(item: NavigationItem) {
  selected.value = items.indexOf(item)
  console.log(selected);
  router.push(item.path)
}

type NavigationItem = {
  title: string,
  path: string
}
</script>
<style scoped>
.active {
  color: #FEF5AC;
}
</style>