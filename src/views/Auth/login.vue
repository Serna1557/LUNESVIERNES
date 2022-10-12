<template>
<div>
<DIV class="wrapper">
    <div class="formContent">
        <div class="fadein">
            <img src="@/assets/logo.png" calss="icon">
            <div>
                <b-row class="my-1">
                <b-col sm="2">
                <label for="input-small">Email:</label>
                </b-col>
                <b-col sm="10">
                <b-form-input id="input-small" size="sm" placeholder="ingrese su E-mail"></b-form-input>
                </b-col>
                </b-row>
 
                <b-row class="my-1">
                <b-col sm="2">
                <label for="input-small">usuario:</label>
                </b-col>
                <b-col sm="10">
                <b-form-input id="input-small" size="sm" placeholder="ingrese su usuario"></b-form-input>
                </b-col>
                </b-row>
                <b-button variant="warning">ACEPTAR</b-button>
              </div>

        </div>

    </div>

</DIV>
</div>


</template>

<style>
.wrapper{
  width:100%;
  min-height:  100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:20px;

}
.formContent{
    padding: 30px;
    width: 90%;
    max-width: 450px;
    background-color: aquamarine;
    position: relative;
    text-align: center;
    -webkit-box-shadow: 0 30px 60px 0 rbga(0,0,0,0.3);
    border-radius: 10px 10px 10px 10 px

}

</style>