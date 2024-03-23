<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/About">About</router-link> |
    <router-link to="/FAQ">FAQ</router-link>
  </div>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content}` : `Conversion Today`
    }}</template>
  </metainfo>
  <img
    height="212"
    width="350"
    class="logo"
    alt="conversion today logo"
    src="/img/logo-conversion-today-3.webp"
  />

  <router-view />
  <!-- GitHub Corner -->
  <github-corners
    fixed
    target="__blank"
    :href="githubUrl"
    :bgColor="cornerBgColor"
    :color="cornerColor"
    :position="cornerPosition"
  />
</template>
<style lang="scss">
@import "src/styles/_normalize";
@import "src/styles/_utilities";

* {
  box-sizing: border-box;
  transition: 0.6s ease, color 0s, background-color 0s, padding 0s, margin 0s;
  position: relative;
}
*:focus {
  transition: 0.1s ease;
  outline: none;
  box-shadow: 0 0 0 2px $blue;
}
body {
  font-family: "Franklin Gothic", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $alWhite;
  background-color: #545454;
  margin: 0;
  padding: 0rem 0;
  min-height: 100vh;
  overflow-y: scroll;
  padding-bottom: 3rem;
}
a {
  color: $alWhite;
  text-decoration: none;
  font-weight: 700;
  outline: none;
}
#nav {
  padding: 3rem;
  text-align: right;
}
.logo {
  display: block;
  margin: auto;
  width: 350px;
  margin-bottom: 0px;
  padding: 0px 20px;
  height: auto;
}
.fadeEnterActive,
.fadeLeaveActive {
  transition: opacity 0.2s ease;
}

.fadeEnterFrom,
.fadeLeaveTo {
  opacity: 0;
}
@media only screen and (max-width: 55rem) {
  body {
    padding: 1.5rem 0;
  }
}
.informationBar {
  display: flex;
  max-width: 55rem;
  margin: auto;
  margin-bottom: 50px;
  gap: 20px;
}
.informationBar > * {
  flex: 1;
}
.infomationContainer {
  display: flex;
  gap: 20px;
  max-width: 55rem;
  margin: auto;
  margin-bottom: 20px;
  > * {
    flex: 1;
  }
}
@media only screen and (max-width: 55rem) {
  .informationBar,
  .infomationContainer {
    flex-direction: column;
    padding: 20px;
    margin-bottom: 10px;
  }
  .fileInput {
    margin-bottom: 30px;
  }
}
</style>
<script>
import { useMeta } from "vue-meta";
import GithubCorners from "@uivjs/vue-github-corners";

export default {
  name: "App",
  components: {
    GithubCorners,
  },
  data() {
    return {
      githubUrl: process.env.VUE_APP_GITHUB_URL,
      cornerBgColor: "#3c3c3c",
      cornerColor: "#ddd",
      cornerPosition: "left",
    };
  },
  setup() {
    useMeta({
      title: "",
      htmlAttrs: { lang: "en", amp: true },
    });
  },
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  },
};
</script>