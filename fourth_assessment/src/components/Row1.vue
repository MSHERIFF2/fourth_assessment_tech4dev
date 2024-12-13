<template>
    <div class="wrapper">
        <NavBar/>
        <BottomNav/>       
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
import BottomNav from './BottomNav.vue';

export default{
    components: {    
        NavBar,
        BottomNav
}
}

</script>

<style scoped>
.wrapper{
    background-image: url(../assets/bg.png);
    display: flex;
    background-size:cover;
    background-blend-mode: color-burn;
    padding: 20px;
    height: 600px;
    flex-direction: column;
    margin:0;
    max-width: 100%;
}

</style>