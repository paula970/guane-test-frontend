<template>
  <div class="card">
    <div v-for="character in characters" :key="character.id">
      <router-link
        tag="div"
        class="card-character"
        :to="{ name: 'about-the-character', params: { id: character.id } }"
      >
        <img
          class="card-character__image"
          v-bind:src="character.image"
          v-bind:alt="image"
        />
        <div class="card-character__info">
          <h4>Name</h4>
          <h5>{{ character.name }}</h5>
          <h4>Species</h4>
          <h5>{{ character.species }}</h5>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCharacters",
  computed: {
    characters() {
      return this.$store.getters.characters;
    },
  },
  created() {
    this.$store.dispatch("getCharactersAction");
  },
};
</script>

<style lang="scss">
.card {
  flex-direction: unset !important;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2rem;
  background-color: unset !important;
  border: unset !important;
}
.card-character {
  width: 100%;
  max-width: 80%;
  border-radius: 1rem;
  background: #35c9dd;
  box-shadow: 0 7px 15px -5px rgba(0, 151, 206, 76);
  border: unset !important;
  margin: 1em auto;

  &:hover {
    box-shadow: 0 15px 25px -5px rgba(0, 151, 206, 76);
    cursor: pointer;
  }

  &__image {
    width: 100%;
    border-top-left-radius: 1em;
    border-top-right-radius: 1rem;
  }
  h4 {
    font-weight: bold;
  }
}
</style>
