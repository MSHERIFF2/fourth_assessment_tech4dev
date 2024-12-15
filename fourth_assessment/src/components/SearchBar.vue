<template>
    <div class="search">
        <input type="text" placeholder="Search for an event"/>
        <select>
            <option>Category</option>
        </select>
        <button>Search</button>
    </div>
</template>

<style scoped>
.search{
    display: flex;
    justify-content: space-around;
    width: 50%;
   background-color: #FFFFFF;
    height:fit-content;
    border-radius: 20px;
    padding: 15px;
}
input{
    width: 300px;  
    border-radius:20px;  
    border: none;
    padding: 8px;
    text-align: center;
    font-size: 16px;
}
select{
    width: 200px;
    border-radius: 10px;
    border: none;
}
input, select, button{
    height: 50px
}
button{
    background-color: purple;
    color: #FFFFFF;
    width: 120px;
    border: none;
    border-radius: 10px;
    padding: 5px;
}
@media screen and (max-width:420px) {
    .search{
        display: flex;
        flex-direction: column;
        
    
    }
}
</style>