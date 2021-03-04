<template>
    <div id="inputs">
    <ul>
        <li><svg width="145" height="32" viewBox="0 0 145 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="145" height="32" fill="white"/>
            <path d="M57 22L59.0833 17M67 22L64.9167 17M59.0833 17L62 10L64.9167 17M59.0833 17H64.9167" stroke="#2329D6" stroke-linecap="round"/>
            <circle cx="73" cy="18" r="4" stroke="#2329D6" stroke-linecap="round"/>
            <line x1="76.5" y1="13.5" x2="76.5" y2="22.5" stroke="#2329D6" stroke-linecap="round"/>
            <path d="M33 12L34 8H41M49 12L48 8H41M41 8V24M41 24H37M41 24H45" stroke="#2329D6" stroke-linejoin="round"/>
            <rect x="24" y="7" width="18" height="18" transform="rotate(90 24 7)" stroke="#2329D6" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 18L10 14L21 25" stroke="#2329D6" stroke-linecap="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 14C17.8807 14 19 12.8807 19 11.5C19 10.1193 17.8807 9 16.5 9C15.1193 9 14 10.1193 14 11.5C14 12.8807 15.1193 14 16.5 14Z" stroke="#2329D6"/>
            <path d="M16.5 20.5L24 13" stroke="#2329D6"/>
            </svg>
        </li>
        <li>
            <svg class= "plus" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12H4" stroke="#2329D6" stroke-linecap="round"/>
            <path d="M12 4V20" stroke="#2329D6" stroke-linecap="round"/>
            </svg>
        </li>


    </ul>
      </div>
  </template>
  
  <script>

  
  export default {
    name: "Inputs",

  };
  </script>
  
  <style lang="scss" scoped>
    #inputs{
      position: relative;
    z-index: 10;
    top:355px;
    display:flex;

    }
    li{
      list-style: none;
    }
    </style>