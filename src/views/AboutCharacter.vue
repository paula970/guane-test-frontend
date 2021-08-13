<template>
  <div class="about">
    <DetailsCharacter />
  </div>
</template>

<script>
import DetailsCharacter from "@/components/DetailsCharacter.vue";

export default {
  name: "AboutCharacter",
  components: {
    DetailsCharacter,
  },
};
</script>

<style lang="scss">
.about {
  max-width: 1128px;
  margin: auto;
}
</style>
