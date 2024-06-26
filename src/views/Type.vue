<style scoped lang="scss">
@import "src/styles/_utilities";

.toTitle {
  text-align: center;
  margin-top: 0px;
}
.FAQTitle {
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
}
</style>

<template>
  <descriptor>
    <template #header
      ><span>{{ formatInofo.name.toUpperCase() }}</span> Converter</template
    >
    <template #description
      >Convert unlimited number of files to and from
      {{ formatInofo.name }} online. Amongst many others, we support PNG, JPG,
      GIF, WEBP and BPM.</template
    >
  </descriptor>
  <div class="informationBar">
    <card
      :path="'/'"
      :formats="formats"
      :selectedFormat="formatInofo.name"
      :handleChange="handleChange"
    >
      <template #header>{{ formatInofo.title }}</template>
      <template #description>{{ formatInofo.description }}</template>
    </card>
  </div>
  <h2 class="toTitle">Convert {{ formatInofo.name }} to:</h2>
  <format-selector
    :isFrom="false"
    :path="'image/' + format"
    name="to"
  ></format-selector>
  <div class="infomationContainer">
    <information>
      <template #header>Fast Conversion </template>
      <template #description>
        We can convert hundreds of {{ formatInofo.name.toUpperCase() }} to any
        supported file formats in a matter of minutes.
      </template>
    </information>
    <information>
      <template #header>No Limit</template>
      <template #description>
        Convert {{ formatInofo.name.toUpperCase() }} files without any
        limitations on the size or quantity.
      </template>
    </information>
  </div>
  <div class="infomationContainer">
    <information>
      <template #header>Bulk File Conversion </template>
      <template #description>
        Bulk converts an unlimited number of
        {{ formatInofo.name.toUpperCase() }} files to any other supported file
        format with just one click.
      </template>
    </information>
    <information>
      <template #header>50+ formats supported</template>
      <template #description>
        Convert {{ formatInofo.name.toUpperCase() }} files to one of our 50+
        different supported file formats within a second.
      </template>
    </information>
  </div>
  <div>
    <h3 class="FAQTitle">FAQ</h3>
    <faq :faqs="faqItems" @toggle="toggleFaqAnswer" />
  </div>
  <!-- <resize-config></resize-config> -->
</template>

<script>
import FormatSelector from "@/components/format-selector.vue";
import Card from "@/components/card.vue";
import Descriptor from "@/components/descriptor.vue";
import Information from "@/components/information.vue";
import Faq from "@/components/faq";
import { useMeta } from "vue-meta";
export default {
  name: "Type",
  setup() {},

  components: {
    FormatSelector,
    Card,
    Descriptor,
    Information,
    Faq,
  },
  data() {
    useMeta({
      title:
        "Free Online " +
        this.$route.params.format.toUpperCase() +
        " Converter | Unlimited Files ",
      meta: [
        {
          name: "description",
          content:
            "Free Online " +
            this.$route.params.format.toUpperCase() +
            " Converter. Converts to over 50+ files within seconds. No limitions or ristrictions on the file size and the number of files.",
        },
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content:
            "Free Online " +
            this.$route.params.format.toUpperCase() +
            " Converter | Unlimited Files",
        },
        {
          name: "twitter:description",
          content:
            "Free Online " +
            this.$route.params.format.toUpperCase() +
            " Converter. Converts to over 50+ files within seconds. No limitions or ristrictions on the file size and the number of files.",
        },
        // image must be an absolute path
        {
          name: "twitter:image",
          content: "https://conversiontoday.com/img/logo-conversion-today.png",
        },
        // Facebook OpenGraph
        {
          property: "og:title",
          content:
            "Free Online " +
            this.$route.params.format.toUpperCase() +
            " Converter | Unlimited Files",
        },
        { property: "og:site_name", content: "Conversion Today" },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content: "https://conversiontoday.com/img/logo-conversion-today.png",
        },
        {
          property: "og:description",
          content:
            "Free Online " +
            this.$route.params.format.toUpperCase() +
            " Converter. Converts to over 50+ files within seconds. No limitions or ristrictions on the file size and the number of files.",
        },
      ],
      link: [
        {
          rel: "canonical",
          href:
            "https://conversiontoday.com/image/" + this.$route.params.format,
        },
      ],
      htmlAttrs: { lang: "en", amp: true },
    });
    return {
      format: this.$route.params.format,

      faqItems: [
        {
          question: `Is there a limitation on the size or number of ${this.$route.params.format} files that can be processed?`,
          answer: `No, there is no limitation on the size or number of ${this.$route.params.format} files you can process using this service. You are free to convert files of varying sizes and process as many files as needed without any restrictions.`,
          open: false,
        },
        {
          question: `How is the security of my ${this.$route.params.format} files ensured?`,
          answer: `Your ${this.$route.params.format} files never leave your browser during the conversion process. All conversions are performed locally, directly in your browser, ensuring the privacy and security of your sensitive information. Your data stays on your device, and you have complete control over your files.`,
          open: false,
        },
        {
          question: `How can we convert ${this.$route.params.format} files free of charge?`,
          answer:
            "The service is free because the entire conversion process takes place within your browser. The computing resources required for the conversion are provided by your device. This approach eliminates the need for server-side processing and infrastructure, allowing us to offer the service at no cost to users. Your browser becomes the tool for conversion, making it a convenient and cost-free solution.",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleFaqAnswer(index) {
      this.faqItems[index].open = !this.faqItems[index].open;
    },
    handleChange(event) {
      window.location.href = `/image/${event.target.value}`;
    },
  },
  computed: {
    formatInofo() {
      return this.$store.state.formats.find((formatObj) => {
        if (formatObj.name == this.format) return formatObj;
      });
    },
    formats() {
      return this.$store.state.formats.filter(
        (format) => !format.isConvertToOnly
      );
    },
  },
};
</script>
