<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <!-- <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        /> -->
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Vuetify</h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold">What's next?</h2>
        <v-row justify="center" v-for="(item, i) in news" :key="i">
          <router-link class="" :to="/news/ + item.id">
            <h2>{{ item.title }}</h2>
          </router-link>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",

  data: () => ({
    news: {},
  }),
  async mounted() {
    const API_ROOT = process.env.API_URL
    let query = "?type=news.NewsPage&fields=intro,body,date,image_thumbnail"
    const url = `${API_ROOT}/pages/${query}`;
    
    let response = await axios
      .get(url)
      .then((response) => response.data)
      .then((jsondata) => (this.news = jsondata.items));
  },
};
</script>
