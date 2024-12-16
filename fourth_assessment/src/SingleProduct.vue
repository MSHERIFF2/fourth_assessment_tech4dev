<template>
    <div>
      <h1>{{ product.title }}</h1>
      <img :src="product.image" alt="">
      <p>{{ product.description }}</p>
      <p>Price: {{ product.price }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {}
      }
    },
    mounted() {
      fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`)
        .then(res => res.json())
        .then(data => this.product = data)
        .catch(error => console.error(error))
    }
  }
  </script>