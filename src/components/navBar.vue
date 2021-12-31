<template>
  <div class="whole-nav-container light-text" id="nav">
    <header class="flex-center">
        <div class="logo flex-center">
            <h2 class="title" v-html="logo"></h2>
        </div>
        <div class="location flex-center">
            <img :src="locationIcon" alt="">
            <p v-html="locationText"></p>
        </div>
        <div class="cta-container flex-center">
            <a v-html="cta" href="#tickets" class="main-button"></a>
        </div>
        <p class="language">EN</p>
        <div class="menu flex-center" @click="toggleMenu">
            <img :src="burguer" alt="">
        </div>
        <nav class="light-text flex-center">
            <div class="close flex-center" @click="closeMenu">
                <h2 v-html="close" class="title"></h2>
                <img :src="cross" alt="">
            </div>
            <div class="menu-secondary flex-center">
                <img :src="menuSec" alt="">
            </div>
            <ul>
                <li><a href="#about" @click="closeMenu">About</a></li>
                <li><a href="#programm" @click="closeMenu">Programm</a></li>
                <li><a href="#visit" @click="closeMenu">Visit</a></li>
                <li><a href="#tickets" @click="closeMenu">Tickets</a></li>
                <li><a href="#footer" @click="closeMenu">Contacts</a></li>
            </ul>
        </nav>
    </header>
  </div>
</template>

<script>
export default {
    name:'navBar',
    data(){
        return{
            logo:'Louvre',
            burguer:require('../assets/icons/burguer.svg'),
            close:'Close',
            cross:require('../assets/icons/quit.png'),
            menuSec:require('../assets/secondary-resources/menu-text.png'),
            locationIcon:require('../assets/icons/location.png'),
            locationText:'PARIS, FRANCE',
            cta:'BUY YOUR TICKET'
        }
    },
    methods:{  
        toggleMenu(){
            let nav = document.querySelector('nav')
            nav.style.opacity = '1'
            nav.style.zIndex = 'var(--z-modal)'
            nav.style.pointerEvents = 'all'
        },
        closeMenu(){
            let nav = document.querySelector('nav')
            nav.style.opacity = '0'
            nav.style.zIndex = '-1'
            nav.style.pointerEvents = 'none'
        }
    }
}
</script>

<style scoped>
.whole-nav-container{
    position:absolute;
    z-index: var(--z-modal);
    width:100%;
}
header{
    padding:2rem;
    justify-content: space-between;
    width:100%;
    position:relative;
    left:50%;
    transform:translateX(-50%);
    max-width: 95rem;
}
.language{
    display:none
}
.location,
.cta-container{
    display:none
}
header nav{
    position:absolute;
    right:0;
    top:0;
    background:var(--brown-color);
    height:100vh;
    width:100%;
    transition:all .8s;
    opacity:0;
    z-index: -1;
    overflow-x: hidden;
}
.close{
    position:absolute;
    right:2rem;
    top:2rem
}
.close::before{
    content:'';
    position:absolute;
    width:7rem;
    height:7rem;
    border-radius: 200px;
    background:none;
    border:1px solid var(--white-traslucid)
}
.close h2{
    margin-right:1rem
}
nav li{
    margin:2rem 0;
    font-size: 3rem;
}
nav a{
    color:var(--white-color);
}
.menu-secondary{
    position:absolute;
    right:-5%;
    pointer-events: none;
}

@media(min-width:768px){
header{
    padding:3rem
}
.location,
.cta-container{
    display:flex
}
.location p{
    margin-left:.5rem;
    font-size: .8rem;
    color:var(--white-traslucid)
}
.language{
    display:block
}
.menu{
    display:none
}
.main-button{
    position:relative;

}
.main-button::before{
    content:'';
    position:absolute;
    width:3rem;
    height: 3rem;
    background:none;
    border:1px solid var(--white-traslucid);
    border-radius: 200px;
    top:-1rem;
    left:-1.5rem
}
}
@media(min-width:1200px){
    header{
        padding:2.1rem 3rem;
    }
    nav{
        display:none;
    }
    .language{
        display:none
    }
    .main-button{
        right:10rem;
    }
    .location{
        margin-left:20rem
    }

}
</style>