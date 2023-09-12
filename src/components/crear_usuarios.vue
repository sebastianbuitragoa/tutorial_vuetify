<template>
    <v-container>
    <h1> crear usuario</h1>
    <v-btn type="submit" v-on:click="createUsuario()">Ingresar Usuario</v-btn>
</v-container>
  </template>
  
  <script> 
import db from '../firebase/init.js'
import { collection, addDoc } from 'firebase/firestore';

export default{
created(){
  this.createUsuario
},
methods:{
async createUsuario(){
const colRef =collection(db,'user')
const doc ={
id: '2',
indentificacion:1005328754,
usuario:'sebastian',
Nombre:'juan buitrago',
Direccion:"cr 21# 152-30",
contraseña:"123"
}
const docRef= await addDoc(colRef,doc);
console.log("Creo el usuario con nombre",docRef.id)
}
}
}
  </script>
  

  