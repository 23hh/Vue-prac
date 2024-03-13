import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      likes: 0,
      CheckLike: false,
      more: {},
    };
  },
  mutations: {
    setMore(state, data) {
      state.more = data;
    },
    incrementLikes(state) {
      if (state.CheckLike == false) {
        state.likes++;
        state.CheckLike = true;
      } else {
        state.likes--;
        state.CheckLike = false;
      }
    },
  },
  actions: {
    getData(context) {
      axios.get("https://codingapple1.github.io/vue/more0.json").then((a) => {
        context.commit("setMore", a.data);
      });
    },
  },
});

export default store;
