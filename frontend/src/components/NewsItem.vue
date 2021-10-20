<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h2>{{ news.title }}</h2>
        <v-img
          contain
          v-if="news.image_thumbnail"
          :src="'http://127.0.0.1:8000' + news.image_thumbnail.url"
          :width="news.image_thumbnail.width"
          :height="news.image_thumbnail.height"
        ></v-img>
        <p v-html="news.body"></p>
        <router-link to="/">Home</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "NewsItem",

  data: () => ({
    news: {},
  }),
  methods: {
    async getNews() {
      const API_ROOT = process.env.API_URL;
      let query = this.$route.params.id + "/";
      const url = `${API_ROOT}/pages/${query}`;

      let response = await axios
        .get(url)
        .then((response) => (this.news = response.data));
    },
  },
  mounted() {
    this.getNews();
  },
  watch: {
    $route(to, from) {
      this.getNews();
    },
  },
};
</script>
