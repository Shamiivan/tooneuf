<template>
    <div id="canva">
        <h1>Canvas</h1>
        <p>Here will go the mighty canvas</p>
        <Views></Views>
        <Inputs></Inputs>
        <TextInput></TextInput>
        <div class="img"></div>
      </div>
  </template>
  
  <script>
import TextInput from "@/components/TextInput.vue";
import Inputs from "@/components/Inputs.vue";
import Views from "@/components/views.vue";
  export default {
    name: "Canva",
    components:{
        TextInput,
        Inputs,
        Views
    }

  };
  </script>
  
  <style lang="scss" scoped>
    #canva {
    display: flex;
    flex-direction: column;
    justify-content: center;
    }
.img {
  background-image: url("https://image.freepik.com/free-vector/cup-mockup_1053-247.jpg");
  width: 725px;
  height: 581px;
  position: relative;
  left: 200px;;
}
    </style>