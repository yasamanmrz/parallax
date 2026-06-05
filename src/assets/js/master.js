
const phoneImgLeft = document.getElementById('phoneone')
const phoneImgRight = document.getElementById('phonetwo')
const mobileSec = document.getElementById('mobileSec')
const phoneVideo = document.getElementById('phoneVideo')
const firstSec = document.getElementById('firstSec')
const secondSec = document.getElementById('secondSec')

gsap.registerPlugin(ScrollTrigger)


const tl = gsap.timeline({
    scrollTrigger:{
        trigger : mobileSec,
        start:"top 75%",
        end:"top 20%",
        scrub:1, 
    }
})

tl.fromTo(phoneImgLeft,{
    y:200,
    scale:0.8,
    opacity:0,
},{
    y:0,
    scale:1,
    opacity:1,
    duration:2,
},0.4)

tl.fromTo(phoneImgRight,{
    y:200,
    scale:0.8,
    opacity:0,
},{
    y:0,
    scale:1,
    opacity:1,
    duration:2,
},0.4)

tl.fromTo(phoneVideo,{
        y:250,
        scale:0.7,
        opacity:0,
    },
    {
        y:0,
        scale:1,
        opacity:1,
        duration:2,
        onComplete:()=>{
            phoneVideo.play()
        }
    },0.2)

// FIRST SECTION

const tltwo = gsap.timeline({
    scrollTrigger:{
        trigger : firstSec,
        start:"top 75%",
        toggleAction:"play none none none"
    }
})

tltwo.from(firstSec,{
    y:250,
    scale:0.7,
    opacity:0,
},{
    y:0,
    scale:0.7,
    opacity:0,
    duration:1,
})


function textAnim(section,title){

    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:section,
            start:'top 80%',
            toggleAction:'play none none none',
        }
    })

    tl.from(section,{
        y:150,
        opacity:0,
        scale:0.9,
        filter:'blur(10px)',
        duration:1,
        ease:'power3.out'
    })

    .from(title,{
        y:100,
        opacity:0,
        duration:1,
        ease:'power4.out'
    },'-=0.7')

}

textAnim('#secondSec','#title')
textAnim('#secondSec2','#title2')
textAnim('#secondSec3','#title3')
textAnim('#Sec3','#title3')
textAnim('#Sec4','#title4')

gsap.to('#joinBtn',{
    y:1000,

    scrollTrigger:{
        trigger:"body",
        start:"top top",
        end:"1000px top",
        scrub:1,
    }
})


gsap.to('#ax img',{
    y:10,
    scale:1,
    ease:'none',
    scrollTrigger:{
        trigger:secondSec,
        start:'top bottom',
        end:'bottom top',
        scrub:true,
    }
})

gsap.from("#ax",{
    x:100,
    opacity:0,
    duration:1.5,
    ease:'power3.out',
    scrollTrigger:{
        trigger:secondSec,
        start:'top 75%',
    }
})



gsap.to('#imgLeft',{
    y:-40,
    yoyo:true,
    repeat:-1,
    duration:2,
    ease:'power1.inOut',
})

gsap.to('#imgRight',{
    y:40,
    yoyo:true,
    repeat:-1,
    duration:2,
    ease:'power1.inOut',
})



gsap.from("#Sec4 + div img", {
    scale: 1.3,
    opacity: 0,
    rotate: 4,
    duration: 1.6,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#Sec4",
        start: "top 75%",
    }
})

gsap.to("#Sec4 + div img", {
    y: 25,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
})

gsap.to("#Sec4 + div figure", {
    y: -80,
    ease: "none",
    scrollTrigger: {
        trigger: "#Sec4",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
})

gsap.from("#ax7",{
    x:100,
    opacity:0,
    duration:1.5,
    ease:'power3.out',
    scrollTrigger:{
        trigger:secondSec,
        start:'top 75%',
    }
})


gsap.to('#img1, #img3',{
    y:-40,
    yoyo:true,
    repeat:-1,
    duration:2,
    ease:'power1.inOut',
})

gsap.to('#img2',{
    y:40,
    yoyo:true,
    repeat:-1,
    duration:2,
    ease:'power1.inOut',
})


gsap.from("#ax2", {
    x: 120,
    opacity: 0,
    scale: 0.9,
    duration: 1.4,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#secondSec2",
        start: "top 75%",
    }
})

gsap.from("#ax2 img", {
    scale: 1.2,
    opacity: 0,
    duration: 1.6,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#secondSec2",
        start: "top 75%",
    }
})

gsap.to("#ax2 img", {
    y: -25,
    ease: "none",
    scrollTrigger: {
        trigger: "#secondSec2",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    }
})
