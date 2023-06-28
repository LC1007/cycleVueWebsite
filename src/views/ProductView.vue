<template>
  <div class="container mb-5">
    <p class="text-center display-4 m-5">Bike Products</p>
    <div class="custom-cards gap-3">
        <div class="card" style="width: 18rem" v-for="item in bikeArr" :key="item.id">
            <img :src="item.image" class="card-img-top custom-img" alt="{{ item.title }}">
            <div class="card-body">
              <h4 class="card-title">{{ item.name }}</h4>
              <p class="card-text">{{ item.description }}</p>
              <p class="card-text">R{{ item.price }}</p>
              <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  data(){
    return{
      bikeArr: []
    }
  },
  async mounted(){
    const getData = await axios.get('https://lc1007.github.io/cyclesVueApp/cycleprods.json')
    this.bikeArr = getData.data.Bikes
  }
}
</script>

<style scoped>
img{
  max-width: 100%;
  display: block;
}

.custom-cards{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

</style>

<!-- ,
  methods: {
    async postData(){
        const newData = {
            id: 6,
            description: "This is a tes",
            price: 799.99,
            image: "https://cdn.shopify.com/s/files/1/1816/5035/products/DSCF2436_940x.jpg?v=1564057539",
            name: "This is a bike"
        }
        const sendData = await axios.post('https://lc1007.github.io/cyclesVueApp/cycleprods.json', {
            message: 'Add new data',
            content: btoa(JSON.stringify(newData)),
            branch: 'main'
        }, {
            headers: {
                Authorization: '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'
            }
        })
        console.log(sendData);
        
    }
  } -->