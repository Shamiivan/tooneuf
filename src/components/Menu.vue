<template>
    <div id="menu">
        <svg class="menu-burger" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 7H18" stroke="#2329D6" stroke-linecap="round"/>
          <path d="M6 12H18" stroke="#1C21B7" stroke-linecap="round"/>
          <path d="M6 17H18" stroke="#2329D6" stroke-linecap="round"/>
          </svg>
      </div>
  </template>
  
  <script>

  
  export default {
    name: "Menu",
  };
  </script>
  
  <style lang="scss">
    #menu {
        padding: 15px;
        /* width: 209px;
        height: 334px; */
        border: solid 2px black;
        height: 30vh;
        display: flex;
        justify-content: flex-start;

    }

    .menu-burger{

    }
    </style>