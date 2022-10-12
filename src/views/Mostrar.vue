<template>
    <div>
            <div class="">
                <b-button v-b-tooltip.hover title="Nuevo Registro" variant= "primary" @click="Nuevo()">
         <b-icon icon="plus-lg" aria-hidden="true"></b-icon> Nuevo Registro
         </b-button>

                <b-form-input :id="buscar" type="search" v-model="filter"></b-form-input>
    <b-table :filter="filter" id="my-table" :items="Listapacientes" :fields="fields" class="my-table" :per-page="perPage"
    :current-page="currentPage">
    <template #cell(ACCION)="row">
          <b-button   v-b-tooltip.hover title="Editar Registro" variant="success" @click="Editar(row.item.PacienteId)">
          <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
          </b-button>
          <b-button v-b-tooltip.hover title="Eliminar Registro" variant= "danger" @click="Eliminar()">
          <b-icon icon="trash2-fill" aria-hidden="true"></b-icon>
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
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"Dashboard",
    data(){
        return {
            fields:[
            {key:'PacienteId', label:'PacienteId'},
            {key:'Nombre', label:'Nombre'},
            {key:'DNI', label:'DNI'},
            {key:'Telefono', label:'Telefono'},
            {key:'Correo', label:'Correo'},
            "ACCION"

            ],
            currentPage: 10,
            rows:10,
            perPage:2,
            Listapacientes:null,
            fields:null,
        }
    },
    components:{
    },
    methods:{
        Nuevo(){
        this.$router.push("/Registrar")
        },
        Editar(id){
            this.$router.push('/Editar/'+id)
        },
        Eliminar(id){
                if(confirm("¿Desea eliminar el registro?")){
            let direccion=`https://api.solodata.es/pacientes/${id}`;
                axios.delete(direccion).thesn(response=>{
                }).catch(error=>{
                    console.log(error);
                })

                }

            }

    },
    mounted:function(){
        let direccion = "https://api.solodata.es/pacientes2?page=1";
        axios.get(direccion).then( data =>{
            this.Listapacientes = data.data.pacientes
        });
    }
}
</script>
<style  scoped>
    .izquierda{
        text-align: left;
    }
</style>