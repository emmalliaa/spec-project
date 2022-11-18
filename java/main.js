
gsap.to(".container",{duration:2,
    y:"90%",
    ease:"Expo.in",
    delay:2.8,
});


gsap.from(".logo-name",{
    opacity:0,
    y:-100,
    ease:"Expo.in",
    delay:0,

    

});

gsap.from(".menu-item",{duration:1.1,
    opacity:0,
    y:-100,
    ease:"Power2.easeOut",
    delay:2.7 ,

});

gsap.to(".container",{duration:2,
    y:"0%",
    ease:"expo",
    delay:5.8,
});

function first() {
    var tl= gsap.timeline();
    tl.from(".block", {y:900,ease:"Expo.in",stagger:{each:0.9,}});
    tl.to(".container",)

    return tl;
}
var final= gsap.timeline();
final.add(first())



 
