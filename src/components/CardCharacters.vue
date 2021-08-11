<template>
  <div class="card">
    <div v-for="character in characters" :key="character.id">
      <h3>Name</h3>
      {{ character.name }}
      <h3>Gender</h3>
      {{ character.gender }}
      <button v-on:click="moreInfo(character.id)">more information</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCharacters",
  methods: {
    moreInfo(id) {
      this.$store.dispatch("getMoreInfoAction", id);
      this.$router.push("about-the-character");
    },
  },
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
