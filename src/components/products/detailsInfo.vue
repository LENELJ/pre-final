<template>
    <div class="modal" :class="{show :active}" @click="$emit('close-detail')"/>
    <div class="content" :class="{show :active}" >

        <div class="close" @click="$emit('close-detail')">
            x
        </div>

        <div v-if="product" class="detail">
            <img class="image" :src="product.img" :alt="product.name">
            <h5 class="price2">Price:₱{{product.price}}.00</h5>
            <p class="category">{{product.category}}</p>
            <p class="desc d1">Description</p>
            <p class="desc">{{product.description}}</p>

            <div class="cart-total" v-if="product_count">
                <h3>In Cart</h3>
                <h4>{{product_count}}</h4>
            </div>
            <div class="button-container">
                <button class="btn remove" @click="removetoCart()" >-</button>
                <button class=" btn add" @click="addtoCart()" >+</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props:['product','active'],
    methods:{
        addtoCart(){
            this.$store.commit('addtoCart', this.product)
        },
        removetoCart(){
            this.$store.commit('removetoCart', this.product)
        }
    },
    computed: {
        product_count() {
            return this.$store.getters.product(this.product)
        }
    }
} 
</script>

<style>
.modal{
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgb(124,124,124,0.55);
    z-index: 100;
    display: none;
    transition: display .5s;
}
.show{
    display: block;
}

.content{
    width:100vw;
    height: 100vh;
    background: white;
    position: fixed;
    top: -205vw;
    left:50%;
    transform:translateX(-50%);
    padding: 15px;
    transition: top .5s;
    z-index: 101;
    overflow-y: scroll;
    margin-top: 10px;
}
.show{
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) ;
}
.close{
    font-size: 1.5rem;
    padding: 0 3px;
    margin-top:10px;
    border-radius: 5px;
    right: 10px;
    border:none;
    color: gray;
    float: right;
    cursor: pointer;
}
.close:hover{
    background-color: lightgray;
}
.detail{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    gap: 0;
}
.image{
    width: 20vw;
    height: auto;
    margin: auto;
}
.price2{
    font-size: 25px;
}
.category{
    margin:-20px 0 30px 0;
    font-size: 17px;
}
.d1{
    text-decoration: underline;
}
.desc{
    margin: -20px 0 0 0;
    padding: 20px;
    line-height: 1.5rem;
}

.button-container button{
    width: 150px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    margin: 0 5px 50px 5px;
    cursor: pointer;
}
.btn{
    background-color: rgb(124, 157, 177); 
    color: white;
    font-size: 20px;
    font-weight: bold;
}
.btn:hover{
    box-shadow: 4px 4px 5px gray;
}
@media(min-width:500px){
    .content{
        width: 450px;
    }
}
</style>