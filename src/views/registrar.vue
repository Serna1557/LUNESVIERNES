
<template>

            <b-container fluid>

                <b-col sm="9">
                <label :id="nombre">nombre</label>
                <input type="text" v-model="nombre">
                </b-col>
                <br>

                <b-col sm="9">
                <label :id="DNI">DNI</label>
                <input type="text" v-model="DNI">
                </b-col>
                <br>


                <b-col sm="9">
                    <label :id="correo">correo</label>
                    <input type="text" v-model="correo">
                    </b-col>
                    <br>


                    <b-col sm="9">
                        <label :id="codigopostal">codigopostal</label>
                        <input type="text" v-model="codigopostal">
                        </b-col>
                        <br>

                <b-col sm="9">
                    <label :id="genero">genero</label>
                    <input type="text" v-model="genero">
                    </b-col>
                    <br>

                <b-col sm="9">
                    <label :id="telefono">telefono</label>
                    <input type="text" v-model="telefono">
                    </b-col>
                    <br>


                <b-col sm="9">
                    <label :id="fecha_nacimiento">fecha_nacimiento</label>
                    <input type="text" v-model="fecha_nacimiento">
                    </b-col>
                    <br>

                <b-col sm="9">
                    <label :id="token">token</label>
                    <input type="text" v-model="token">
                    </b-col>
                    <br>


            </b-container>



</template>