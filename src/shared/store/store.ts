import axios from "axios";
import { createStore } from "vuex";

import { type IUser } from "./";

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
      let filteredArray: IUser[] = [];

      if (idOrUsername === "") {
        filteredArray = [];
      } else if (idOrUsername.includes(",")) {
        const array = idOrUsername.split(",");
        const trimmedArray = array.map((el: string) => el.trim());
        filteredArray = (state.allUsers as IUser[]).filter(
          (el) =>
            trimmedArray.includes(String(el.id)) ||
            trimmedArray.includes(el.username.toLowerCase()),
        );
      } else {
        filteredArray = (state.allUsers as IUser[]).filter((el) => {
          const id = el.id;
          const username = el.username.toLowerCase();
          return id == idOrUsername || username.includes(idOrUsername);
        });
      }
      setTimeout(() => {
        (state.filteredUsers as IUser[]) = filteredArray;
      }, 500);
    },
  },

  actions: {
    async fetchAllUsers({ commit }) {
      const { data } = await axios(`https://jsonplaceholder.typicode.com/users`);
      commit("getUsers", data);
    },
  },

  getters: {
    currentUser(state) {
      return state.currentUser;
    },
    currentUserAbout(state) {
      const user: IUser = state.currentUser! as IUser;
      const company = user.company;
      return `${company.name} ${company.catchPhrase} ${company.bs}`;
    },
  },
});

export default store;
