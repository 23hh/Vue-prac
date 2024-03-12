import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      age: 20,
    };
  },
  mutations: {},
});

export default store;
