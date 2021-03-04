import Vue from "vue";
import Vuex from "vuex";
import { fabric } from 'fabric';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {


  },
  mutations: {
    increment(state, payload){
      state.counter += payload.value;
    },
    addRect (state,canvas) {
        const rect = new fabric.Rect(state.rectangle);
        canvas.add(rect);
    },
    // changeColor(state) {
  
    // }
   
  },
  actions: {},
  modules: {}
});
