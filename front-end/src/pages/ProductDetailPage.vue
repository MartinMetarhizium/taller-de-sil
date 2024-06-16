<template>
    <div v-if="product">
        <div class="img-wrap">
            <img :src="product.imageUrl" />
        </div>
        <div class="product-details">
            <h1>{{ product.name }}</h1>
            <h3>{{ product.price }}</h3>
            <button @click="addToCart" class="add-to-cart" v-if="user && !itemsIsInCart"> Add to cart</button>
            <button  class="grey-button" v-if="user && itemsIsInCart">Ya presente en el carrito</button>
            <button class="sign-in" @click="signIn" v-if="!user">Loguearse para añadir al carrito</button>
        </div>
    </div>
    <div v-if="!product">
        <NotFoundPage/>
    </div>
</template>


<script>
import {getAuth, sendSignInLinkToEmail, signInWithEmailLink, isSignInWithEmailLink} from 'firebase/auth'
import NotFoundPage from './NotFoundPage.vue';
import axios from 'axios';

export default {
    name: "ProductDetailsPage",
    prop: ['user'],
    data() {
        return { 
            product: {},
            cartItems: [],
        }
    },
    components: {
        NotFoundPage,
    },
    computed: {
        itemsIsInCart(){
            return this.cartItems.some(item => item.id == this.$route.params.productId);
        }
    },
    watch : {
        async user(newUserValue){
            if (newUserValue) {
                const cartResponse = await axios.get(`/api/users/${newUserValue.uid}/cart`);
                const cartItems = cartResponse.data;
                this.cartItems = cartItems;
            }
        }
    },
    methods: {
        async addToCart () {
            await axios.post(`/api/users/${this.user.uid}/cart`, {id: this.$route.params.productId});
            alert('Agregado al carrito')
        },
        async signIn() {
            const email = prompt('Please enter your email to sign in:');
            const auth = getAuth();
            const actionCodeSettings = {
                url: `http://localhost:8080/products/${this.$route.params.productId}`,
                handleCodeInApp: true,
            }
            await sendSignInLinkToEmail(auth, email, actionCodeSettings);
            alert('Fue enviado un link para loguearse al email provisto');
            window.localStorage.setItem('emailForSignIn', email);
        }

    },
    async created() {
        const auth = getAuth();
        if (isSignInWithEmailLink(auth, window.location.href)) {
            const email = window.localStorage.getItem('emailForSignIn');
            await signInWithEmailLink(auth, email, window.location.href);
            alert('Succesfully signed in');
            window.localStorage.removeItem('emailForSignIn');
        }

        const response = await axios.get(`http://127.0.0.1:8000/api/products/${this.$route.params.productId}`);
        const product = response.data;
        this.product = product;
        if(this.user) {
            const cartResponse = await axios.get(`/api/users/${this.user.uid}/cart`);
            const cartItems = cartResponse.data;
            this.cartItems = cartItems;
        }
        

    }
    
}
</script>