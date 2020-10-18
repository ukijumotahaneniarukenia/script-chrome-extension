<template>
  <v-app>
    <DisplayTableView />
  </v-app>
</template>

<script>
import DisplayTableView from '@/components/DisplayTableView.vue'

export default {
  name: 'App',
  components: {
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
