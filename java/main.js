//navbar animation
gsap.from(".logo-name",
{opacity:0,
    y:"-100%",
    ease:"Expo.in"

});

gsap.from(".menu-item",{
    opacity:0,
    delay:1.8,
    y:"-100%",

});

//animations in nested timeline 
function firstLoad() {
    const tl= gsap.timeline();
    tl.from(".block", {y:900,ease:"Expo.in",opacity:0, stagger:{each:0.5,}});
    tl.to(".container", {y:"80%",scale:"1.3",ease:"power4"});
    tl.from(".title",{ opacity:0
    });
    tl.to(".container",{y:"0%",scale:1,delay:"0.6",ease:"Expo.in"});
    return tl;

}
function carousel() {
    const tl=gsap.timeline();
    tl.to(".b-3", {duration:0.2,x:"80%",scale:0.7, ease:"expo.inOut"});
    tl.to(".b-2", {duration:0.2,x:"-80%",scale:0.7,ease:"expo.inOut"});
    tl.to(".b-1", {scale:0.7,ease:"expo.inOut"});
    tl.to(".container", {delay:"0.8",y:"50%",ease:"circ"});
    return tl;
}

const final= gsap.timeline();
final.add(firstLoad());
final.add(carousel());
