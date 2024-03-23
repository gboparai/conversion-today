<style scoped lang="scss">
@import "src/styles/_utilities";
.information {
  padding: 0.5rem 1rem;
  background-color: lighten($alBlack, 10);
  border-radius: $default-radius;
  transition: 0.6s ease, padding 0.1s ease;
  display: inline-block;
  text-decoration: none;
  color: $alWhite;
}
.informationDescription {
  margin-top: 10px;
}
.informationName {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

<template>
  <div class="information">
    <h2 class="informationName"><slot name="header"></slot></h2>
    <p class="informationDescription"><slot name="description"></slot></p>
  </div>
</template>

<script>
export default {
  name: "information",
};
</script>