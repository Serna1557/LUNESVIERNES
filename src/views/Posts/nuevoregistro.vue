<template>
    <div>
        <b-container fluid>
  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-small">ID:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="id" name="id"  v-model="post.id" size="sm" placeholder="id"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-default">TITULO:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="title" name="title" v-model="post.title" placeholder="title"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-default">DESCRIPCION:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="body" name="body" v-model="post.body" placeholder="body"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-large">USER ID:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="userId" name="userId" v-model="post.userId" size="lg" placeholder="userId"></b-form-input>
    </b-col>
  </b-row>

<b-button @click="aceptar()" variant="success" class="mb-2">ACEPTAR
<b-icon icon='pencil-fill' aria-hidden="true">ACEPTAR</b-icon>
</b-button>

<b-button  @click="salir()" variant="primary" class="mb-2">SALIR
<b-icon icon='pencil-fill' aria-hidden="true">SALIR</b-icon>
</b-button>
                
</b-container>

    </div>
</template>

<script>
    import axios from 'axios'
    
    export default{
        name: '',
        data() {
            return{
            post:{
                id:null,
                title:null,
                body:null,
                userId:null

            }
            }
        },
    
        component:{
    
        },
    
        computed:{
    
        },
    
        methods:{
          aceptar(){
            axios.post('https://jsonplaceholder.typicode.com/posts/',this.post).then(data=>{
            this.$router.push("/ListaPosts");
          });
        },
          salir(){
            this.$router.push("/ListaPosts");
          },
        },
        
    
        mounted: function() {
         
        },

        }
  
    </script>