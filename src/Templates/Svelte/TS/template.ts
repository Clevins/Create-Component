import Handlebars from "handlebars";

const componentString = `<script lang="ts">

</script>

<h1>{{name}} Component</h1>

<style>
</style>`;

const componentTemplate = Handlebars.compile(componentString);

export default componentTemplate;
