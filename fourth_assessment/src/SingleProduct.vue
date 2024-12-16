<template>
  <div class="wrapper">
    <h3>{{ product.title }}</h3>
    <img :src="product.image" alt="">
    <p>{{ product.description }}</p>
    <p class="price">Price: $ {{ product.price }}</p>
    <button @click="message">Add to Cart</button>
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
  },

  methods: {
    message() {
      alert("Add to cart Successfully")
    }
  }

}
</script>

<style scoped>
.wrapper {
  margin: auto;
  width: 30%;
  border-radius: 10px;
  box-shadow: 1px 1px 8px rgba(204, 169, 228, 0.5);

}

.wrapper img {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  max-width: 50%;
  height: auto;
  margin: auto;
  display: block;
  margin-top: 17px;
}

.wrapper h3 {
  font-weight: bolder;
  font-family: Arial;
  font-size: 16px;
  margin: 15px;
  text-align: center;
}
.price {
    background-color: purple;
    color: white;
    font-size: 32px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  
  }

.wrapper p {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 14px;
  padding: 20px;
  text-align: justify;

}

.wrapper button {
  background-color: purple;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  margin: auto;
  display: block;
  margin-bottom: 15px;
  padding: 14px;
  cursor: pointer;
}


</style>