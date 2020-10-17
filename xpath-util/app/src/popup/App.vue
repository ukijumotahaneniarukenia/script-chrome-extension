<template>
  <v-app>
    <HelloWorld />
    <DisplayTableView />
  </v-app>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import DisplayTableView from '@/components/DisplayTableView.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    DisplayTableView
  }
}
</script>

<style>
html {
  height: 900px;
  width: 1200px;
}
</style>
