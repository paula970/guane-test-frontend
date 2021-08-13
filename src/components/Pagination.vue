<template>
  <div class="pagination">
    <b-button
      v-bind:disabled="page == 1"
      pill
      class="pagination__button"
      v-on:click="changePage(-10)"
      ><b-icon icon="arrow-left"></b-icon
    ></b-button>
    <b-button pill variant="outline-secondary" v-on:click="updatePage()">{{
      page
    }}</b-button>
    <b-button
      v-bind:disabled="page == 6"
      pill
      class="pagination__button"
      v-on:click="changePage(+10)"
      ><b-icon icon="arrow-right"></b-icon
    ></b-button>
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
    async changePage(param) {
      const element = document.querySelector(".title");
      element.scrollIntoView("smooth", "start");
      let actualPage = this.$store.getters.page;
      let nextPage = param == 10 ? ++actualPage : --actualPage;
      let arrayids = this.$store.getters.ids.map((ids) => {
        return ids + param;
      });
      await this.$store.dispatch("changePageAction", nextPage);
      await this.$store.dispatch("changeIdsAction", arrayids);
      await this.$store.dispatch("getCharactersAction");
    },

    updatePage() {
      const element = document.querySelector(".title");
      element.scrollIntoView("smooth", "start");
    },
  },
};
</script>

<style lang="scss">
.pagination {
  justify-content: center;

  .btn-outline-secondary {
    color: #a9f3fd;
    border-color: #a9f3fd;
    margin: 0.6rem 1.5rem;
    width: 4rem;
    height: 4rem;
  }

  .btn-secondary {
    color: #fff;
    background-color: unset !important;
    border-color: #343a40 !important;
  }
  .pagination__button {
    background-image: url("../assets/portal.png");
    background-size: 84px 80px;
    height: 83px;
    width: 83px;
    color: #314e1c;
    font-weight: 600;

    .b-icon.bi {
      font-size: 2rem;
    }
  }
}
</style>
