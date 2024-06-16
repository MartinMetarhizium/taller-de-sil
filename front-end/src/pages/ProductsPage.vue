<template>
    <h1> Productos disponibles</h1>
    <ProductsList :products="products" />
</template>


<script>
import ProductsList from '../components/ProductsList.vue';
import axios from 'axios';



export default {
    name: "ProductsPage",
    components: {
        ProductsList,
    },
    data() {
        return {
            products: [],
        }
    },
    async created() {
        const response = await axios.get('http://127.0.0.1:8000/api/products');
        const products = response.data;
        this.products = products;
    }

}
</script>