<template>
    <div class="bottomNav">
        <h1>{{ heroText }}</h1>
        <SearchBar />
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue';

export default {
    data() {
        return {
            heroText: `Ready to Roack? Discover the 
            Hottest Events Here-Your Calendar's Friend!`
        }

    },
    components: {
        SearchBar

    }
}
</script>

<style scoped>
.bottomNav{
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 60%;
    width: 100%;
}
h1{
    width: 470px;
    color: #FFFFFF;
}

</style>