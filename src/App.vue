<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/Ejemplo">Ejemplo</router-link>
      <router-link to="/Mostrar">Mostrar</router-link>
      <router-link to="/registrar">registrar</router-link>
      <router-link to="/editar">editar</router-link>
      <router-link to="/ListarPosts">Posts</router-link>
      <router-link to="/EditarPost">EditarPost</router-link>

    </nav>
    <router-view/>
  </div>
</template>

