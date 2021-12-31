<template>
  <div class="whole-beyond-container">
    <div class="beyond-container flex-center">
        <div class="img-container"></div>
        <div class="text-container light-text">
            <h3 v-html="beyond.title" class="title" data-aos="fade-left" data-aos-offset="300"></h3>
            <p class="text" data-aos="fade-left" data-aos-offset="300">
                <span class='span'>Highlight of the exhibition</span> is the first VR experience presented to the public by the Louvre Museum.<br><br>It incorporates scientific research to reveal details within the painting otherwise invisible to the naked eye
            </p>
        </div>
    </div>
    <div class="plan-container light-text" id="visit">
        <h3 class="title" v-html="plan.title"></h3>
        <div class="sections flex-center">
            <div class="opening-hours" data-aos="fade-down-right" data-aos-offset="200">
                <div class="title-container">
                    <h4 v-html="opening.title"></h4>
                </div>
                <div class="flex-container flex-center">
                    <div class="properties">
                        <p v-html="opening.firstP"></p>
                        <p v-html="opening.secondP"></p>
                        <p v-html="opening.thirdP"></p>
                    </div>
                    <hr>
                    <div class="values">
                        <p v-html="opening.firstV"></p>
                        <p v-html="opening.secondV"></p>
                        <p v-html="opening.thirdV"></p>
                    </div>
                </div>
                <div class="warnings-container">
                    <div class="flex">
                        <div class="exclamation flex-center">!</div>
                        <p v-html="warnings.first"></p>
                    </div>
                </div>
            </div>
            <div class="admission" data-aos="fade-down-right" data-aos-offset="300">
                <div class="title-container">
                    <h4 v-html="admission.title"></h4>
                </div>
                <div class="flex-container flex-center">
                    <div class="properties">
                        <p v-html="admission.firstP"></p>
                        <p v-html="admission.secondP"></p>
                    </div>
                    <hr>
                    <div class="values">
                        <p v-html="admission.firstV"></p>
                        <p v-html="admission.secondV"></p>
                    </div>
                </div>
                <div class="warnings-container">
                    <div class="flex">
                        <div class="exclamation flex-center">!</div>
                        <p v-html="warnings.second"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="part-container flex-center">
            <img class="part" src="../assets/parts/part10.svg" alt="">
        </div>
  </div>
</template>

<script>
export default {
    name:'VR_Plan',
    data(){
        return{
            beyond:{
                title:'Mona Lisa:<br>Beyond the Glass',
            },
            plan:{
                title:'Plan your visit',
            },
            opening:{
                title:'Opening hours',
                firstP:'Wednesday - Monday',
                secondP:'Tuesday',
                thirdP:'Wednesdays/Fridays',
                firstV:'9 a.m. to 6 p.m',
                secondV:'closed',
                thirdV:'to 9:45 p.m'
            },
            admission:{
                title:'Admission',
                firstP:'General',
                secondP:'Under 18',
                firstV:'€17',
                secondV:'Free',
            },
            warnings:{
                first:'On Tuesdays museum closes to provide excursion for people with disabilities',
                second:'Visitors eligible for free admission can skip the line for ticket sales and go directly to one of the entrances to the collections'
            }
        }   
    }
}
</script>

<style scoped>
.whole-beyond-container{
    background:var(--brown-color);
    position: relative;
}
.beyond-container {
    flex-direction: column;
}
.beyond-container .img-container{
    background:url('../assets/MonaVR.png') no-repeat center center/cover;
    height:20rem;
    width:100%
}
.beyond-container .text-container,
.plan-container{
    padding:2rem;
}
.beyond-container .text-container h3{
    font-size: 2rem;
    margin-bottom:2rem
}
.text-container .span{
    color:var(--yellow-color);
    font-weight: 600;
}

.plan-container .title{
    font-size: 2rem;
    margin-bottom:2rem
}
.sections{
    flex-direction: column;
    align-items: flex-start;
}
.plan-container h4{
    color:var(--yellow-color);
    font-size: 1.1rem;
}
.flex-container{
    justify-content: flex-start;
}
.flex-container .values{
    color:var(--white-traslucid)
}
.flex-container hr{
    height:7rem;
    margin: 0 1rem
}
.flex-container p{
    margin:1rem 0
}

.admission{
    padding:3rem 0;
}
.admission hr{
    height:4rem;
    margin: 0 2rem
}
.warnings-container{
    color:grey;
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
    width:80%
}
@media(min-width:768px){
    .beyond-container{
        flex-direction: row;
    }
    .beyond-container .img-container{
        width:100%;
        height:30rem
    }
    .beyond-container .text-container h3{
        font-size: 3rem;
    }
    .plan-container{
        max-width:65rem;
        position:relative;
        left:50%;
        transform:translateX(-50%);
    }
    .plan-container .title{
        font-size: 3rem;
        text-align: center;
        padding:2rem 0;
    }
    .plan-container h4{
        font-size: 1.3rem;
    }
    .warnings-container p{
        width:60%
    }
}
@media(min-width:1050px){
    .whole-beyond-container{
        overflow: hidden;
    }
    .beyond-container .img-container{
        background:url('../assets/MonaVR-desktop.png') no-repeat center left/140%;
        height:40rem;
    }
    .beyond-container .text-container .text{
        width:70%
    }
    .sections{
        flex-direction: row;
        align-items: baseline;
        width:100%;
        position: relative;
    }
    .sections h4{
        margin-bottom:2rem
    }
    .sections .admission{
        position:relative;
        right:-20%;
    }
    .sections .admission .warnings-container{
        margin-top:3rem
    }
    .part-container .part{
        left:2rem;
        top:70%;
    }
}
@media(min-width:1600px){
    .beyond-container{
        position: relative;
        max-width:75rem;
        left:50%;
        transform:translateX(-50%);
    }
    .beyond-container::after{
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