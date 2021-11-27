<template>
    <div class="cards">
        <img class="images" :src="product.img" :alt="product.name">
        <h5 class="price">Price:₱{{product.price.toFixed(2)}}</h5>
        <h4>{{product.name}}</h4>
        <button class="view-product-button" @click="$emit('view', product)">View</button>
    </div> 
</template>

<script>
export default {
    props:['product']
}
</script>

<style>

.cards{
    width: 80%;
    margin: 10%;
    padding: 10px;
    border-radius: 5px;
    background-color: rgb(124, 157, 177);
    box-shadow: 0 0 5px gray;
}
.images{
    width: auto;
    height: 100px;
}
h5.price{
    color: rgb(243, 243, 243);
}
button.view-product-button{
    padding: 10px;
    background-color: rgb(255, 255, 255);
    border: none;
    color:rgb(0, 0, 0);
    font-weight: bold;
    font-size: 1.15rem;
    border-radius: 5px;
    cursor: pointer;
}
@media (min-width:500px){
    .cards{
        width:350px;
        margin: 10px;
    }
}
    


</style>
