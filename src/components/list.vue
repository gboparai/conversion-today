
<style scoped lang="scss">
@import "src/styles/_utilities";
.list {
  width: 100%;
  padding: 0;
  list-style: none;
}
.listItem {
  padding: 0.5rem 0;
  border-bottom: 1px solid $alWhite;
}
</style>
<template>
  <ol class="list">
    <li
      class="listItem"
      v-for="(html, index) in listOptions"
      :key="index"
      v-html="html"
    ></li>
  </ol>
</template>

<script>
export default {
  props: {
    listOptions: {
      type: Array,
      required: true,
    },
  },
};
</script>
