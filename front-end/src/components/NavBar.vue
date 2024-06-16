<template> 
    <div class="nav-bar">
        <router-link to="/products" class="products-link">
            <div class="logo-wrap">
                <img :src="logo" style="height: 120px; border-radius: 40%;" />
            </div>
        </router-link>
        <div class="cart-link">
            <button @click="signOut" v-if="user">Sign out</button>
            <router-link to="/cart" >
                <button>Carrito</button>
            </router-link>
        </div>
    </div>
</template>


<script>
import { getAuth, signOut} from 'firebase/auth'
import logo from '@/assets/logosil.jpg'

export default {
    name: "NavBar",
    props: ['user'],
    data() {
        return {
            logo,
        }
    },
    methods: {
        signOut(){
            const auth = getAuth();
            signOut(auth);
        }
    }
}
</script>