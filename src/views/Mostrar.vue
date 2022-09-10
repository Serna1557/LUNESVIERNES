
<template>
    <div>
        <div class="">
            <b-button v-b-tooltip.hover title="Nuevo Registro" variant= "primary" @click="Nuevo()">
            <b-icon icon="plus-lg" aria-hidden="true"></b-icon>Nuevo Registro
            </b-button>

        <table class="table">
            <thead>
                <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>DNI</th>
                <th>Telefono</th>
                <th>Correo</th>
                <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="lista in listapacientes2" :key="lista.pacientes">
                    <td>{{lista.PacienteId}}</td>
                    <td>{{lista.Nombre}}</td>
                    <td>{{lista.DNI}}</td>
                    <td>{{lista.Telefono}}</td>
                    <td>{{lista.Correo}}</td>
                    <td>
                        <b-button v-b-tooltip.hover title="Eliminar Registro" variant= "danger" @click="Eliminar(lista.PacienteId)">
                        <b-icon icon="trash" aria-hidden="true"></b-icon>
                        </b-button>
                        <br>
                        <br>
                        <b-button v-b-tooltip.hover title="Editar Registro " variant= "success" @click="Editar(lista.PacienteId)">
                        <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
                        </b-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>

import axios from 'axios';

export default{
    name:"ejercicio",
    data(){
        return{
    listapacientes2:null
        }
    },
    componentes:{

    },
    methods:{

        Nuevo(){
            this.$router.push('/registrar')
        },

        Editar(Id){
            this.$router.push('/editar/'+Id);
        },

        Eliminar(Id){
            if(confirm("desea eliminar el registro")){
                let direccion=`https://api.solodata.es/pacientes/${Id}`;
                axios.delete(direccion).then(data=>{
                })
            }
        }

    },
    mounted:function(){
      let direccion="https://api.solodata.es/pacientes?page=1";
      axios.get(direccion).then(data=>{
        this.listapacientes2=data.data;
      })
    }
}
</script>
<style scoped>
    .izquierda{
        text-align: left;
    }

</style>