<template>
  <div class="whole-hero-container">
    <div class="hero-container light-text">
        <div class="leonardo-secondary flex-center">
            <img :src="leoSec" alt="">
        </div>
        <div class="info-container flex-center">
            <p v-html="dates" class="dates text-center"></p>
            <h2 v-html="title" class="title text-center"></h2>
            <hr>
            <p v-html="text" class="text"></p>
            <div class="links-container">
                <ul class="flex-center">
                    <li><a href="#programm">Programm</a></li>
                    <li><a href="#about">Learn more</a></li>
                    <li><a href="#footer">Contacts</a></li>
                </ul>
            </div>
            <a v-html="cta" href="#tickets" class="main-button"></a>
        </div>
    </div>
    <div class="part-container flex-center">
            <img class="part" src="../assets/parts/part1.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name:'heroSection',
    data(){
        return{
            dates:'24 october 2019 – 24 december 2020',
            title:'Léonardo Da Vinci',
            text:'To commemorate the 500-year death anniversary of Leonardo da Vinci, the Musée du Louvre is holding a major retrospective of the painter’s career',
            cta:'BUY YOUR TICKET',
            leoSec:require('../assets/secondary-resources/leonardo-text.png')
        }
    }
}
</script>

<style scoped>
.whole-hero-container{
    background:url('../assets/main2.jpeg') no-repeat;
    background-position: 60%;
    background-size: cover;
    width:100%;
    min-height:45rem;
    padding:2rem;
    position:relative;
    overflow-x: hidden;
}
.whole-hero-container::after{
    content:'';
    width:100%;
    height:3rem;
    background:linear-gradient(to top,var(--brown-color), transparent);
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%)
}
.hero-container{
    position:relative;
    left:50%;
    transform:translateX(-50%);
    max-width: 35rem;
}
.leonardo-secondary{
    display:none
}
.info-container{
    flex-direction: column;
    justify-content: space-between;
    min-height:20rem;
    position: relative;
    margin-top:100%;
}
.info-container .dates{
    font-size: 1rem;
}
.info-container .title{
    font-size: 2.4rem;
}
.info-container .text{
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.4;
    font-weight: 300;
}
.info-container hr{
    width:100%;
}
.info-container .main-button{
    position:relative
}
.info-container .main-button::after{
    content:'';
    height:2rem;
    width:1px;
    position:absolute;
    background:var(--white-traslucid);
    top:100%;
    left:50%;
    transform:translateX(-50%)
}
.links-container{
    display:none
}
@media(min-width:768px){
    .whole-hero-container{
        background:url('../assets/main2.jpeg') no-repeat;
        background-position: 100% 10%;
        background-size: 110%;
    }
    .leonardo-secondary{
        display:flex;
        z-index: var(--z-modal);
        position:absolute;
        left:50%;
        top:-70%
    }
    .info-container{
        min-height:20rem;
        margin-top:100%;
        padding-bottom:3rem
    }
    .info-container .title{
        font-size: 4rem;
    }
    .info-container p{
        color:var(--white-traslucid);
    }
    .main-button{
        display:none
    }
    .links-container{
        display:block;
        width:100%;
        padding-top:2rem
    }
    .links-container ul{
        justify-content:space-around;
        width:100%;
    }
    .links-container ul li a{
        color:var(--white-color);
        position:relative;
    }
    .links-container ul li a::before{
        content:'';
        position:absolute;
        width:3rem;
        height:3rem;
        background:none;
        border:1px solid var(--white-traslucid);
        border-radius: 200px;
        top:-80%;
        left:-15%
    }
}
@media(min-width:1050px){
    .whole-hero-container{
        background:url('../assets/main.png') no-repeat;
        background-position: 100% 20%;
        background-size: 100%;
    }
    .leonardo-secondary{
        left:80%
    }
    .info-container{
        flex-direction: column;
        justify-content: space-between;
        min-height:20rem;
        position: relative;
        margin-top:70%;
    }
    .links-container ul{
        justify-content:space-between;
        width:100%;
    }
}
@media(min-width:1600px){
    .info-container{
        margin-top:100%;
    }
}
</style>