import Handlebars from "handlebars";

const componentString = `<template>
  <h1>{{name}} Component</h1>
</template>

<script>

</script>

<style scoped>

</style>`;

const componentTemplate = Handlebars.compile(componentString);

export default componentTemplate;
