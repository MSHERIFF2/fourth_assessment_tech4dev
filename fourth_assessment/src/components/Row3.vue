<template>
    <div class="card">
        <div class="wrapper">
            <div class="container" v-for="product in products" :key="product.id">
                <img :src="product.image" alt="">
                <h3>{{ product.title }}</h3>
                <span>{{ product.category }}</span>
                <p>{{ product.description }}</p>
                <a :href="product.id" class="view">view details</a>
            </div>

        </div>



    </div>
</template>
<script>
export default {
    data() {
        return {
            products: []
        }
    },
    mounted() {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => this.products = data)
            .catch(error => console.error(error))
    }
}
</script>
<style scoped>
.wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 12px;
    margin: auto;
    width: 100%;
    justify-content:space-evenly;
    justify-items: center;
    align-content: center;

}
.container{
    margin: 20px;
    width: 30%;
    border-radius: 10px;
    box-shadow: 1px 1px 8px rgba(204, 169, 228, 0.5);
}
.container img{
    border-top-right-radius: 10px ;
    border-top-left-radius: 10px ;
    max-width:50%;
    height: auto;
    margin: auto;
    display: block;
    margin-top: 17px;
}
.container h3{
    font-weight: bolder;
    font-family: Arial;
    font-size: 16px;
    margin: 15px;
    text-align: center;
}
.container span{
    color: purple;
    margin-left: 15px;
    font-weight: bold;
}
.container p{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 14px;
    padding: 20px;
    text-align: justify;
}
.view{
    color: purple;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-decoration: none;
    margin-left: 15px;
}
.view:hover{
    cursor: pointer;
}
/* Styling for mobile view */

@media screen and (max-width:420px) {
    .wrapper{
        display:flex;
        flex-direction: column;
        max-width: 100%;
    }
    .container{
        /* border: 2px solid orange; */
        margin: 2px;
        width: 80%;      
        
    }
}
</style>