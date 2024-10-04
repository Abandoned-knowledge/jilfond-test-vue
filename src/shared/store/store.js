import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    allUsers: [],
    filteredUsers: [],
    currentUser: null,
  },

  mutations: {
    getUsers(state, rawUsers) {
      state.allUsers = rawUsers;
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    clearCurrentUser(state) {
      state.currentUser = null;
    },
    filterUsers(state, idOrUsername) {
      let filteredArray = [];

      if (idOrUsername === "") {
        filteredArray = [];
      } else if (idOrUsername.includes(",")) {
        const array = idOrUsername.split(",");
        const trimmedArray = array.map((el) => el.trim());
        filteredArray = state.allUsers.filter(
          (el) =>
            trimmedArray.includes(String(el.id)) ||
            trimmedArray.includes(el.username.toLowerCase()),
        );
      } else {
        filteredArray = state.allUsers.filter((el) => {
          const id = el.id;
          const username = el.username.toLowerCase();
          return id == idOrUsername || username.includes(idOrUsername);
        });
      }
      setTimeout(() => {
        state.filteredUsers = filteredArray;
      }, 500);
    },
  },

  actions: {
    async fetchAllUsers({ commit }) {
      const { data } = await axios(`https://jsonplaceholder.typicode.com/users`);

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
