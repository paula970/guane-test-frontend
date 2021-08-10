import Axios from "axios";

const Url = "https://rickandmortyapi.com/api/character";

export default {
  getCharacter() {
    return Axios.get(Url);
  },
};
