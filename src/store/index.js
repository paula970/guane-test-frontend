import Vue from "vue";
import Vuex from "vuex";
import request from "@/requests/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    idsCharacters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    infoCharacter: {},
  },
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = characters;
    },
    SET_IDSCHARACTERS(state, idsCharacters) {
      state.idsCharacters = idsCharacters;
    },
    SET_INFO_CHARACTER(state, infoCharacter) {
      state.infoCharacter = infoCharacter;
    },
  },
  getters: {
    ids(state) {
      return state.idsCharacters;
    },
    characters(state) {
      return state.characters;
    },
    infoCharacter(state) {
      return state.infoCharacter;
    },
  },
  actions: {
    getCharactersAction({ commit, state }) {
      request
        .getCharacter(state.idsCharacters)
        .then((response) => {
          commit("SET_CHARACTERS", response.data);
          console.log("nuevo1", response.data);
        })
        .catch((error) => console.log(error));
    },
    changeIdsAction({ commit }, arrayids) {
      console.log("nuevo 2");
      commit("SET_IDSCHARACTERS", arrayids);
    },
    getMoreInfoAction({ commit }, id) {
      request
        .getCharacter(id)
        .then((response) => {
          commit("SET_INFO_CHARACTER", response.data);
          console.log("nuevo3", response.data);
        })
        .catch((error) => console.log(error));
    },
  },
});
