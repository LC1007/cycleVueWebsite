<template>
    <div class="m-5">
        <!-- <h2>Product ID: {{ $route.params.id }}</h2>
        <h2>Product name: {{ $route.query.name }}</h2> -->
        <div class="card" style="width: 18rem">
            <img :src="$route.query.img" alt="">
            <div class="card-body">
                <h4 class="card-title">{{ $route.query.name }}</h4>
                <p class="card-text">{{ $route.query.description }}</p>
                <p class="card-text">R{{ $route.query.price }}</p>
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  // import { useStore } from 'vuex';
  
  export default {
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