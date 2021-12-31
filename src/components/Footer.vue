<template>
  <div class="whole-footer-container" id="footer">
    <div class="footer-container light-text">
        <div class="flex-container flex-center">
            <div class="quick-entry" data-aos="zoom-in" data-aos-offset="300">
                <h4 v-html="entry.title"></h4>
                <a v-html="entry.cta" href="#tickets" class="main-button"></a>
            </div>
            <div class="extra-info">
                <h3 v-html="info.title" class="title"></h3>
                <p v-html="info.text"></p>
                <h4 v-html="info.furtherTitle"></h4>
                <p v-html="info.furtherPhone"></p>
            </div>
        </div>
        <div class="flex-container second">
            <div class="social">
                <img :src="social.fb" alt="">
                <img :src="social.ig" alt="">
                <p v-html="social.hashtag"></p>
            </div>
            <div class="nav">
                <ul>
                    <li><a href="#tickets">Tickets</a></li>
                    <li><a href="#programm">Programm</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#visit">Visit</a></li>
                </ul>
            </div>
        </div>
        <a href="#nav" class="up flex-center">
            <img :src="arrow" alt="">
            <h3 v-html="arrowTitle" class="title"></h3>
        </a>
        <img :src="dash" alt="" class="dashed2">
    </div>
  </div>
</template>

<script>
export default {
    name:'Footer',
    data(){
        return{
            entry:{
                title:'Quick entry to the museum in less than 30 minutes!',
                cta:'CHOOSE YOUR TICKET'
            },
            info:{
                title:'Louvre',
                text:'Hall Napoléon, under the Pyramid<br><br>Every day from 9 a.m. to 6 p.m., except Tuesday.<br><br>On Wednesdays and Fridays to 9:45 p.m.<br><br>',
                furtherTitle:'Further information',
                furtherPhone:'+33 (0)1 40 20 53 17'
            },
            social:{
                fb:require('../assets/icons/facebook.svg'),
                ig:require('../assets/icons/instagram.svg'),
                hashtag:'#ExpoLéonard'
            },
            nav:[
                "Tickets",
                "Program",
                "Contacts",
                "Visit"
            ],
            arrow:require('../assets/icons/UP.svg'),
            arrowTitle:'up',
            dash:require('../assets/secondary-resources/dashed-path.svg')
        }
    }
}

</script>

<style scoped>
.whole-footer-container{
    background:var(--brown-color);
    border-top: 2px dashed var(--white-traslucid);
}
.footer-container{
    padding:2rem;
    position:relative
}
.flex-container{
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.quick-entry h4{
    width:80%;
    margin-bottom:2.5rem
}
.extra-info h3{
    margin-top:4.5rem;
    margin-bottom:.5rem;
    font-size: 2rem;
}
.extra-info p{
    width:80%;
}
.extra-info h4{
    color:var(--yellow-color);
    margin-bottom:.5rem
}
.social{
    display:flex;
    align-items: center;
    margin:3rem 0
}
.social img:nth-child(2){
    margin:0 1rem
}
.social p{
    color:var(--yellow-color);
}
ul{
    display:flex
}
ul li{
    margin-right: .5rem
}
ul li a{
    color:var(--white-color)
}
.up{
    flex-direction: column;
    position:absolute;
    right:10%;
    bottom:20%;
}
.up h3{
    color:var(--yellow-color);
    text-decoration: none;
    font-size: 1.5rem;
}
.dashed2{
    display:none;
}
@media(min-width:768px){
    .whole-footer-container{
        border:none;
    }
    .flex-container:nth-child(1){
        flex-direction: row-reverse;
        align-items: flex-end;
    }
    .quick-entry{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .quick-entry h4{
        width:55%;
        font-size: 1.5rem;
    }
    .extra-info h3{
        margin-bottom:2rem
    }
    ul li{
        margin-right: 2rem
    }
    .up{
        bottom:2rem
    }
}
@media(min-width: 1050px){
    .whole-footer-container{
        margin-top: -4rem;
        overflow: hidden;
    }
    .dashed2{
        display:block;
        position:absolute;
        left:50%;
        top:-1rem;
        transform:translateX(-50%);        
    }
    .footer-container{
        max-width: 65rem;
        left:50%;
        transform:translateX(-50%)
    }
    .flex-container:nth-child(1){
        align-items: center;
    }
    .quick-entry{
        position: relative;
        right:-35%;
        align-items:flex-start;
    }
    
}
</style>