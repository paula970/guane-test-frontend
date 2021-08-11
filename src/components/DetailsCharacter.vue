<template>
  <div v-show="character" class="details">
    <h3>Name</h3>
    {{ character.name }}
    <h3>Gender</h3>
    {{ character.gender }}
    <button v-on:click="goBack()">Return</button>
  </div>
</template>

<script>
export default {
  name: "DetailsCharacter",
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
  computed: {
    character() {
      return this.$store.getters.infoCharacter;
    },
  },
};
</script>
