<template>
  <div class="whole-maps-container">
    <div class="maps-container light-text">
        <h3 class="title" v-html="title"></h3>
        <div class="flex-container flex-center">
            <div class="info-container">
                <div class="adress" data-aos="fade-right" data-aos-offset="300">
                    <h4 v-html="adress.title"></h4>
                    <p v-html="adress.text"></p>
                </div>
                <div class="metro" data-aos="fade-right" data-aos-offset="300">
                    <h4 v-html="metro.title"></h4>
                    <p v-html="metro.text"></p>
                </div>
            </div>
            <img :src="dash" alt="" class="dashed">
            <div class="img-container"></div>
        </div>
        <div class="google-container">
            <VueGoogleMaps/>   
            <div class="vehicles">
                <h5 v-html="vehicles.bus.title"></h5>
                <p v-html="vehicles.bus.text"></p>
                <h5 v-html="vehicles.bike.title"></h5>
                <p v-html="vehicles.bike.text"></p>
                <h5 v-html="vehicles.car.title"></h5>
                <p v-html="vehicles.car.text"></p>
            </div>
            <img :src="dash" alt="" class="dashed2">
        </div>
    </div>
    <div class="part-container flex-center">
            <img class="part" src="../assets/parts/part11.svg" alt="">
    </div>
  </div>
</template>

<script>
import VueGoogleMaps from '../components/Map.vue'
export default {
    name:'maps',
    data(){
        return{
            title:'How to get to us?',
            dash:require('../assets/secondary-resources/dashed-path.svg'),
            adress:{
                title:'Adress',
                text:'Musée du Louvre, Rue de Rivoli, 75001 Paris, France. Hall Napoléon, under the Pyramid'
            },
            metro:{
                title:'Metro station',
                text:'Palais-Royal Musée du Louvre (lines 1 and 7) and Pyramides (line 14)'
            },
            vehicles:{
                bus:{
                    title:'Bus:',
                    text:'no. 21, 24, 27, 39, 48, 68, 69, 72, 81, 95'
                },
                bike:{
                    title:'Vélib’ bike-rental stations:',
                    text:'No. 1015: 2 Place André Malraux<br>No. 1023: 165 Rue Saint-Honoré<br>No. 1014: 5 Rue de l’Echelle<br>No. 1013: 186 Rue Saint-Honoré<br>',
                },
                car:{
                    title:'Car:',
                    text:'underground parking is available on Avenue du Général Lemonier. It is open daily from 7 a.m. to 11 p.m.'
                }
            }
        }






    },
    components:{
        VueGoogleMaps
    }
}
</script>

<style scoped>
.whole-maps-container{
    background:var(--brown-color);
    position:relative;
}
.maps-container{
    padding-bottom:3rem
}
.maps-container .title{
    font-size: 2rem;
    padding:2rem 2rem 0 2rem;
}
.maps-container .flex-container{
    flex-direction: column;
}
.flex-container .info-container{
    padding:2rem;
}
.info-container h4{
    margin-bottom:1rem;
    color:var(--yellow-color)
}
.info-container p{
    margin-bottom:2rem;
}
.dashed,
.dashed2{
    display:none
}
.google-container{
    position: relative;
    display:flex;
    flex-direction: column;
}
.img-container{
    background:url('../assets/museum.png')no-repeat center center/cover;
    width: 100%;
    height:20rem;
    position: relative;
}
.img-container::before{
    content: '';
    position:absolute;
    left:0;
    top:0;
    width:30%;
    height:100%;
    background:linear-gradient(to right, var(--brown-color),transparent);
    z-index: var(--z-modal);
}
.vehicles{
    position:relative;
    left:50%;
    transform:translateX(-50%);
    padding:2rem;
    box-shadow: 0 10px 15px 15px rgba(0,0,0,.25);
    width:85%;
    margin-top:-3rem;
    z-index: var(--z-modal);
    max-width:30rem;
    background:var(--brown-color)
}

.vehicles h5{
    color:var(--yellow-color);
    margin: 1rem 0 .5rem
}
@media(min-width: 768px){
    .maps-container .flex-container{
        flex-direction: row;
        justify-content: space-between;
    }
    .flex-container .info-container{
        width:50%
    }
    .dashed{
        display:block;
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-150%) rotate(90deg);
    }
    .img-container{
        max-width:40%
    }
    .img-container::before{
        left:-1rem;
    }
    .maps-container .title{
        font-size: 3rem;
    }
    .info-container h4{
        font-size: 1.5rem;
    }
    .vehicles h5{
        font-size: 1.1rem;
    }
    .dashed2{
        display:block;
        position:absolute;
        left:80%;
        bottom:-10rem;
        transform:translateX(-50%);        
    }
}
@media(min-width:1050px){
    .whole-maps-container{
        overflow: hidden;
        padding-top:5rem;
    }
    .maps-container{
        max-width: 65rem;
        position:relative;
        left:50%;
        transform: translateX(-50%);
    }
    .dashed{
        display:block;
        position:absolute;
        left:50%;
        top:60%;
        transform:translate(-50%,-150%) rotate(90deg);
    }
    .img-container{
        max-width:60%;
        height:25rem;
        right:-15%;
    }
    .google-container{
        flex-direction: row;
        margin-top:2rem;
    }
    .vehicles{
        box-shadow: none;
        margin-top: 0;
        left:3rem;
        transform: translateX(0);
        width:60%;
        z-index: var(--z-modal);
        max-width:30rem;
        background:var(--brown-color)
    }
    .part-container .part{
        left:2rem;
    }
    .dashed2{
        display:none;
    }
    
}
</style>
