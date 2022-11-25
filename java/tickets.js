//navbar animation
gsap.from(".logo-name",
{opacity:0,
    delay:0,
    y:"-100%",
    ease:"Expo.in"

});

gsap.from(".menu-item",{
    opacity:0,
    delay:1.8,
    y:"-100%",

});
//button on click image change
function changeImg(movieName) {
    let img = document.querySelector('#img-1');
    img.setAttribute("src",movieName);

};
//movie picking
const movie={
    name:'Dead Poets Society',
    numberOfSeats:2,
    cost:40,

    calculate(){
        return this.cost * this.numberOfSeats;
    },
};

document.querySelector('#number').innerText = movie.numberOfSeats;
document.querySelector('#movie').innerText = movie.name;
document.querySelector('#total').innerText = movie.calculate();