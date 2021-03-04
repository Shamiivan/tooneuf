<template>
    <div>
        <button @click="createRect"> Add a rectangle</button>
        <button @click="changeColor"> Change the color to black</button>
    </div>
   
  </template>
  
  <script>
//   import { fabric } from 'fabric';
  import { eventBus } from '@/main';
  
  export default {
     data: function() {
         return {
           color:'red',
         }
        
     },
    mounted() {


    // eventBus.$on('color was changed',(newColor)=>{
    //     console.log(newColor);
    //     rect.set({fill:'black'});
    //     canvas.renderAll();

    // });

    },
    computed:{
        count() {
            return this.$store.state.counter
        },
        rectangle() {
            return this.$store.state.rectangle
        }
        
    },

    methods: {
        createRect() {
            eventBus.$emit('rect was created',{
            id: this.generateId(),
            left: 400,
            top: 100,
            fill: this.color,
            width: 50,
            height: 50
            });
        },
        changeColor(){
            let color ='black'
            eventBus.$emit('color was changed', color)

        },
        generateId(){
        return '_' + Math.random().toString(36).substr(2, 9);
        },
    },
  };
  </script>