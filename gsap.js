var tl= gsap.timeline();
var nav=gsap.timeline();

var tabs=document.querySelector(".full .tabs h4");
var close=document.querySelector(".page1 .full .close h2");
var tabsRotation=document.querySelector(".full .tabs");
var menu=document.querySelector("nav .menu")




function locomotiveScroll(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locomotiveScroll();


function loader() {
    tl.from(".loader h3",{
        opacity:0,
        x:40,
        duration:1,
        stagger:0.2
    })
    tl.to(".loader h3",{
        opacity:0,
        x:-10,
        duration:1,
        stagger:0.2
    })
    tl.to(".loader",{
        opacity:0
    })
    tl.to(".loader",{
        display:"none",
        zIndex:0
    })
}
loader();


function navbar(){
    nav.to(".full",{
        top:0,
        duration:0.5,
    })
    nav.from(tabsRotation,{
        x:50,
        opacity:0,
        duration:0.5,
        stagger:0.3,
        delay:0.2
    })
    nav.pause();
    menu.addEventListener("click",function(){
        nav.play();
    })
    close.addEventListener("click",function(){
        nav.reverse();
    })
    
}
navbar();


function page1Animation(){
    var page1Content = document.querySelector(".page1-content")
    var cursor = document.querySelector(".cursor")
    
    page1Content.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y
        })
    })
    page1Content.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })
    page1Content.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
    })
}
page1Animation();


function page2Animation(){
    gsap.from(".page2 .parent .child2 p",{
        y:120,
        stagger:0.2,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".page2",
            scroller:"main",
            start:"top 47%",
            end:"top 46%",
            scrub:2
        }
    })
}
page2Animation();


function page3Animation(){
    gsap.from(".page3 .page3-bottom .footer p",{
        y:120,
        stagger:0.2,
        duration:1,
        opacity:0,
        scrollTrigger:{
            trigger:".page3 .footer",
            scroller:"main",
            start:"top 67%",
            end:"top 64%",
            scrub:2
        }
    })
gsap.to("svg",{
    rotate:360,
    duration:20,
    repeat:-1,
    ease:"power1.out"
})
}
page3Animation();


function page4Animation(){
    var page4Content = document.querySelector(".page4-parent")
    var cursor = document.querySelector(".page4-parent .cursor")
    
    page4Content.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y
        })
    })
    page4Content.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })
    page4Content.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
    })
}
page4Animation();