<template>
    <div class="whole-numbers-container">
        <div class="numbers-container ">
            <h3 class="title" v-html="title"></h3>
            <div class="gallery">
                <div v-for="(card, index) in cards" :key="index" data-aos="fade-down-right" :data-aos-offset="card.offset">
                    <p class="number title" v-html="card.number"></p>
                    <p class="text" v-html="card.text"></p>
                </div>
            </div>
            <div class="scroll flex-center">
                <p class="title text" v-html="scroll"></p>
                <img :src="arrow" alt="" class="arrow">
            </div>
        </div>
        <div class="part-container flex-center">
            <img class="part" src="../assets/parts/part3.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'Numbers',
    data(){
        return{
            title:'Exhibition in numbers',
            cards:[
                {
                    number:'4',
                    text:'sections of art to discover',
                    offset:50
                },
                {
                    number:'10',
                    text:'years in making an exhibition',
                    offset:100
                },
                {
                    number:'15',
                    text:'collections of museums',
                    offset:200
                },
                {
                    number:'120',
                    text:'of da Vinci’s works and paintings',
                    offset:300
                }
            ],
            scroll:'Scroll right',
            arrow:require('../assets/icons/arrow.png')
        }
    }
}
</script>

<style scoped>
.whole-numbers-container{
    padding:2rem;
    background:var(--white-color);
    position:relative;
}
.numbers-container{
    position:relative;
    left:50%;
    transform:translateX(-50%);
    max-width: 65rem;
}
.numbers-container h3{
    font-size: 2rem;
    width:50%
}
.numbers-container .gallery{
    display:grid;
    grid-template-columns:repeat(4,minmax(200px, auto));
    grid-template-rows: minmax(200px,auto);
    overflow:auto;
    width:100%;
    position:relative;
    margin-top:3rem;
}
.gallery div{
    padding-left:1rem
}
.gallery .number{
    font-size: 3.4rem;
}
.gallery .text{
    width:100%;
    font-weight: 600;
    margin-top:1.5rem;
    position:relative;
}
.gallery div .text::before{
    content:'';
    background:var(--yellow-color);
    width:3rem;
    height:3rem;
    border-radius:200px;
    position:absolute;
    margin-top:-.8rem;
    margin-left:-1rem;
    z-index: var(--z-back);

}
.scroll{
    justify-content: flex-end;
}
.scroll p{
    margin-right:.5rem;
    font-size: 1.3rem;
}
@media(min-width:768px){
    .numbers-container{
        padding-bottom: 4rem;
    }
    .numbers-container h3{
        font-size: 3rem;
    }
    .numbers-container .gallery{
        display:flex;
        left:50%;
        transform:translateX(-50%);
        width:100%;
        justify-content: space-between;
    }
    .gallery .text{
        width:90%
    }
    .scroll{
        display:none
    }
}
@media(min-width: 1200px){
    .whole-numbers-container{
        overflow-x:hidden ;
    }
    .part-container{
        overflow-x: none;
    }
    .numbers-container{
        padding:5rem 0 5rem 2rem;
        
    }
    .numbers-container h3{
        width:40%;
    }
}
</style>