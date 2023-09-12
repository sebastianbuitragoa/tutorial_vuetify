import {createWebHistory, createRouter } from "vue-router"
import Compras from '../components/compras_com.vue'
import Ventas from '../components/ventas_com.vue'
import usuarios from '../components/usuarios_com.vue'
import login from '../components/crear_usuarios.vue'

const routes = [
{path:"/",name: "Compras",component: Compras,},
{path:"/Ventas",name:"Ventas",component: Ventas,},
{path:"/usuarios",name:"usuarios",component: usuarios,},
{path:"/login",name:"login",component: login,},
];
const router=createRouter({
    history: createWebHistory(),routes,
});
export default router;