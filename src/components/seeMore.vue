<template>
  <div class="whole-more-container">
    <div class="more-container flex-center light-text">
        <div class="img-container">
            <img :src="bkn1" alt="">
            <img :src="bkn2" alt="">
        </div>
        <div class="img-container2">
            <img :src="bknComplete" alt="">
        </div>
        <div class="text-container">
            <h3 class="title" v-html="title" data-aos="fade-left" data-aos-offset="300"></h3>
            <p v-html="text" data-aos="fade-left" data-aos-offset="300"></p>
            <a v-html="cta" href="#tickets" class="main-button" data-aos="fade-left" data-aos-offset="300"></a>
        </div>
    </div>
    <div class="programm-container light-text">
        <h3 class="title" v-html="programm.title"></h3>
        <div class="stages-container">
            <img :src="programm.img" alt="" class="stages">
        </div>
        <div class="booklet-container">
            <h3 class="title" v-html="booklet.title" data-aos="fade-right" data-aos-offset="300"></h3>
            <a v-html="booklet.cta" href="" class="main-button" data-aos="fade-right" data-aos-offset="300"></a>
            <span v-html="booklet.span" data-aos="fade-right" data-aos-offset="300"></span>
            <img :src="booklet.resource" alt="" class="resource">
        </div>
    </div>
    <div class="part-container flex-center">
            <img class="part" src="../assets/parts/part7.svg" alt="">
    </div>
  </div>
</template>

<script>

export default {
    name:'seeMore',
    data(){
        return{
            bkn1:require('../assets/see-more.png'),
            bkn2:require('../assets/see-more-square.png'),
            bknComplete:require('../assets/see-more-complete.png'),
            title:'Do you want to see more?',
            text:'Then book tickets now and visit the biggest Leonardo da Vinci’s exhibition ever! Free entry for people under 18 and special groups!',
            cta:'BUY NOW',
            programm:{
                title:'Programm',
                img:require('../assets/icons/stages.svg')
            },
            booklet:{
                title:'Download a free exhibition booklet',
                cta:'BOOKLET PDF',
                span:'* available in english and french',
                resource:require('../assets/secondary-resources/vitruvio-man.png')
            }
        }
    },
}
</script>

<style scoped>
.whole-more-container{
    position:relative;
    background:var(--brown-color);
    overflow: hidden;
}
.more-container{
    border-bottom: 2px dashed grey;
    padding:2rem
}
.more-container .img-container{
    position:absolute;
    display:flex;
    flex-direction: row-reverse;
    top:0;
}
.img-container:nth-child(1){
    width:auto;
    height:auto;
    right:0
}
.img-container2{
    display:none
}
.more-container{
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.more-container h3,
.more-container p,
.more-container a{
    z-index: 1000;
}
.more-container h3{
    font-size: 2rem;
    width:50%;
    margin-top: 2rem;
}
.more-container p{
    width:65%;
    margin:2rem 0
}
.more-container .text-container{
    z-index: var(--z-modal);
}
.programm-container{
    padding:2rem
}
.programm-container h3{
    font-size: 2rem;
    margin-bottom:3rem
}

.stages-container{
    display:flex;
}
.stages-container img{
    width:100%;
    user-select: none;
}
.stages-container .info-container{
    margin-left:2rem;
}
.info-container h4{
    font-size: 1.5rem;
    color:var(--yellow-color);
    margin-bottom:1.5rem;
}
.booklet-container{
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    position:relative;
}
.booklet-container h3{
    width:70%;
    margin-top:4rem;
}
.booklet-container a{
    width: fit-content;
    z-index: var(--z-modal);
}
.booklet-container span{
    width:50%;
    margin-top:1rem;
    z-index: var(--z-modal);
}
.booklet-container img{
    position:absolute;
    bottom:-5rem;
    transform:rotate(-45deg);
    right:-40%;
    width:15rem
}
@media(min-width: 768px){
    .img-container2{
        display:block;
        position:relative;
    }
    .img-container2 img{
        position:absolute;
        height:25rem;
        width: auto;
    }
    .more-container{
        padding:0;
        padding-bottom:4rem;
        border:none;
    }
    .more-container .img-container{
        display:none;
    }
    .more-container .text-container{
        padding:2rem;
        width:70%
    }
    .more-container h3,
    .more-container p,
    .more-container a{
        position:relative;
        left:25rem;
    }
    .programm-container .title{
        font-size:3rem;
    }
    .programm-container a{
        font-size: 1.1rem;
    }
    .programm-container .stages-container img{
        width:80%
    }
    .booklet-container{
        padding-bottom:5rem
    }
    .booklet-container img{
        width:30rem;
        transform:none;
        bottom:-15rem;
        right:-15rem;
    }
}
@media(min-width: 1000px){
    .programm-container{
        position:relative;
        left:50%;
        transform:translateX(-50%);
        max-width:65rem
    }
    .img-container2{
        height:40rem;
        width: 100%;
    }
    .img-container2 img{
        width:100%;
        height:100%;
    }
    .text-container{
        position:absolute;
        right: 0rem;
        top:4rem
    }
    .text-container h3{
        font-size: 3rem;
        width:30%
    }
    .text-container p{
        width:30%
    }
    .programm-container .title{
        font-size: 3rem;
        
    }
    .programm-container .stages-container img{
        width:50%;
        position:relative;
        left:50%;
        transform:translateX(-50%);
        -webkit-user-drag: none;
        margin-bottom:10rem;
    }
    .part-container .part{
        left:2rem
    }
    .booklet-container h3{
        width:40%;
        position:relative;
    }
    .booklet-container h3::before{
        content:'';
        background:none;
        width:6rem;
        height:6rem;
        border-radius:200px;
        position:absolute;
        right:3rem;
        top:-1rem;
        border:1px solid var(--white-traslucid)
    }
}
@media(min-width:1600px){
    .more-container{
        position: relative;
        max-width:75rem;
        left:50%;
        transform:translateX(-50%);
    }
    .more-container::after{
        content:'';
        background:linear-gradient(to right,var(--brown-color),transparent);
        width:5%;
        height:100%;
        position:absolute;
        left:0rem;
        top:0rem;
    }
}
</style>