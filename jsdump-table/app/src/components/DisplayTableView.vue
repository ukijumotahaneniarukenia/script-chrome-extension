<template>
  <v-app>
    <v-layout justify-center justify-space-around>
      <v-text-field
        label="Please target instance name"
        v-model="targetInstanceName"
      ></v-text-field>
    </v-layout>
    <v-layout>
      <v-btn class="ma-2" color="secondary" @click="fetchInstanceMethods">
        FETCH INSTANCE METHODS
      </v-btn>
    </v-layout>
    <v-layout>
      <div>targetInstanceName {{ targetInstanceName }}</div>
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
        :items="displayMetaInfoList"
        :search="searchKeyWord"
      ></v-data-table>
    </v-card>
  </v-app>
</template>

<script>
import listUpInstanceMethods from "../plugins/listUpInstanceMethods";
import listUpStaticMethods from "../plugins/listUpStaticMethods";

export default {
  name: "DisplayTableView",
  data() {
    return {
      searchKeyWord: "",
      targetInstanceName: "",
      displayMetaInfoList: [],
      displayHeaderList: [{ text: "Method", value: "method" }],
    };
  },
  methods: {
    fetchInstanceMethods() {
      // https://qiita.com/shanonim/items/7718556c0fab54a517c2
      // https://stackoverflow.com/questions/32547735/javascript-promises-how-to-access-variable-this-inside-a-then-scope
      let self = this
      self.displayMetaInfoList = []
      listUpInstanceMethods(self.targetInstanceName).then(function(resultList){
        for (let idx = 0; idx < resultList.length; idx++) {
          let resultData = resultList[idx];
          let resultEntry = { method: resultData };
          self.displayMetaInfoList.push(resultEntry);
        }
      })
    },
  },
};
</script>

<style>
</style>
