<template>
  <b-container fluid class="p-4 bg-dark">
    <div id="app">
      <h1 class="title">RICK AND MORTY</h1>
      <router-view />
    </div>
  </b-container>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise&display=swap");
#app {
  font-family: "Waiting for the Sunrise", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  h1 {
    color: #83d2e4;
    font-size: 6rem;
    font-weight: 900;
    text-shadow: 7px 10px 9px yellow;
  }
  @media (max-width: 526px) {
    h1 {
      font-size: 4.5rem;
    }
  }
}
</style>
