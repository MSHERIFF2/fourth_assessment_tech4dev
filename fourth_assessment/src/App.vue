<template>
  <div id="app">   
    <Row1/>
    <Row2/>
    <Row3/>
  </div>
</template>

<script>
import Row1 from './components/Row1.vue'
import Row2 from './components/Row2.vue';
import Row3 from './components/Row3.vue';

export default {
  name: 'App',
  components: {
    Row1,
    Row2,
    Row3
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
