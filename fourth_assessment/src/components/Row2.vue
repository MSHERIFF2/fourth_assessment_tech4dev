<template>
    <div>
      
            <h1>{{ left }}</h1>
            <p>{{ right }}</p>
        


    </div>

</template>

<script>
export default {
    data() {
        return {
            left: "Trending events",
            right: "view all trending events"

        }

    }
}
</script>

<style scoped>
div{
    display: flex;
    justify-content:space-between;
}

p{
    color: #ec0eec;
    font-size: 16px;
}
</style>