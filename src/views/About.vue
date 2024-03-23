
<template>
  <descriptor>
    <template #header>About</template>
    <template #description>
      Your go-to for free, hassle-free file conversion that's accessible to all!
    </template>
  </descriptor>
  <div class="infomationContainer">
    <div>
      <h2>Our Story</h2>
      <p>
        Welcome to Conversion Today, where we've embarked on a mission to
        redefine the file conversion experience. Frustrated by the limitations
        imposed on users dealing with a large number of files, we set out to
        create a solution that breaks free from these constraints.
      </p>
      <h2>Breaking Limitations</h2>
      <p>
        Converting a vast number of files shouldn't be a headache. At Conversion
        Today, we've designed a conversion service that eliminates the common
        restrictions you face elsewhere. Say goodbye to limitations on file
        numbers and size.
      </p>

      <h2>Why Free?</h2>
      <p>
        Conversion Today is totally free, so you don't have to worry about the
        cost of converting your files. We're all about accessibility—making sure
        anyone, from any background, can easily and efficiently convert their
        files without any hassle.
      </p>
      <h2>Contributing to Open Source</h2>
      <p>
        Built on the spirit of collaboration, Conversion Today thrives on
        open-source principles. We invite you to explore, contribute, and
        enhance the platform. By fostering an open-source environment, we aim to
        create a community-driven space where developers collectively refine and
        improve the conversion experience.
      </p>
    </div>
  </div>
</template>
<script>
import Descriptor from "@/components/descriptor.vue";
import { useMeta } from "vue-meta";
export default {
  name: "Home",
  setup() {
    useMeta({
      title: "About - Conversion Today",
      meta: [
        {
          name: "description",
          content:
            "Explore the story of Conversion Today—a free, hassle-free file conversion service for everyone. Break limitations on file numbers and size.",
        },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "About - Conversion Today" },
        {
          name: "twitter:description",
          content:
            "Explore the story of Conversion Today—a free, hassle-free file conversion service for everyone. Break limitations on file numbers and size.",
        },
        // image must be an absolute path
        {
          name: "twitter:image",
          content: "https://conversiontoday.com/img/logo-conversion-today.png",
        },
        // Facebook OpenGraph
        { property: "og:title", content: "About - Conversion Today" },
        { property: "og:site_name", content: "Conversion Today" },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content: "https://conversiontoday.com/img/logo-conversion-today.png",
        },
        {
          property: "og:description",
          content:
            "Explore the story of Conversion Today—a free, hassle-free file conversion service for everyone. Break limitations on file numbers and size.",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://conversiontoday.com/about",
        },
      ],
      htmlAttrs: { lang: "en", amp: true },
    });
  },

  components: {
    Descriptor,
  },
};
</script>