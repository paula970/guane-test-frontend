<template>
  <div class="home">
    <CardCharacters />
    <Pagination />
  </div>
</template>

<script>
// @ is an alias to /src
import CardCharacters from "@/components/CardCharacters.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "Home",
  components: {
    CardCharacters,
    Pagination,
  },
};
</script>

<style lang="scss">
.home {
  max-width: 1128px;
  margin: auto;
}
</style>
