<template>
  <div class="whole-faq-container">
    <div class="faq-container max-width light-text">
        <h3 class="title text-center" v-html="title"></h3>
        <div class="pairset-question" v-for="(item, index) in questions" :key="index" data-aos="fade-down" data-aos-offset="300" data-aos-once="true">
            <div  class="question flex-center" @click="toggleFaq(item.id,item.clase)" :class="item.idReal">
                    <p v-html="item.question"></p>
                    <span>+</span>
            </div>
            <div :class="item.claseReal">
                <p v-html="item.answer"></p>
            </div>
        </div>
        
    </div>
        <img class="ball" :src="ball" alt="">
  </div>
</template>

<script>
export default {
    name:'faqq',
    data(){
        return{
            title:'FAQ',
            questions:[
                {
                    question:'How can I avoid long waits to get into the museum?',
                    answer:'Buy your ticket online and enter the museum via the orange line in less than 30 minutes.',
                    id:'.question1',
                    idReal:'question1',
                    clase:'.answer1',
                    claseReal:'answer1',
                },
                {
                    question:'Are there special rates for youth?',
                    answer:'18-25 year-old residents of the European Economic Area have full free access to the museum',
                    id:'.question2',
                    idReal:'question2',
                    clase:'.answer2',
                    claseReal:'answer2',
                },
                {
                    question:'What can I see with a ticket to the Louvre?',
                    answer:"The Louvre exhibits all kinds of sculptures, objets d'art, paintings, drawings, and archaeological finds.",
                    id:'.question3',
                    idReal:'question3',
                    clase:'.answer3',
                    claseReal:'answer3',
                },
                {
                    question:'Нow to get to the exhibition for visitors with disabilities?',
                    answer:'On Tuesdays museum closes to provide excursions exclusively for people with disabilities',
                    id:'.question4',
                    idReal:'question4',
                    clase:'.answer4',
                    claseReal:'answer4',
                },
            ],
            ball:require('../assets/secondary-resources/faq-shape.svg')
        }
    },
    methods:{
      toggleFaq(nombreId,nombreClase){
        let idPreg = document.querySelector(`${nombreId}`)
        let spanPreg = document.querySelector(`${nombreId} span`)
        let pPreg = document.querySelector(`${nombreId} p`)

        idPreg.classList.toggle('isPainted')
        pPreg.classList.toggle('isColoured')
        spanPreg.classList.toggle('isFliped')
        spanPreg.classList.toggle('isColoured')

        let claseResp = document.querySelector(`${nombreClase}`)
        claseResp.classList.toggle('isOpen')

        //console.log(pPreg)
      },
    },
}
</script>

<style>
.whole-faq-container{
    background:var(--brown-color);
    position:relative
}
.faq-container{
    padding:2rem;
}
.faq-container h3{
    font-size: 2rem;
    margin-bottom:2rem
}
.question{
    border:1px  solid var(--yellow-color);
    border-radius:200px;
    padding:.1rem 1.2rem;
    justify-content: space-between;
    margin:1rem 0;
    cursor:pointer;
    transition:all .5s;
    user-select: none;
}
.question p{
    font-size: .9rem;
    width:80%;
    font-weight: 600;
    color:var(--yellow-color);
}
.question span{
    font-size: 2.5rem;
    font-weight: 600;
    color:var(--yellow-color);
    transition:all .5s
}
.question:hover{
    background:var(--yellow-color);
}
.question:hover p,
.question:hover span{
    color:var(--brown-color)
}
.answer1,
.answer2,
.answer3,
.answer4{
    opacity:0;
    height:0;
    transition: all .5s;
    pointer-events: none;
}
.isOpen{
    opacity:1;
    height:7rem; /*usar scale*/ 
    padding:1rem 2rem;
}
.isPainted{
    background:var(--yellow-color);
}
.isColoured{
    color:var(--brown-color) !important
}
.isFliped{
    transform:rotate(45deg);
}
.ball{
    display:none;
}
@media(min-width: 768px){
    .faq-container h3{
        font-size: 3rem;
    }
    .isOpen{
    height:5rem;
}
}
@media(min-width: 1050px){
    .ball{
        display: block;
        position:absolute;
        left:0;
        bottom:0;
        width:5rem;
    }
}
</style>