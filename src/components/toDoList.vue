<template>
  <div class="whole-list-container">
    <div class="light-text">
        <div class="img-container flex-center" data-aos="zoom-out" data-aos-offset="400">
            <img :src="leonardo" alt="">
        </div>
        <div class="title-container text-center flex-center">
            <h2 class="title one" v-html="first"></h2>
            <h2 class="title two" v-html="second"></h2>
        </div>
        <div class="list-container">
            <p class="title" v-html="title"></p>
            <div class="flex-container">
                <div class="label-container">
                    <label class="flex-center" v-for="(label, index) in labels" :key="index" @click="setLoader" data-aos="fade-right" data-aos-offset="200">
                        <input @change="setImg" type="radio" name="todo" :id="label.id" :checked="label.checked">
                        <span class="design"></span>
                        <p class="text" v-html="label.text"></p>
                    </label>
                </div>
                <div class="result">
                    <div class="loader">
                        <div class="loader-animation"></div>
                    </div>
                    <img @load="deleteLoader" :src="result" alt="" class="result-img">
                </div>
            </div>
        </div>
    </div>
    <div class="part-container flex-center">
            <img class="part" src="../assets/parts/part4.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name:'toDoList',
    data(){
        return{
            leonardo:require('../assets/leo-face.png'),
            first:'Who is',
            second:'Leonardo?',
            title:'to do list :',
            labels:[
                {
                    text:'to become the epitome of Rénassance',
                    id:'one',
                    checked:true
                },
                {
                    text:'to paint the most recognised painting in the world – Mona Lisa',
                    id:'two',
                    checked:false
                },
                {
                    text:'to invent a flying machine, parachute and harp',
                    id:'three',
                    checked:false
                },
                {
                    text:'to become friends with French King Francois I',
                    id:'four',
                    checked:false
                }
            ],
            result:require('../assets/renacimiento.gif')
        }
    },
    methods:{
        setImg(src){
            let one = document.querySelector('#one')
            let two = document.querySelector('#two')
            let three = document.querySelector('#three')
            let four = document.querySelector('#four')

            if(one.checked === true){
                this.result = require('../assets/renacimiento.gif')
            } else if(two.checked === true){
                this.result = require('../assets/mona.gif')
            } else if(three.checked === true){
                this.result = require('../assets/maquina.gif')
            } else{
                this.result = require('../assets/letras.gif')
            }
        },
        setLoader(){
            let loader = document.querySelector('.loader')
            loader.style.display = 'flex'
        },
        deleteLoader(){
            let loader = document.querySelector('.loader')
            loader.style.display = 'none'
        }
    },
}
</script>

<style scoped>
.whole-list-container{
    background: vaR(--brown-color);
    padding:2rem;
    position:relative;
    overflow: hidden;
    width: 100%;
}
.light-text{
    position:relative;
    left:50%;
    transform: translateX(-50%);
    max-width: 55rem;
}
.title-container{
    flex-direction: column;
    align-items: center;
    position:relative;
    left:50%;
    transform:translateX(-50%);
    text-align:left;
    margin-top:-5rem;
}
.title-container .two{
    margin-left: 3.5rem;
}
.title-container h2{
    font-size: 2.5rem;
    z-index: var(--z-modal);
}
.one::after{
    background:none;
    z-index: -1000;
    content:'';
    position:absolute;
    width:4rem;
    height:4rem;
    border-radius:200px;
    top:30%;
    transform: translateY(-50%);
    border:1px solid var(--white-traslucid)
}
.one::before{
    background:var(--yellow-color);
    z-index: var(--z-back);
    content:'';
    position:absolute;
    width:8rem;
    height:2rem;
    border-radius:200px;
    top:30%;
    transform: translateY(-50%);
}
.two::before{
    background:var(--yellow-color);
    z-index: var(--z-back);
    content:'';
    position:absolute;
    width:10rem;
    height:2rem;
    border-radius:200px;
    top:80%;
    transform: translateY(-50%);
    margin-left:5%;
}
.list-container{
    margin-top:2.5rem
}
.list-container .title{
    text-decoration: underline;
    font-size: 1.5rem;
    margin-bottom:1.5rem
}
.flex-container{
    display:flex;
    flex-direction: column;
}
.list-container label{
    display:flex;
    justify-content: flex-start;
    position:relative;
    margin: 1.5rem 0;
    cursor:pointer;
}
input {
  opacity: 0;
  position: absolute;
  left: .5rem;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.list-container label p{
    width:80%;
    margin-left:1.5rem
}
.design {
    width: 2rem;
    height: 2rem;
    border: 1px solid white;
    border-radius: 100%;
    position: relative;
}
input:checked + .design::before {
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
.result{
    width:fit-content;
    height:100%;
    position:relative;
}
.result .result-img{
    width:100%;
    height:100%;
    position:relative;
}
.result .loader{
    height:100%;
    width:100%;
    background: rgba(0,0,0,.6);
    z-index: var(--z-fixed);
    position:absolute;
    display:flex;
    justify-content: center;
    align-items: center;
}
.loader .loader-animation{
    height:2rem;
    width:2rem;
    border:5px solid var(--white-color);
    border-bottom:5px solid var(--yellow-color);
    border-top:5px solid var(--yellow-color);
    position:absolute;
    border-radius: 200px;
    animation: load 1s infinite forwards;
}
@media(min-width:768px){
    .flex-container{
        flex-direction: row;
        align-items: center;
    }
    .flex-container img{
        max-width:20rem;
        position:relative;
    }
}
@media(min-width: 1050px){
    .img-container img{
        width:25rem
    }
    .title-container h2{
        font-size: 4rem;
        z-index: var(--z-modal);
    }
    .one::after{
        top:30%;
        right:20rem;
        transform: translateY(-50%);
        border:1px solid var(--white-traslucid)
    }
    .flex-container{
        justify-content: space-around;
    }
}

@keyframes load {
    from {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  to {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
</style>