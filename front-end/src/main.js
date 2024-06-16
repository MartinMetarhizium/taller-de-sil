import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import * as VueRouter from 'vue-router';
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCiZtVDW5jwXeSZimPlTpbvV_ottWyM1w0",
  authDomain: "vue-project-3be05.firebaseapp.com",
  projectId: "vue-project-3be05",
  storageBucket: "vue-project-3be05.appspot.com",
  messagingSenderId: "831257046333",
  appId: "1:831257046333:web:3b1c37ebf02a73fae82954"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes:[{
        path: '/cart',
        component: ShoppingCartPage,
    }, {
        path: '/products',
        component: ProductsPage,
    }, {
        path: '/products/:productId',
        component: ProductDetailPage,
    }, {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage,
    }, {
        path: '/',
        redirect: '/products',
    },
]
}))
.mount('#app')
