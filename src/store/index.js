import { createStore } from 'vuex'

const url = 'https://lc1007.github.io/cyclesVueApp/cycleprods.json'

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
   async getData(context){
    try {
      let fetchedData = await fetch(url)
      let {Bikes} = await fetchedData.json()
      context.commit('setGetData', Bikes)
    } catch (error) {
      console.log(error);
    }
   }
  },
  modules: {
  }
})

// async getData({ commit }){ // here I'm telling the application that it must commit the data which means it will send the data to the mutations method
  // try {
  //   const getBikes = await axios.get(data)
    // commit('setGetData', getBikes.data.Bikes) // here I'm committing the fetched data (using the axios method to get the data) to the mutations method. So the process will be set the state -> wait for the data from actions so it can update the state (mutations) -> commit the fetched data to mutations, which will then tell mutations to update the state with the new data
//   } catch (error) {
//     alert(error)
//   }
// }