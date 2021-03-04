<template>
    <div>
        <Rectangle></Rectangle>
        <canvas ref="can" width="1900" height="300"></canvas>
    </div>
  </template>
  
  <script>
  import { fabric } from 'fabric';
  import { eventBus } from '@/main';
  import Rectangle from "@/components/Rect.vue";
  export default {
    components: {
        Rectangle,
    },
    mounted() {
        const canvas = new fabric.Canvas(this.$refs.can);
        eventBus.$on('rect was created', (object)=>{
        let rect = new fabric.Rect(object);
        canvas.add(rect);
        console.log(rect.id);

        eventBus.$on('color was changed',(newColor)=>{
        console.log(newColor);
        rect.set({fill:'black'});
        canvas.renderAll();

    });
        
 });



    },
   
  };
  </script>