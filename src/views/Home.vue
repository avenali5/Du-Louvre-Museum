<template>
  <div class="home">
    <navBar/>
    <heroSection/>
    <About/>
    <Numbers/>
    <toDoList/>
    <toSee/>
    <seeMore/>
    <tickets/>
    <VR_Plan/>
    <faqq/>
    <maps/>
    <Footer/>
  </div>
</template> 

<script>
// @ is an alias to /src
import navBar from '../components/navBar.vue'
import heroSection from '../components/heroSection.vue'
import About from '../components/About.vue'
import Numbers from '../components/Numbers.vue'
import toDoList from '../components/toDoList.vue'
import toSee from '../components/toSee.vue'
import seeMore from '../components/seeMore.vue'
import tickets from '../components/Tickets.vue'
import VR_Plan from '../components/VR-Plan.vue'
import faqq from '../components/Faq.vue'
import maps from '../components/maps.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components:{
    navBar,
    heroSection,
    About,
    Numbers,
    toDoList,
    toSee,
    seeMore,
    tickets,
    VR_Plan,
    faqq,
    maps,
    Footer
  }
}
</script>
