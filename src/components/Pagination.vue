<template>
  <div class="pagination">
    <button v-on:click="changePage(-10)">Previus</button>
    <button v-on:click="changePage(+10)">Next</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  methods: {
    changePage(param) {
      let arrayids = this.$store.getters.ids.map((ids) => {
        return ids + param;
      });
      this.$store.dispatch("changeIdsAction", arrayids);
      this.$store.dispatch("getCharactersAction");
    },
  },
};
</script>
