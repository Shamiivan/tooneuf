<template>
    <div id="nav" class="">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
  </template>
  
  <script>

  
  export default {
    name: "Navbar",

  };
  </script>
  
  <style lang="scss">
    #nav {
      padding: 20px;
      background-color: #42b983;
      /* height: 30px; */
      a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          color:aliceblue;
        }
      }
    }
    </style>