<template>
    <div class="container">
        <Row1 />
        <Row2 />
        <Row3 />
    </div>


</template>
<script>
import Row1 from './Row1.vue';
import Row2 from './Row2.vue';
import Row3 from './Row3.vue';

export default {
    name: "Home",
    components: {
        Row1,
        Row2,
        Row3
    }
}
</script>
<style>
.container{
    display: flex;
    flex-direction: column;
}
</style>