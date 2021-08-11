<template>
  <div class="pagination">
    <button v-bind:disabled="page == 1" v-on:click="changePage(-10)">Previus</button>
    <button v-bind:disabled="page == 5" v-on:click="changePage(+10)">Next</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  computed: {
    page() {
      return this.$store.getters.page;
    },
  },
  methods: {
    changePage(param) {
      let actualPage= this.$store.getters.page
      let nextPage = param == 10 ? ++actualPage : --actualPage  
      let arrayids = this.$store.getters.ids.map((ids) => {
        return ids + param;
      });
      this.$store.dispatch("changePageAction", nextPage);
      this.$store.dispatch("changeIdsAction", arrayids);
      this.$store.dispatch("getCharactersAction");
    },
  },
};
</script>
