<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <br>
      <router-link to="/about">About</router-link>
      <br>
      <router-link to="/Ejemplo">Ejemplo</router-link>
      <br>
      <router-link to="/Mostrar">Mostrar</router-link>
      <br>
      <router-link to="/registrar">registrar</router-link>
      <br>
      <router-link to="/editar">editar</router-link>
      <br>
      <router-link to="/ListarPosts">Posts</router-link>
      <br>
      <router-link to="/EditarPost">EditarPost</router-link>
      <br>
      <router-link to="/nuevoregistro">nuevoregistro</router-link>
      <br>
      <router-link to="/login">login</router-link>
      <br>
      <router-link to="/register">register</router-link>

    </nav>
    <router-view/>
  </div>
</template>

