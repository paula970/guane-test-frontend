<template>
  <div class="details">
    <b-card
      v-bind:img-src="character.image"
      img-alt="Card image"
      img-left
      class="details__image mb-3"
    >
      <b-card-text class="details__text">
        <h3>Name:</h3>
        <h4>{{ character.name }}</h4>
        <h3>Status:</h3>

        <h4 v-if="character.status">{{ character.status }}</h4>
        <h3>Species:</h3>
        <h4>{{ character.species }}</h4>
        <h3>Gender:</h3>
        <h4>{{ character.gender }}</h4>
        <h3>Last known location:</h3>
        <h4>{{ character.location.name }}</h4>
      </b-card-text>
      <b-button variant="success" v-on:click="goBack()">Return</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "DetailsCharacter",
  methods: {
    goBack() {
      this.$store.dispatch("deleteCharacterAction");
      this.$router.push("/");
    },
  },
  computed: {
    character() {
      return this.$store.getters.infoCharacter;
    },
  },
  async created() {
    await this.$store.dispatch("getCharacterAction", this.$route.params.id);
  },
};
</script>

<style lang="scss">
.details {
  background: #7cbc6c;
  border-radius: 2rem;
  margin: 0 auto;
  box-shadow: 0 5px 15px 5px #69ad53;
  max-width: 100%;
  width: 80%;

  img {
    margin: 2rem;
    max-width: 100%;
    object-fit: contain;
    max-width: 100%;
  }
  h3 {
    font-weight: 600;
  }
  h4 {
    margin-bottom: 2rem;
  }
  .btn-success {
    float: right;
    padding: 1rem;
    font-size: 1.5rem;
  }
}
</style>
