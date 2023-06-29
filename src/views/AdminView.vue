<template>
    <div class="container">
        <h1 class="text-center m-5">Admin Page</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in bikeArr" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.description }}</td>
                    <td>R{{ item.price }}</td>
                    <td><img :src="item.image" alt="" style="width: 10rem"></td>
                    <td>
                        <button class="btn btn-primary m-1">
                            <i class="bi bi-pen"></i>
                        </button>
                        <button class="btn btn-danger m-1">
                            <i class="bi bi-trash3"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// import axios from 'axios'

// export default{
//   data(){
//     return{
//       bikeArr: []
//     }
//   },
//   async mounted(){
//     const getData = await axios.get('https://lc1007.github.io/cyclesVueApp/cycleprods.json')
//     this.bikeArr = getData.data.Bikes
//   }
// }

import { useStore } from 'vuex';

export default {
  computed: {
    bikeArr(){
      return this.$store.state.bikeArr
    }
  },
  mounted(){
    const store = useStore()
    store.dispatch('getData')
  }
}
</script>

<style scoped>

</style>