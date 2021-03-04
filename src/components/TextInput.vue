<template>
    <div id="text">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2851 19.3875C20.2851 13.0984 14.9401 9 8.34683 9L5 9V9" stroke="#2329D6" stroke-linecap="round"/>
            <path d="M9 4L4 9L9 14" stroke="#2329D6" stroke-linecap="round"/>
            <ellipse cx="7" cy="19.5" rx="1" ry="1.5" fill="white"/>
            <ellipse cx="7" cy="19.5" rx="1" ry="1.5" fill="white"/>
            <ellipse cx="7" cy="19.5" rx="1" ry="1.5" fill="#0CA4AD"/>
            </svg>
            
       <textarea name="" id="" cols="30" rows="5">Add your text here</textarea>

       <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 10.5V12.75C12.5 14.4069 11.3807 15.75 10 15.75H6.26354C5.46903 15.75 4.72183 15.2968 4.25064 14.5292L2.09089 11.0106C1.75943 10.4706 1.84236 9.71291 2.27878 9.29395C2.72348 8.86704 3.3646 8.90991 3.76702 9.39345L5 10.875V9.75H5.00246L5 8.25L5.01091 4.875C5.01091 4.25368 5.43064 3.75 5.94841 3.75C6.46617 3.75 6.88591 4.25368 6.88591 4.875V8.25V3.375C6.88591 2.75368 7.30564 2.25 7.82341 2.25C8.34117 2.25 8.76091 2.75368 8.76091 3.375V8.25V4.125C8.76091 3.50368 9.18064 3 9.69841 3C10.2162 3 10.6359 3.50368 10.6359 4.125V8.25V5.625C10.6359 5.00368 11.0556 4.5 11.5734 4.5C12.0912 4.5 12.5109 5.00368 12.5109 5.625L12.5037 10.5H12.5Z" stroke="#2329D6" stroke-linecap="square" stroke-linejoin="round"/>
        </svg>
        
      </div>
  </template>
  
  <script>

  
  export default {
    name: "TextInput",
    data() {
        return {
            message:'Type your text here'
        }
    },

  };
  </script>
  
  <style lang="scss" scoped>
    #text{
    position: relative;
    z-index: 10;
    top:355px;
    }
    </style>