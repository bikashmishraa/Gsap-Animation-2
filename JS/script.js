var tl=gsap.timeline();
tl.from(".navbar h1",{
    duration:3,
    delay:1,
    opacity:0,
})

gsap.from(".navbar ul",{
    y:-100,
    duration:2,
    delay:1,
})
gsap.from(".right-nav",{
    x:1000,
    duration:3,
    delay:0.1,
})

gsap.from(".left",{
    x:-1000,
    duration:3,
    delay:1,
    opacity:0
})
gsap.from(".left h1",{
    y:1000,
    x:0,
    opacity:0,
    duration:3,
    delay:1,
})
gsap.from(".right img",{
    x:1000,
    duration:3,
    delay:1
})
gsap.from(".info,.imagecontainer img",{
    y:1000,
    duration:3,
    delay:0.1,
    stagger:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:5,
    }
})