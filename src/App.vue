<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration: 600,
  once:true
});
export default {
  
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Montserrat;
  scroll-behavior: smooth;
}
body{
}
:root{
  --z-back: -10;
  --z-normal: 1;
  --z-tooltip: 10;
  --z-fixed: 100;
  --z-modal: 1000;
  
  --yellow-color:#D1B05E;
  --white-color:#F0EEE1;
  --white-traslucid:#f0eee0b4;
  --brown-color:#100903;
  --brown-traslucid:#110a03cc;
  --button-hover:#d1ceb7;
  --active-button:#d6c7c7;
}
a{
  text-decoration: none;
}
ul{
  list-style-type: none;
}
.dark-text{
  color:hsla(28,68,4,1);
}
.light-text{
  color:var(--white-color)
}
.main-button{
  background:var(--yellow-color);
  padding: .7rem 3rem;
  font-weight: 600;
  border-radius: 200px;
  color:#110a03;
  font-size: .8rem;
  outline:none;
  border:none;
  transition:all .5s
}
.main-button:hover{
  background:var(--button-hover)
}
.main-button:active{
  background:var(--active-button);
  outline:none;
  border:none;

}
.flex-center{
  display:flex;
  align-items:center;
  justify-content: center;
}
.max-width{
  position:relative;
  left:50%;
  transform:translateX(-50%);
  max-width: 40rem;
}
.title{
  font-family: Cormorant,serif;
  font-weight: 700;
}
.cite{
  font-family: Cormorant;
  font-style: italic;
}
.text-center{
  text-align:center
}
.quote{
  font-family: Passion One;
  font-style: normal;
  font-size: 4rem;
}
.part-container{
  align-items: cente;
  justify-content: flex-end;
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  height:100%;
  width: 100%;
  display:none;
  pointer-events: none;
}
.part{
  position:absolute;
  left:0;
  top:50%;
  transform: translateY(-50%);
}
@media(min-width:1200px){
  .part-container{
    display:block
  }
}
@media(min-width: 1600px){
  .part-container{
    left:50%;
    transform: translate(-50%,-50%);
    max-width: 90rem;
  }
}
</style>
