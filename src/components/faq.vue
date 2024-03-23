<style scoped lang="scss">
@import "src/styles/_utilities";
.faq {
  max-width: 600px;
  margin: 0 auto;
}

.faqItem {
  margin-bottom: 20px;
}

.faqQuestion {
  cursor: pointer;
  font-weight: bold;
  padding: 10px;
  background-color: lighten($alBlack, 10);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  margin-right: 10px;
}

.arrowDown {
  border-color: #ddd transparent transparent transparent;
}

.arrowUp {
  border-width: 0 5px 5px 5px;
  border-color: transparent transparent #ddd transparent;
}

.faqAnswer {
  padding: 10px;
  border: 1px solid $alWhite;
  border-radius: 5px;
  background-color: lighten($alBlack, 10);
}
</style>
<template>
  <div class="faq">
    <div v-for="(faq, index) in faqs" :key="index" class="faqItem">
      <div class="faqQuestion" @click="toggleAnswer(index)">
        {{ faq.question }}
        <span
          class="arrow"
          :class="{ arrowDown: faq.open, arrowUp: !faq.open }"
        ></span>
      </div>
      <div v-if="faq.open" class="faqAnswer">{{ faq.answer }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    faqs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleAnswer(index) {
      this.$emit("toggle", index);
    },
  },
};
</script>


