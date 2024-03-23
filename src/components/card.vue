<style scoped lang="scss">
@import "src/styles/_utilities";
.card {
  padding: 0.5rem 1rem;
  background-color: lighten($alBlack, 10);
  border-radius: $default-radius;
  transition: 0.6s ease, padding 0.1s ease;
  display: inline-block;
  text-decoration: none;
  color: $alWhite;
  padding-bottom: 40px;
  text-align: center;
}
.cardName {
  text-align: center;
}
.cardDescription {
  text-align: center;
  margin-top: 10px;
}
.cardType {
  display: inline-block;
  background-color: $alWhite;
  color: $alBlack;
  text-align: center;
  padding: 3px 25px 3px 10px;
  border-radius: 10px;

  position: relative;
  appearance: none;
}

.arrow {
  content: "";
  position: absolute;
  top: calc(50% - 3px);
  right: 10px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 6px 0 6px;
  border-color: $alBlack transparent transparent transparent;
  pointer-events: none; /* Ensure the arrow doesn't interfere with clicks */
  z-index: 2;
}

.cardTypeContainer {
  display: inline-block;
  text-align: center;
  position: relative;
  margin-top: 15px;
}
.cardName {
  margin-top: 10px;
  margin-bottom: 10px;
}
.cardLink {
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 10px 0px;
  position: absolute;
  bottom: 10px;
  width: 100%;
  left: 0px;
  a {
    cursor: pointer;
    color: $alWhite;
    text-decoration: none;
  }
}
</style>

<template>
  <div class="card">
    <div class="cardTypeContainer">
      <span class="arrow"></span>
      <select class="cardType" @change="handleChange">
        <option
          v-for="format in formats"
          :key="format.name"
          :value="format.name"
          :selected="format.name === selectedFormat"
        >
          {{ format.name }}
        </option>
      </select>
    </div>
    <h2 class="cardName"><slot name="header"></slot></h2>
    <p class="cardDescription"><slot name="description"></slot></p>
    <div class="cardLink">
      <a :href="path"> change </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    path: String,
    formats: {
      type: Array,
      required: true,
    },
    selectedFormat: {
      type: String,
      required: true,
    },
    handleChange: {
      type: Function,
      required: true,
    },
  },
};
</script>