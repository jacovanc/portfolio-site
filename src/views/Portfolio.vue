<template>
  <div class="portfolio">
    <WebsiteDisplay/>
  </div>
</template>

<script>
// @ is an alias to /src
import WebsiteDisplay from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    WebsiteDisplay
  }
};
</script>
