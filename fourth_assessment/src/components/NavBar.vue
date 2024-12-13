<template>
  <div class="navbar">
    <span>{{  logo }}</span>
    <ul>
        <li v-for="item in ul">{{ item }}</li>
</ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      logo: 'rendezvous',
      ul: ['Discover', 'About us', 'FAQs', 'Contact us'],
      button: ['Log in', 'Sign up']
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
