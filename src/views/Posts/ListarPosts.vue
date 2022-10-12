<template>
    <div>
        <b-button size="sm" @click="nuevo()" variant="danger" class="mb-2">NUEVOREGISTRO
        <b-icon icon='pencil-fill' aria-hidden="true">NUEVOREGISTRO</b-icon>
        </b-button>



        <b-form-input :id="buscar" type="search" v-model="filter"></b-form-input>
        <b-table :filter="filter" id="my table" :items="listap" :fields="fields" class="my-table" :per-page="perPage" :current-page="currentPage">

<template #cell(ACCIONES)="row" >
    <b-button size="sm" @click="eliminar()" variant="danger" class="mb-2">
        <b-icon icon='trash-fill' aria-hidden="true"></b-icon>
        </b-button>

        <b-button @lick="editar(row.item.id)" size="sm" variant="primary" class="mb-2">
        <b-icon icon='pencil-fill' aria-hidden="true"></b-icon>
        </b-button>
</template>

        </b-table>
        <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        ></b-pagination>

    </div>
</template>

<script>
import axios from 'axios'

export default{
    name: 'ListarPosts',
    data() {
        return{
            fields:[
            {key:'id',label:'#'},
            {key:'title',label:'titulo'},
            {key:'body',label:'Descripcion'},
            "ACCIONES"
            ],
            filter:null,
            currentPage:1,
            rows:100,
            perPage:10,
            listap:null,
        }
    },

    component:{

    },

    computed:{

    },

    methods:{
    eliminar(){
        alert("eliminar")
    },
    editar(id){
        this.$router.push("/EditarPosts/"+id)
    },
    nuevo(){
        this.$router.push("/nuevoregistro")

    }

    },

    mounted: function(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(data=>{
            this.listap=data.data;
        });
    },
}
</script>