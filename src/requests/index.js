import Axios from "axios";

const Url = "https://rickandmortyapi.com/api/character";

export default {
  getCharacter(param) {
    return Axios.get(`${Url}/${param}`);
  },
};
