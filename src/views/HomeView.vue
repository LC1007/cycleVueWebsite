<template>
  <div class="container p-5 mt-5">
    <div class="row">
      <div class="col-sm-12 col-md-6 pb-3 d-flex justify-content-center">
          <img src="https://images.pexels.com/photos/3403293/pexels-photo-3403293.jpeg?auto=compress&cs=tinysrgb&w=1600" class="w-75" alt="">
      </div>
      <div class="col-sm-12 col-md-6 pb-4">
          <h1 class="display-6 text-uppercase pb-2">About Our Bikes</h1>
          <p>Welcome to BikeWorld, your one-stop destination for all things cycling! At BikeWorld, we are passionate about bicycles and dedicated to providing the best biking experience for enthusiasts of all levels.
          </p>
          <p>Our shop offers a wide range of high-quality bikes, from mountain bikes built to conquer rugged terrains to sleek road bikes designed for speed and endurance. We also have comfortable and practical city bikes for urban commuters and BMX bikes for those seeking to perform exciting tricks and stunts.</p>
      </div>
    </div>
    <!-- Contact Section -->
    <div>
      <h1 class="display-6 text-uppercase m-5 text-center">Contact Us</h1>
      <form class="form">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-5">
          <label for="exampleFormControlTextarea1" class="form-label">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="d-flex justify-content-center">
          <button class="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

img{
  max-width: 100%;
  display: block;
  object-fit: cover;
}

p{
  font-size: 1.2rem;
  line-height: 1.9;
  font-weight: lighter;
}
</style>