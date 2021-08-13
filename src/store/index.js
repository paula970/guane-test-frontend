import Vue from "vue";
import Vuex from "vuex";
import request from "@/requests/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    idsCharacters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    infoCharacter: {},
    page: 1,
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
    SET_PAGE(state, page) {
      state.page = page;
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
    page(state) {
      return state.page;
    },
  },
  actions: {
    getCharactersAction({ commit, state }) {
      request
        .getCharacter(state.idsCharacters)
        .then((response) => {
          commit("SET_CHARACTERS", response.data);
        })
        .catch((error) => console.log(error));
    },

    getCharacterAction({ commit }, id) {
      request
        .getCharacter(id)
        .then((response) => {
          commit("SET_INFO_CHARACTER", response.data);
        })
        .catch((error) => console.log(error));
    },
    deleteCharacterAction({ commit }) {
      commit("SET_INFO_CHARACTER", {});
    },

    changeIdsAction({ commit }, arrayids) {
      commit("SET_IDSCHARACTERS", arrayids);
    },

    changePageAction({ commit }, page) {
      commit("SET_PAGE", page);
    },
  },
});
