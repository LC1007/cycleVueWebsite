<template>
    <div class="container">
        <h1 class="text-center m-5">Admin Page</h1>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Add Bike
  </button>
  <button class="btn btn-primary mb-4 mx-1" @click="sortArr">Sort</button>
  
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
                <label for="bikeName" class="form-label">Bike Name</label>
                <input type="email" class="form-control" id="bikeName" v-model="postData.bikeName">
              </div>
              <div class="mb-3">
                <label for="bikePrice" class="form-label">Bike Price</label>
                <input type="number" class="form-control" id="bikePrice" v-model="postData.bikePrice">
              </div>
              <div class="mb-3">
                <label for="bikeImage" class="form-label">Bike Image</label>
                <input type="url" class="form-control" id="bikeImage" v-model="postData.bikeImage">
              </div>
              <div class="mb-5">
                <label for="bikeDesc" class="form-label">Description</label>
                <textarea class="form-control" id="bikeDesc" rows="3" v-model="postData.bikeDesc"></textarea>
              </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="setPost">Save changes</button>
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

import { useStore } from 'vuex';

export default {
  data(){
    return{
      postData:{
        bikeName: '',
        bikePrice: '',
        bikeImage: '',
        bikeDesc: ''
      }
    }
  },
  methods:{
    setPost(){
      fetch('https://lc1007.github.io/cyclesVueApp/cycleprods.json',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          bikeName: this.bikeName,
          bikePrice: this.bikePrice,
          bikeImage: this.bikeImage,
          bikeDesc: this.bikeDesc
        })
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
  },
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