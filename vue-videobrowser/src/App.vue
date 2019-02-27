<template>
  <div class="container">
    <search-bar @termChange="onTermChange"></search-bar>
    <div class="row">
      <video-detail :video="selectedVideo"></video-detail>
      <video-list :videos="videos" @videoSelect="onVideoSelect"></video-list>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
const API_KEY = process.env.VUE_APP_API_KEY;

export default {
  name: "App",
  components: {
    SearchBar,
    VideoDetail,
    VideoList
  },
  data() {
    return {
      videos: [],
      selectedVideo: null
    };
  },
  methods: {
    onTermChange(searchTerm) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm
          }
        })
        .then(res => (this.videos = res.data.items));
    },
    onVideoSelect(video) {
      this.selectedVideo = video;
    }
  }
};
</script>