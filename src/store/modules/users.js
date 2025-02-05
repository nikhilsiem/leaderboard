const state = {
    users: [
        {
            id: 1,
            name: "John",
            age: 28,
            points: 0,
            address: "18, Wellington St."
        },
        {
            id: 2,
            name: "Summit",
            age: 21,
            points: 0,
            address: "19, Wellington St."
        },
        {
            id: 3,
            name: "Elvis",
            age: 23,
            points: 0,
            address: "18, Carl Towers"
        },
        {
            id: 4,
            name: "Donanld",
            age: 22,
            points: 0,
            address: "141, Lane 8, Queen St."
        },
        {
            id: 5,
            name: "Marie",
            age: 29,
            points: 0,
            address: "1, 2nd floor, Marriott Suites"
        },
        {
            id: 6,
            name: "Jacob",
            age: 18,
            points: 0,
            address: "306, Sunset Street, Manchester"
        }
    ],
    selectedUser: null,
    searchTerm: '',
    sortBy: 'points',
    sortDirection: 'desc'
  };
  
  const mutations = {
    ADD_USER(state, user) {
      state.users.push({ ...user, id: Math.random()*10 });
    },
    DELETE_USER(state, userId) {
      state.users = state.users.filter(user => user.id !== userId);
    },
    UPDATE_POINTS(state, { userId, points }) {
      const user = state.users.find(user => user.id === userId);
      if (user) user.points = points;
    },
    SET_SELECTED_USER(state, user) {
        state.selectedUser = user;
    },
    SET_SEARCH_TERM(state, term) {
      state.searchTerm = term;
    },
    SET_SORT(state, { sortBy, direction }) {
      state.sortBy = sortBy;
      state.sortDirection = direction;
    }
  };
  
  const actions = {
    addUser({ commit }, user) {
      commit('ADD_USER', user);
    },
    deleteUser({ commit }, userId) {
      commit('DELETE_USER', userId);
    },
    updatePoints({ commit }, payload) {
      commit('UPDATE_POINTS', payload);
    },
    setSelectedUser({ commit }, user) {
      commit('SET_SELECTED_USER', user);
    },
    setSearchTerm({ commit }, term) {
      commit('SET_SEARCH_TERM', term);
    },
    setSortBy({ commit, state }, sortBy) {
      const direction = 
        state.sortBy === sortBy && state.sortDirection === 'asc' ? 'desc' : 'asc';
      commit('SET_SORT', { sortBy, direction });
    }
  };
  
  const getters = {
    filteredAndSortedUsers: state => {
      return [...state.users]
        .filter(user => 
          user.name.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
        .sort((a, b) => {
          const modifier = state.sortDirection === 'asc' ? 1 : -1;
          if (state.sortBy === 'name') {
            return modifier * a.name.localeCompare(b.name);
          }
          return modifier * (a[state.sortBy] - b[state.sortBy]);
        });
    }
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  };