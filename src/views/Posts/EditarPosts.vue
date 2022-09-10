<template>
    <div>
        <b-container fluid>
  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-small">ID:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-small"  v-model="post.id" size="sm" placeholder="ID"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-default">TITULO:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-default" v-model="post.title" placeholder="TITULO"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-default">DESCRIPCION:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-default" v-model="post.body" placeholder="DESCRIPCION"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-large">USER ID:</label>
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-large" v-model="post.userId" size="lg" placeholder="USER ID"></b-form-input>
    </b-col>
  </b-row>
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


        },

        mounted: {

        },
    }
    </script>
