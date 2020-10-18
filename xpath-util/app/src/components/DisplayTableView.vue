<template>
  <v-app>
    <v-layout justify-center justify-space-around>
      <v-text-field
        label="Please target url"
        v-model="targetUrl"
      ></v-text-field>
    </v-layout>
    <v-layout>
      <v-btn class="ma-2" color="secondary" @click="fetchAllXpath">
        FETCH ALL XPATH
      </v-btn>
    </v-layout>
    <v-layout>
      <div>targetUrl {{ targetUrl }}</div>
    </v-layout>
    <v-layout>
      <div>receive {{ receiveUrl }}</div>
    </v-layout>
    <v-layout>
      <div>{{ displayXpathListSize }}</div>
    </v-layout>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="searchKeyWord"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="displayHeaderList"
        :items="displayXpathList"
        :search="searchKeyWord"
      ></v-data-table>
    </v-card>
  </v-app>
</template>

<script>
import listUpAllXpath from "../plugins/listUpAllXpath";

export default {
  name: "DisplayTableView",
  data() {
    return {
      searchKeyWord: "",
      targetUrl: "",
      receiveUrl: "",
      displayXpathList: [],
      displayXpathListSize: 0,
      displayHeaderList: [{ text: "Xpath", value: "xpath" }],
    };
  },
  methods: {
    fetchAllXpath() {
      // https://qiita.com/shanonim/items/7718556c0fab54a517c2
      // https://stackoverflow.com/questions/32547735/javascript-promises-how-to-access-variable-this-inside-a-then-scope
      let self = this
      self.displayXpathList = []
      self.receiveUrl = self.targetUrl
      listUpAllXpath(self.targetUrl).then(function(xpathList){
        self.displayXpathListSize = xpathList.length
        for (let xpathIdx = 0; xpathIdx < xpathList.length; xpathIdx++) {
          let xpathData = xpathList[xpathIdx];
          let displayXpathEntry = { xpath: xpathData };
          self.displayXpathList.push(displayXpathEntry);
        }
      })
    },
  },
};
</script>

<style>
</style>
