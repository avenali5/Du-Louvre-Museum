<template>
  <div class="whole-about-container light-text" id="about">
    <h3 class="title text-center" v-html="title"></h3>
    <div class="phone-about-container">
        <p class="text-center text1" v-html="text1"></p>
        <div class="img-container flex-center">
            <img class="img1" :src="img1" alt="">
            <img class="img2" :src="img2" alt="">
            <p class="text-center cite"><span class="quote">“</span>You can really get into his brain and try to see how he thought</p>
        </div>
        <p class="text-center text2" v-html="text2"></p>
        <p class="learn-more" v-html="more"></p>
    </div>
    <div class="desktop-about-container">
        <div class="flex-container flex-center first">
            <img class="img1" :src="img1" alt="">
            <div class="text-container" data-aos="fade-up" data-aos-offset="400">
                <p class="text-center text1" v-html="text1"></p>
                <p class="text-center text1" v-html="text1B"></p>
            </div>
        </div>
        <p class="text-center cite"><span class="quote">“</span>You can really get into his brain and try to see how he thought</p>
        <div class="flex-container flex-center second">
            <div class="text-container" data-aos="fade-up" data-aos-offset="400">
                <p class="text-center text2" v-html="text2"></p>
                <p class="text-center text2" v-html="text2B"></p>
            </div>
            <img class="img2" :src="img2" alt="">
        </div>
    </div>
    <div class="part-container flex-center">
            <img class="part" src="../assets/parts/part2.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name:'About',
    data(){
        return{
            title:'About',
            text1:"It took more than a decade to prepare and was almost thwarted by a diplomatic row. Now, one of the world's most expensive art exhibitions is finally opening to the public.",
            text1B:"The exhibition, which is expected to attract more than half a million visitors over the next four months, aims to provide a deeper understanding of the artist's working methods using his notebooks, infrared imaging technology and virtual reality.",
            img1:require('../assets/light-painting.png'),
            img2:require('../assets/woman-museum.png'),
            text2:"Building on the museum's Leonardo collection – already the best in the world with five paintings and 22 drawings – the show has been in the making and will feature over 120 works, sourced from some of the most prestigious european and american institutions.",
            text2B:"The works – paintings, drawings, manuscripts, sculptures and artifacts – will be displayed in the museum's Napoleon Hall for four months starting October 24, and end December 24.",
            more:'Learn more'
        }
    }
}
</script>

<style scoped>
.desktop-about-container{
    display:none;
    overflow:hidden;
}
.whole-about-container{
    background:var(--brown-color);
    position:relative;
    padding-bottom:2rem;
    overflow-x:hidden ;
    padding-left:2rem;
    overflow:hidden;
}
.title{
    font-size: 2rem;
    padding-top:2rem;
}
p{
    padding:1rem 2rem;
}
.phone-about-container .text1{
    margin: 2rem auto
}
.phone-about-container .img-container{
    width:fit-content;
    position:relative;
}
.phone-about-container .img-container img{
    width:50%;
}
.phone-about-container .cite{
    bottom:-15%;
    font-size: 1.5rem;
    position:absolute;
    color:var(--white-traslucid);
    left:50%;
    transform: translateX(-50%);
    width:100%
}
.cite:after{
    content:'';
    position: absolute;
    width:3rem;
    height:3rem;
    background:none;
    border:1px solid rgba(255, 255, 255, 0.349);
    z-index: var(--z-modal);
    border-radius: 200px;
    top:-380%;
    right:-5%;
}

.cite span{
    font-family: Passion One;
    font-style: normal;
    color: var(--brown-color);
    transform: rotate(110deg);
    text-shadow: -1px -1px 0 var(--white-traslucid), 1px -1px 0 var(--white-traslucid), -1px 1px 0 var(--white-traslucid), 1px 1px 0 var(--white-traslucid);
}
.phone-about-container .text2{
    margin-top: 20%;
    text-align: left;
}
.phone-about-container .learn-more{
    text-align:right;
    position:relative;
}
.phone-about-container .learn-more::before{
    content:'';
    width:2rem;
    height:2rem;
    position:absolute;
    background:none;
    border:1px solid var(--white-traslucid);
    border-radius: 200px;
    margin-left:-.5rem;
    top:50%;
    transform:translateY(-50%)
}
@media(min-width:768px){
    .phone-about-container{
        display:none
    }
    .desktop-about-container{
        display:block;
    }
    .title{
        position: absolute;
        lefT:50%;
        transform: translateX(-50%);
        font-size: 3rem;
        z-index: 100000;
    }
    .flex-container{
        justify-content: space-between;
        max-width: 65rem;
        position:relative;
        left:50%;
        transform: translateX(-50%);
    }
    .flex-container p{
        text-align: left;
        width: 23rem;
    }
    .first p{
        position:relative;
        right:5rem;
        top:2rem
    }
    .cite{
        font-size: 2.5rem;
        width:75%;
        position: absolute;
        z-index: var(--z-modal);
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        
    }
    .quote{
        font-size: 6rem;
    }
    .second .text-container{
        position:relative;
        padding:10rem 0 1rem
    }

}
@media(min-width: 1050px){
    .cite{
        width:60%;
    }
}
</style>