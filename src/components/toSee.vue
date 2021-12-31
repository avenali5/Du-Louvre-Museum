<template>
  <div class="whole-see-container" id="programm">
    <div class="see-container">
        <div class="first-part">
            <h3 class="title" v-html="title" data-aos="fade-right" data-aos-offset="300"></h3>
            <p class="description" data-aos="fade-right" data-aos-offset="300">The museum is seizing the opportunity in this year of commemorations to gather as many of the artist’s paintings as possible around the <span>five core works</span> in its collection.</p>
            <div class="scroll flex-center">
                <p class="title" v-html="scroll"></p>
                <img :src="arrow" alt="" class="arrow">
            </div>
        </div>
        <div class="gallery" id="gallery">
            <div class="card light-text" v-for="(card, index) in cards" :key="index">
                <img :src="card.img" alt="">
                <div class="text-container">
                    <span class="time title" v-html="card.time"></span>
                    <h4 class="title" v-html="card.title"></h4>
                    <p v-html="card.text"></p>
                </div>
            </div>
        </div>
    </div>
    <div class="carousel-container">
        <carousel/>
    </div>
    <img class="leo-text" src="../assets/secondary-resources/leonardo-text.png" alt="">
    <div class="ex-carousel">
        <div v-for="(item, index) in flex" :key="index" class="flex-container flex-center" >
            <div class="text-container">
                <h3 class="title" v-html="item.title"></h3>
                <p v-html="item.text"></p>
            </div>
            <div class="img-container">
                <img :src="item.img" alt="" data-aos="zoom-in" data-aos-offset="300">
                <div class="hover-container flex-center">
                    <p class="title">tap on the image</p>
                    <img src="../assets/icons/hover.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="part-container flex-center">
            <img class="part" src="../assets/parts/part5.svg" alt="">
    </div>
    <p class="cite text-center" v-html="cite"></p>
  </div>
</template>

<script>
import carousel from '../components/carousel.vue'
import { slider, isDown, startX, scrollLeft} from '../variables.js'

export default {
    name:'toSee',
    data(){
        return{
            title:'What will you see?',
            scroll:'Scroll right',
            arrow:require('../assets/icons/arrow.png'),
            cards:[
                {
                    img:require('../assets/galeria/mona.png'),
                    time:'1503–1506',
                    title:'Mona Lisa',
                    text:'The “Gioconda” or Mona Lisa, probably the most famous portrait in the world.The woman depicted is Lisa Gherardini, i.e. “Mona” (short for “Madonna” , “Signora”), the wife of the noble Florentine merchant Francesco del Giocondo (thus the term “Gioconda” is also used).',
                },
                {
                    img:require('../assets/galeria/belle.png'),
                    time:'1490-1497',
                    title:'La Belle Ferronnière',
                    text:`Leonardo had painted a portrait of Sforza's previous mistress, Cecilia The painting is also known as 'La Belle Ferronnière,' after the headband with a jewel worn by the subject.`,
                },
                {
                    img:require('../assets/galeria/virgin.png'),
                    time:'1492-1506',
                    title:'Virgin of the Rocks',
                    text:'This mysterious painting by Leonardo da Vinci shows the Virgin, Christ, Saint John, and an angel in a dark landscape, which is what makes the image so striking and so unusual',
                },
                {
                    img:require('../assets/galeria/saint-john.png'),
                    time:'1513-1516',
                    title:'Saint John the Baptist',
                    text:'It is believed to be Leonardo’s last painting. The pointing gesture  Many people are critical of this work, because St. John seems almost to be a hermaphrodite.',
                },
                {
                    img:require('../assets/galeria/madonna.png'),
                    time:'1503-1519',
                    title:'Madonna and Saint Anne',
                    text:'Saint Anne, the Virgin Mary and the Infant Jesus – three generations, two the fruit of immaculate conception – are portrayed in a landscape.',
                },
            ],
            cite:'<span class="quote">“</span>He used a very particular and original method of work based on science',
            flex:[
                {
                    title:'Notebooks and infrared technology',
                    text:"The exhibition provide a deeper understanding of the artist's working methods using his notebooks and infrared imaging technology. This technique  allow us to see initial Leonardo’s drafts and how he perfected his compositions.",
                    img:require('../assets/carousel/notebooks.png')
                },
                {
                    title:'‘Science of painting’',
                    text:"You will know how Leonardo placed utmost importance on painting, and how his study of the world — which he referred to as ‘the science of painting’ — was the vessel of an art through which he sought to give life to his paintings.",
                    img:require('../assets/carousel/science.png')
                },
                {
                    title:'Unique documets',
                    text:"We shed light on Leonardo’s biography through the exhaustive reexamination of historical documentation, providing access to his artistic universe and relationship to painting.",
                    img:require('../assets/carousel/documents.png')
                }
            ],
            Slider: slider,
            IsDown:isDown,
            StartX:startX,
            ScrollLeft: scrollLeft,
        }
    },
    components:{
        carousel
    }, 
}
</script>

<style scoped>
.whole-see-container{
    position:relative;
    background:var(--white-color);
    overflow-x: none;
}
.see-container{
    display:flex;
    flex-direction: column;
}
.first-part{
    padding:2rem;
}
.first-part h3{
    font-size: 2rem;
    width:50%;
    margin-bottom:2rem;
}
.first-part p span{
    color:var(--yellow-color);
    font-weight:700 ;
}
.scroll{
    justify-content: flex-end;
    margin:2rem 0
}
.scroll p{
    margin-right:.5rem;
    font-size: 1.2rem;
}
.gallery{
    display:grid;
    grid-template-columns: repeat(5,minmax(344px,344px));
    grid-template-rows: minmax(679px,679px);
    width:100%;
    overflow-x: auto;
    -webkit-user-select: none;
    -webkit-user-drag: none;
}
.gallery::-webkit-scrollbar{
    background:var(--yellow-color);
}
.gallery::-webkit-scrollbar-thumb{
    cursor:grab;
    background:var(--brown-color);
}
.card{
    display:flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: flex-end;
    transition:all .5s;
    position:relative;
    overflow:hidden;
}
.card img{
    width: 100%;
    height:100%;
    position:absolute;
    transition:all .9s;
}
.gallery .text-container{
    z-index: 10000;
    padding:2rem;
    padding-bottom:4rem
}
.card span{
    font-size: 1.2rem;
    color:var(--white-traslucid);
    transition:all .5s
}
.card h4{
    font-size: 2.5rem;
    transition:all .5s;
    margin:1rem 0;
}
.card p{
    visibility: hidden;
    opacity: 0;
    transition: all .9s;
    position:absolute;
}
.card:hover img{
    filter: brightness(.6);
}
.card:hover p{
    visibility: visible;
    opacity: 1;
    position:relative
}
.carousel-container{
    padding:2rem;
    position:relative;
    border:3px dashed rgba(0, 0, 0, 0.151);
}
.carousel-card h3{
    font-size: 2rem;
}
.cite{
    font-size: 1.7rem;
    margin-top:2rem;
    padding-bottom:3rem;
    width:72%;
    position: relative;
    left:50%;
    transform: translateX(-50%);
}
.ex-carousel{
    display:none;
}
.leo-text{
    display:none;
}
@media(min-width:768px){
    .see-container{
        flex-direction: row;
        align-items: center;
        position:relative;
    }
    .see-container h3{
        font-size: 3rem;
        width:70%
    }
    .first-part{
        width:70%;
    }
    .scroll{
        position:absolute;
        bottom:0;
    }
    .carousel-container{
        display:none
    }
    .ex-carousel{
        display:block;
        border:5px dashed rgba(128, 128, 128, 0.397)
    }
    .leo-text{
        display: block;
        position:relative;
        left:-15rem;
        padding:3rem 0;
    }
    .flex-container{
        padding:2rem;
        justify-content: space-between;
        position:relative;
    }
    .flex-container .text-container{
        width:50%
    }
    .flex-container .text-container h3{
        font-size: 2.5rem;
        position:relative;
        margin-bottom:.5rem
    }
    .flex-container .text-container h3::before{
        content:'';
        position:absolute;
        background:none;
        border:1px solid grey;
        border-radius: 200px;
        height:5rem;
        width:5rem;
        top: -2rem;
        left:-1rem
    }
    .flex-container:nth-child(2){
        flex-direction: row-reverse;
    }
    .flex-container .hover-container{
        justify-content: flex-start;
    }
    .flex-container .hover-container p{
        font-size: 1.5rem;
        margin-right:.5rem
    }
    .flex-container:nth-child(3) .hover-container{
        display:none
    }
    .flex-container .img-container img{
        position:relative;
        cursor:alias
    }
    .flex-container:nth-child(1) .img-container::after{
        content:"";
        background:url('../assets/carousel/notebooks-hover.png') no-repeat;
        background-position: center;
        background-size: cover;
        position:absolute;
        width:40%;
        height:80%;
        top:2rem;
        left:50%;
        transform:translateX(-50%);
        opacity:0;
        pointer-events: none;
        transition:all .5s;
        box-shadow: 0 5px 10px rgba(0,0,0,.3);
    }
    .flex-container:nth-child(1) .img-container:hover::after{
        opacity:1;
    }
    .flex-container:nth-child(2) .img-container::after{
        content:"";
        background:url('../assets/carousel/science-hover.png') no-repeat;
        background-position: center;
        background-size: cover;
        position:absolute;
        width:50%;
        height:100%;
        top:0;
        left:50%;
        transform:translateX(-50%);
        opacity:0;
        pointer-events: none;
        transition:all .5s;
        box-shadow: 0 5px 10px rgba(0,0,0,.5);
    }
    .flex-container:nth-child(2) .img-container:hover::after{
        opacity:1;
    }
    .cite{
        font-size: 2.7rem;
        padding-bottom:10rem
    }
}
@media(min-width: 1050px){
    .whole-see-container{
        overflow: hidden;
        padding-left:2rem;
    }
    .see-container,
    .ex-carousel{
        position:relative;
        left:50%;
        transform: translateX(-50%);
        max-width: 65rem;
        border:none;
    }
    .first-part{
        width:90%;
    }
    .first-part h3{
        width:45%
    }
    .first-part .description{
        width:60%
    }
    .part{
        top:20%;
    }
    .flex-container{
        justify-content: space-evenly;
    }

}
</style>