import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    bikeArr: [] // Here I'm creating an empty array to store the fetched data
  },
  getters: {
  },
  mutations: {
    setGetData(state, data){ //setGetData(state, data) - the first argument (state) is the current state of the application and the second argument (data) will hold the new state or new data. 
      state.bikeArr = data // once the new data arrives then we assign the old state with the new state or data
    }
  },
  actions: {
    async getData({ commit }){ // here I'm telling the application that it must commit the data which means it will send the data to the mutations method
      const getBikes = await axios.get('https://lc1007.github.io/cyclesVueApp/cycleprods.json')
      commit('setGetData', getBikes.data.Bikes) // here I'm committing the fetched data (using the axios method to get the data) to the mutations method. So the process will be set the state -> wait for the data from actions so it can update the state (mutations) -> commit the fetched data to mutations, which will then tell mutations to update the state with the new data
    }
  },
  modules: {
  }
})
