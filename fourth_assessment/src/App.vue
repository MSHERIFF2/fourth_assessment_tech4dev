<template>
  <div id="app">  
    <router-view/>  
  
  </div>
</template>

<script>
import Home from './components/index.vue'
import SingleProduct from './SingleProduct.vue';


export default {
  name: 'App',
  components: {
   Home,
   SingleProduct
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:0;
  padding:0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  
 
  

}
</style>
