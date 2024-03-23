<style scoped lang="scss">
@import "src/styles/_utilities";
    .descriptorContainer{
        max-width: 55rem;
        margin: auto;
        margin-bottom: 50px;
    }
    .decreptorHeader{
        text-align: center;
        font-size: 3rem;
        margin-bottom: 0px;
        max-width: 100%;
    }
    .decreptorDescription{
        text-align: center;
        font-size: 1.5rem;
        margin-top: 15px;
        max-width: 100%;
    }
    @media only screen and (max-width: 55rem) {
        .descriptorContainer{
            padding: 0 20px;
             margin-bottom: 20px;
        }
        .decreptorHeader{
            font-size: 2rem;
        }
        .decreptorDescription{
            font-size: 1.25rem;
        }
    }
</style>

<template>
    <div class="descriptorContainer">
        <h1 class="decreptorHeader"><slot name="header"></slot></h1>
        <p  class="decreptorDescription"><slot name="description"></slot></p>
      
    </div>
</template>

<script>
    export default {
        name: "descriptor",
    }
</script>