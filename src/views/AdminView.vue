<template>
    <div class="container">
        <h1 class="text-center m-5">Admin Page</h1>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Add Bike
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add Bike</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Bike Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Bike Price</label>
                <input type="number" class="form-control" id="exampleFormControlInput1">
              </div>
              <div class="mb-5">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="d-flex justify-content-center">
                <button class="btn btn-primary">Send</button>
              </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
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