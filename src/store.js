import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      likes: 0,
      CheckLike: false,
    };
  },
  mutations: {
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
});

export default store;
