<style scoped lang="scss">
@import "src/styles/_utilities";

.selectorCon {
  @include mid-width;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 0;
  margin-bottom: 50px;
}
.selector {
  position: relative;
  margin: 0 0.25rem 0.5rem 0.25rem;
  input {
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    display: block;
    margin: 0;
    padding: 0;
    // visibility: hidden;
  }
  input:checked + .select {
    font-weight: 900;
    background-color: lighten($alBlack, 5);
    cursor: default;
    > p {
      transform: scale(1.2);
    }
  }
  input:focus + .select {
    transition: all 0.6s ease, box-shadow 0.1s ease;
    box-shadow: 0 0 0 2px $blue;
    &:hover {
      transition: 0.1s ease;
    }
  }
  .select {
    padding: 0.5rem 1rem;
    background-color: lighten($alBlack, 10);
    border-radius: $default-radius;
    transition: 0.6s ease, padding 0.1s ease;
    display: inline-block;
    text-decoration: none;
    color: $alWhite;
    &:hover {
      transition: 0.1s ease;
      transform: scale(1.1);
      opacity: 1;
      cursor: pointer;
    }
    > p {
      transition: 0.1s ease;
      margin: 0;
    }
  }
}
.desc {
  @include mid-width;
  text-align: center;
  margin-top: 0;
  margin-bottom: 1rem;
}
@media only screen and (max-width: 55rem) {
  .selectorCon {
    margin-bottom: 10px;
  }
}
</style>
<template>
  <div class="selectorCon">
    <div class="selector" v-for="format in formats" :key="format.name">
      <a class="select" :href="'/' + path + '/' + format.name">
        <p>
          {{ format.name }}
        </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "formatSelector",
  props: {
    isFrom: Boolean,
    path: String,
    name: String,
    selectedFormat: String,
  },
  computed: {
    formats() {
      var paths = ["/"];
      this.$store.state.formats
        .filter((format) => {
          return !format.isConvertToOnly;
        })
        .forEach((from) => {
          paths.push("/image/" + from.name);
          this.$store.state.formats.forEach((to) => {
            paths.push("/image/" + from.name + "/" + to.name);
          });
        });
      if (this.isFrom) {
        return this.$store.state.formats.filter((format) => {
          return !format.isConvertToOnly;
        });
      } else {
        return this.$store.state.formats;
      }
    },
  },
};
</script>
