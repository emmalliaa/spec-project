TweenMax.staggerFrom(".container > .block", 1,{
    y:"110%",
    delay: 0.1,
    ease:Expo.easeInOut

},
0.5);

TweenMax.to(".container",2,{
    scale:"1",
    y:"90%",
    ease:Expo.easeInOut,
    delay:1.2,
});

TweenMax.to(".container",2,{
    scale:"2",
    y:"90%",
    ease:Expo.easeInOut,
    delay:1.2,
});

TweenMax.staggerFrom(".navbar>.logo-name",1,{
    opacity:0,
    y:-100,
    ease:Expo.easeInOut,
    delay:1,
},0.1);

TweenMax.staggerFrom(".navbar>.menu>.menu-item",1,{
    opacity:0,
    y:-100,
    ease:Power2.easeOut,
    delay:1 ,

},0.1);