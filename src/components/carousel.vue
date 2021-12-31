<template>
  <div>
    <VueSlickCarousel :arrows="false" :dots="true">
      <div class="carousel-card" v-for="(card,index) in card" :key="index">
        <h3 class="title" v-html="card.title"></h3>
        <p v-html="card.text"></p>
        <div class="scroll flex-center">
            <p class="title" v-html="scroll"></p>
            <img :src="arrow" alt="" class="arrow">
        </div>
        <img :src="card.img" alt=""/>
      </div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'carousel',
    components: { VueSlickCarousel },
    data(){
        return{
            scroll:'Scroll right',
            arrow:require('../assets/icons/arrow.png'),
            card:[
                {
                    title:'Notebooks and infrared technology',
                    text:`The exhibition provide a deeper understanding of the artist's working methods using his notebooks and infrared imaging technology. This technique  allow us to see initial Leonardo’s drafts and how he perfected his compositions.`,
                    img:require('../assets/carousel/notebooks.png')
                },
                {
                    title:'‘Science of painting’',
                    text:'You will know how Leonardo placed utmost importance on painting, and how his study of the world — which he referred to as ‘the science of painting’ — was the vessel of an art through which he sought to give life to his paintings.',
                    img:require('../assets/carousel/science.png')
                },
                {
                    title:'Unique documents',
                    text:'We shed light on Leonardo’s biography through the exhaustive reexamination of historical documentation, providing access to his artistic universe and relationship to painting.',
                    img:require('../assets/carousel/documents.png')
                }
            ]
        }
    }
  }
</script> 

<style>
.carousel-card{
    outline:none
}
.carousel-card h3{
    font-size: 2rem;
    width:80%;
    margin:2rem 0
}
.carousel-card .scroll{
    justify-content: flex-start;
    margin:1rem 0
}
.carousel-card .scroll p{
    margin-right: .5rem;
    font-size: 1.2rem;

}
.slick-dots li button:before {
    font-family: 'slick';
    font-size:1rem;
    width: .5rem;
    height: .5rem;
    color:transparent;
    border:2px solid var(--yellow-color);
    border-radius: 100%;
    opacity:1;
}
.slick-dots li.slick-active button:before{
    color:var(--yellow-color);
    opacity:1;
    display:flex;
    align-items: center;
    justify-content: center;
}
</style>