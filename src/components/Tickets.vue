<template>  
  <div class="whole-tickets-container" id="tickets">
    <div class="tickets-container">
        <h3 class="title" v-html="title"></h3>
        <div class="date-container flex-center">
            <img :src="dateImg" alt="">
            <p v-html="dateP"></p>
        </div>
        <div class="choose-ind-group flex-center">
            <label>
                <input type="radio" name="choose" id="individual" checked @change="toggleTickets">
                <span v-html="chooseInd"></span>
            </label>
            <label>
                <input type="radio" name="choose" id="group" @change="toggleTickets">
                <span v-html="chooseGroup"></span>
            </label>
        </div>
        <div class="individual-tickets">
            <h3 class="titulo">Individual tickets</h3>
            <div class="option flex-center">
                <label>
                    <input type="radio" name="tickets">
                    <span class="design"></span>
                    <p v-html="individual.label1"></p>
                </label>
                <div class="buttons-container flex-center">
                    <div id="minus1" class="minus flex-center" @click="substract('general')">-</div>
                    <p class="number" v-html="individual.generalNumber"></p>
                    <div class="plus flex-center"  @click="add('general')">+</div>
                </div>
            </div>
            <div class="option flex-center">
                <label>
                    <input type="radio" name="tickets">
                    <span class="design"></span>
                    <p v-html="individual.label2"></p>
                </label>
                <div class="buttons-container flex-center">
                    <div class="minus flex-center"  @click="substract('under')">-</div>
                    <p class="number" v-html="individual.underNumber"></p>
                    <div class="plus flex-center"  @click="add('under')">+</div>
                </div>
            </div>
            <div class="option flex-center">
                <label>
                    <input type="radio" name="tickets">
                    <span class="design"></span>
                    <p v-html="individual.label3"></p>
                </label>
                <div class="buttons-container flex-center">
                    <div class="minus flex-center"  @click="substract('european')">-</div>
                    <p class="number" v-html="individual.euNumber"></p>
                    <div class="plus flex-center"  @click="add('european')">+</div>
                </div>
            </div>
            <div class="warnings-container">
                <div class="flex">
                    <div class="exclamation flex-center">!</div>
                    <p v-html="warnings.first"></p>
                </div>
                <div class="flex">
                    <div class="exclamation flex-center">!</div>
                    <p v-html="warnings.second"></p>
                </div>
            </div>
                <div class="total-container">
                    <h3 style="margin-bottom:2rem"> Total {{ individual.total }} €</h3>
                    <a v-html="buy" href="" class="main-button"></a>
                </div>
        </div>
            <div class="group-tickets">
                <h3 class="titulo">Group tickets</h3>
                <div class="option flex-center">
                    <label>
                        <input type="radio" name="tickets">
                        <span class="design"></span>
                        <p v-html="group.label1"></p>
                    </label>
                    <div class="buttons-container flex-center">
                        <div id="minus2" class="minus flex-center" @click="substract('group')">-</div>
                        <p class="number" v-html="group.groupNum"></p>
                        <div class="plus flex-center"  @click="add('group')">+</div>
                    </div>
                </div>
                <div class="option flex-center">
                    <label>
                        <input type="radio" name="tickets">
                        <span class="design"></span>
                        <p v-html="group.label2"></p>
                    </label>
                    <div class="buttons-container flex-center">
                        <div class="minus flex-center"  @click="substract('participant')">-</div>
                        <p class="number" v-html="group.participantNum"></p>
                        <div class="plus flex-center"  @click="add('participant')">+</div>
                    </div>
                </div>
                <div class="warnings-container">
                    <div class="flex">
                        <div class="exclamation flex-center">!</div>
                        <p v-html="warnings.third"></p>
                    </div>
                </div>
                <div class="total-container">
                    <h3 style="margin-bottom:2rem"> Total {{ group.total }} €</h3>
                    <a v-html="buy" href="" class="main-button"></a>
                </div>
            </div>
            <div class="quick-entry flex-center">
                <img :src="quickEntryImg" alt="">
            </div>
        </div>
        <div class="part-container flex-center">
            <img class="part" src="../assets/parts/part8.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'tickets',
    data(){
        return{
            fecha:"",
            title:'Choose your tickets',
            dateImg:require('../assets/icons/calendar.png'),
            dateP:'choose the date and timeslot of your visit',
            chooseInd:'INDIVIDUAL TICKETS',
            chooseGroup:'GROUP TICKETS',
            individual:{
                generalNumber:1,
                underNumber:0,
                euNumber:0,
                label1:'General admission',
                label2:'Under 18s',
                label3:'18.25 year olds*',
                total:17
            },
            group:{
                groupNum:1,
                participantNum:0,
                label1:'Group reservation',
                label2:'Participant*',
                total:60
            },
            warnings:{
                first:'18-25 year-old residents of the European Economic Area (EU, Norway, Iceland, and Liechtenstein)',
                second:'For visitors eligible for free admission proof of ID required',
                third:'“Participants" admission without the corresponding reservation fee will not allow the access of the group to the museum.'
            },
            buy:'BUY NOW',
            quickEntry:'QUICK ENTRY TO THE MUSEUM IN LESS THAN 30 MINUTES!',
            quickEntryImg:require('../assets/icons/ticket.svg')
        }
    },
    methods:{
        substract(which){
            let minus = document.querySelector('#minus1')
            let minus2 = document.querySelector('#minus2')

            if(which === 'general'){
                this.individual.generalNumber > 0 ? this.individual.generalNumber-- : ""
                this.individual.generalNumber === 0 ? minus.style.pointerEvents = 'none' : minus.style.pointerEvents = 'initial'
                this.individual.total = this.individual.total - 17
            } else if(which === 'under'){
                this.individual.underNumber > 0 ?  this.individual.underNumber-- : ""
            } else if(which === 'european'){
                this.individual.euNumber > 0 ? this.individual.euNumber-- : ""
            } else if (which === 'group'){
                this.group.groupNum > 0 ? this.group.groupNum-- : ""
                this.group.groupNum === 0 ? minus2.style.pointerEvents = 'none' : minus2.style.pointerEvents = 'initial'
                this.group.total = this.group.total - 60
            } else if(which === 'participant'){
                this.group.participantNum > 0 ? this.group.participantNum-- : ""
            }
        },
        add(which){
            if(which === 'general'){
                this.individual.generalNumber++
                this.individual.total = this.individual.total + 17
            } else if(which === 'under'){
                this.individual.underNumber++
            } else if(which === 'european'){
                this.individual.euNumber++
            } else if (which === 'group'){
                this.group.groupNum++
                this.group.total = this.group.total + 60
            } else if(which === 'participant'){
                this.group.participantNum++
            }
        },
        toggleTickets(){
            let individual = document.querySelector('#individual')
            let indCont = document.querySelector('.individual-tickets')
            let group = document.querySelector('#group')
            let groupCont = document.querySelector('.group-tickets')

            if(individual.checked === true){
                groupCont.style.display = 'none'
                indCont.style.display = 'block'
            } else if(individual.checked === false){
                groupCont.style.display = 'block'
                indCont.style.display = 'none'
            }
        },
    }
}
</script>

<style scoped>
.group-tickets,
.quick-entry{
    display:none
}
.whole-tickets-container{
    position:relative;
    background:var(--white-color)
}
.tickets-container{
    padding:2rem;
    padding-bottom:4rem;
}
.tickets-container .title{
    font-size: 2rem;
}
.tickets-container .date-container{
    justify-content: flex-start;
    margin:2rem 0
}
.tickets-container .date-container img{
    width:5rem
}
.tickets-container .date-container p{
    width:50%;
    margin-left:2rem
}
.tickets-container .choose-ind-group{
    flex-direction: column;
    align-items: flex-start;
}
.choose-ind-group input{
    display:none
}
.choose-ind-group label{
    margin:1rem 0
}
.choose-ind-group span{
    padding:1rem;
    color:var(--yellow-color);
    font-weight: 600;
}

.choose-ind-group input:checked + span{
    border:1px solid var(--yellow-color);
    box-shadow: 0 4px 4px rgba(121, 121, 121, 0.25), 0 4px 4px inset rgba(119, 119, 119, 0.25);
    border-radius:200px
}
.option{
    justify-content: space-between;
    margin:2rem 0;
}
.option label{
    display:flex;
    align-items:center;
}
.option input{
    opacity: 0;
    position: absolute;
    left: .5rem;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
}
.option .design {
    min-width: 30px;
    min-height: 30px;
    border: 1px solid black;
    border-radius: 100%;
    position: relative;
}
.option input:checked + .design::before {
    position:absolute;
    content:'';
    background:var(--yellow-color);
    width:1rem;
    height:1rem;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    border-radius: 100%;
}
.option label p{
    margin: 0 2rem
}

.buttons-container{
    position:relative;
    right:0;
}
.option .buttons-container div{
    background:var(--yellow-color);
    border-radius:200px;
    height:30px;
    width: 30px;
    color:var(--white-color);
    font-weight: 800;
    font-size: 1.5rem;
}
.option .buttons-container p{
    font-size: 1.5rem;
    font-weight: 600;
    margin:0 1rem
}
.warnings-container{
    margin:4rem 0;
}
.warnings-container .flex{
    position: relative;
    margin:1rem 0
}
.warnings-container .exclamation{
    height:20px;
    width:20px;
    background:var(--yellow-color);
    border-radius:200px;
    color:var(--white-color);
    font-weight: 600;
    position:absolute;
    top:0;
    left:0;
}
.warnings-container p{
    position:relative;
    left:30px;
    width:85%
}
.total-container{
    margin:2rem 0;
    font-size: 1.5rem;
}
.main-button{
    margin-bottom: auto;
}
.titulo{
    display:none
}
@media(min-width:768px){
    .titulo{
        display:block;
        color:var(--yellow-color);
        font-size: 1.7rem;
    }
    .tickets-container .title{
        font-size: 3rem;
        text-align: center;
    }
    .tickets-container .date-container{
        padding:3rem 0
    }
    .tickets-container .date-container p{
        width:30%;
        font-size: 1.2rem;
    }
    .choose-ind-group{
        display:flex;
        margin-bottom:1rem;
    }
    .group-tickets{
        display:block
    }
    .option{
        width:70%
    }
    .tickets-container .individual-tickets .total-container{
        display:none
    }
    .total-container h3{
        font-size: 2.1rem;
    }
}
@media(min-width: 1200px){
    .tickets-container .title{
        font-size: 3rem;
        padding: 3rem 0;
    }
    .tickets-container{
        position: relative;
        left:50%;
        transform:translateX(-50%);
        max-width:65rem;
    }
    .date-container{
        position:absolute;
        right:0;
        top:8rem;
        flex-direction: column;
        align-items: flex-start;
    }
    .tickets-container .date-container p{
        width:70%;
        margin:1rem 0;
        font-size: 1rem;
    }
    .choose-ind-group{
        display:flex;
        margin:2rem 0;
    }
    .choose-ind-group label{
        cursor:pointer  
    }
    .group-tickets{
        display:none
    }
    .option{
        width:45%
    }
    .option .plus,
    .option .minus{
        cursor:pointer
    }
    .warnings-container p{
        width:50%
    }
    .tickets-container .individual-tickets .total-container{
        display:flex
    }
    .total-container{
        display:flex;
    }
    .total-container a{
        margin-left: 3rem;
    }
    .quick-entry{
        display:flex;
        position: absolute;
        right:0rem;
        bottom:0%;
    }
    .quick-entry img{
        bottom:0%;
        width:12rem
    }
    .part-container .part{
        left:2rem;
    }
}
</style>