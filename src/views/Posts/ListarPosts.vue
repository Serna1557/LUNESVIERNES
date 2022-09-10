<template>


<div>
    <table>
        <thead>
            <tr>
                <th> ID</th>
                <th> TITULO</th>
                <th> DESCRIPCION</th>
                <th> ID_USER</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="listap in listap" :key="listap.id">
                <td> {{listap.id}}</td>
                <td> {{listap.title}}</td>
                <td> {{listap.body}}</td>
                <td> {{listap.userId}}</td>

                <td>
                    <b-button size="sm" @click="eliminar()" variant="danger" class="mb-2">
                        <b-icon icon='trash-fill' aria-hidden="true"></b-icon>
                        </b-button>
        
                        <b-button size="sm" @click="editar(listap.id)" variant="primary" class="mb-2">
                        <b-icon icon='pencil-fill' aria-hidden="true"></b-icon>
                        </b-button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>

<script>

import axios from 'axios'
export default{
    name:'ListarPosts',
    data(){
        return{
        listap:null,
        }
    },
    components:{

    },
    computed:{

    },
    methods: {
       eliminar(){
        alert("eliminar")
},
editar(){
    this.$router.push("/EditarPosts")
}
    },
    mounted: function(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(data=>{
        this.listap=data.data;
        });
    },
}

</script>