import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    users: [],
    currentUser: null,
  },

  mutations: {
    getUsers(state, rawUsers) {
      state.users = rawUsers;
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
  },

  actions: {
    async fetchUsers({ commit }) {
      const { data } = await axios("https://jsonplaceholder.typicode.com/users");
      await commit("getUsers", data);
    },
  },

  getters: {
    currentUser(state) {
      return state.currentUser;
    },
    currentUserAbout(state) {
      const user = state.currentUser;
      const company = user.company;
      return `${company.name} ${company.catchPhrase} ${company.bs}`;
    },
  },
});

export default store;
