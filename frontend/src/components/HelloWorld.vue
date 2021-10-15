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
        <h2 class="headline font-weight-bold mb-3">What's next?</h2>
        <v-row justify="center" v-for="(item, i) in news" :key="i">
          <h2>{{ item.title }}</h2>
          <v-img
          contain
            v-if="item.image_thumbnail"
            :src="'http://127.0.0.1:8000' + item.image_thumbnail.url"
            :width="item.image_thumbnail.width"
            :height="item.image_thumbnail.height"
          ></v-img>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const API_ROOT = "http://127.0.0.1:8000/api/v2/pages/";

export default {
  name: "HelloWorld",

  data: () => ({
    news: {},
  }),
  async mounted() {
    let response = await fetch(
      API_ROOT + "?type=news.NewsPage&fields=intro,body,date,image_thumbnail"
    ).then((response) => response.json());
    this.news = response.items;
  },
};
</script>
