<template>
  <div class="navbar">
    <span>{{ logo }}</span>
    <ul>
      <li v-for="item in ul">{{ item }}</li>
    </ul>
    <span class="acct">
      <button v-for="button in buttons">{{ button }}</button>
    </span>
  </div>

</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      logo: 'rendezvous',
      ul: ['Discover', 'About us', 'FAQs', 'Contact us'],
      buttons: ['Log in', 'Sign up']
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.navbar {
  display: flex;

  align-items: center;
  justify-content: space-evenly;
  background-color: aliceblue;
  border-radius: 10px;
  color: purple;
}

ul li {
  list-style-type: none;
    margin: 12px;
}

ul {
  display: flex;
  justify-content: space-between;
  width: 450px;
}

.acct {
  display: flex;
  justify-content: space-around;
  width: 250px;

}
button:nth-child(even){
  color: white;
    background-color: purple;
    border: none;
    border-radius: 5px;
}
button:nth-child(odd){
  border: none;
  background-color: aliceblue;
}
</style>
