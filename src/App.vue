<template>
  <NavBar />
  <Header />
  <router-view/>
</template>

<script>
import Header from '@/components/HeaderComp.vue'
import NavBar from '@/components/NavComp.vue'

export default{
  components: {
    Header,
    NavBar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: gray;
}
</style>
