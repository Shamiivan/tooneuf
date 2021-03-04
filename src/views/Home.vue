<template>
  <div id="home">
    <div class="nav">
    <svg class="back" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12L3 12" stroke="#2329D6" stroke-linecap="round"/>
      <path d="M9 6L3 12L9 18" stroke="#2329D6" stroke-linecap="round"/>
      </svg>
      <h1 class="title">Design studio</h1>
    </div>
    
    <Canvas></Canvas>  

    <div class="container flex display-none">
      <Menu class="display-none menu"></Menu>
      <Canva class="display-none canva"></Canva>
    </div> 
    <Stylers class="display-none"></Stylers> 
    
  </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from "@/components/Navbar.vue";
import Menu from "@/components/Menu.vue";
import Canva from "@/components/Canva.vue";
import Stylers from "@/components/Stylers.vue";
import Canvas from "./Canvas.vue";



export default {
  name: "Home",
  components: {
    // Navbar,
    Menu,
    Canva,
    Stylers,
    Canvas,

  }
};
</script>
 <style lang="scss">
  #home {
    height: 100px;
  }
  .nav{
    display: flex;
    align-items:center;
    justify-content: space-evenly;
    margin-left:-600px;
    background-color: #0CA4AD;
  }
.title{
color:white;
}
.container.flex{
 /* display: flex; */

}
.menu{
  flex: 1 1 auto;
}
.canva{
  flex: 3 1 auto;
  padding-right: 12rem;

}
.display-none{
  display: none;
}
  </style>
