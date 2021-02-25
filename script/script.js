const portfolio = document.querySelector('.portfolio');

portfolio.addEventListener('mouseover', function() {
    this.classList.add('active');
});
portfolio.addEventListener('mouseout', function() {
    this.classList.remove('active');
});


// SAVING 
const saving = document.querySelector('.saving');
const head = document.querySelector('.saving .head');

var position = saving.clientHeight - head.clientHeight;
saving.style.transform = `translateY(${position}px)`;


// SAVING BUTTON 
const startsaving = document.querySelector('.startsaving .btn');

startsaving.addEventListener('mouseover', function(e) {
    var xx = document.querySelector('.topMain');

    var x = e.clientX - e.target.offsetLeft - xx.offsetLeft;
    var y = e.clientY - e.target.offsetTop - xx.offsetTop;

    var span1 = document.createElement('span');
    var span2 = document.createElement('span');

    span1.classList.add('anim');
    span1.style.left = x + 'px';
    span1.style.top = y + 'px';

    span2.classList.add('anim2');
    span2.style.left = x + 'px';
    span2.style.top = y + 'px';
    
    var maindiv = document.createElement('div');
    maindiv.appendChild(span1);
    maindiv.appendChild(span2);
    this.appendChild(maindiv);
});

startsaving.addEventListener('mouseout', function(e) {
    e.target.children[1].remove()
});



// GSAP  SCROLL ANIMATION 
let nv = gsap.timeline({
    scrollTrigger: {
        trigger: ".navhead",
        start: "bottom top",
        scrub: 1,
        pin: true
    }
});

nv.to('.logo', {
    yPercent: 100,
    opacity: 0,
    scale: 0,
    duration: 2
})
.to('.navigation ul li', {
    yPercent: 100,
    opacity: 0,
    scale: 0,
    duration: 2
}, "-=2")
.to('.spans span:nth-child(1)', {
    opacity: 0,
    scale: 0,
    duration: 2,
    delay: 1
})
.to('.spans span:nth-child(2)', {
    opacity: 0,
    xPercent: 100,
    duration: 2,
    delay: 1
})
.to('.spans span:nth-child(3)', {
    opacity: 0,
    xPercent: -100,
    duration: 2,
    delay: 2
})
.to('.spans span:nth-child(4)', {
    opacity: 0,
    yPercent: 100,
    duration: 2,
    delay: 2
})


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".saving",
        start: "top center",
        end: "+=500",
        scrub: 1,
        pin: true
    }
});

tl.to('.saving', {
    skewX: -15,
    skewY: 15,
    repeat: 1,
    yoyo: true
})
.fromTo('.saving', {
    scale: 1,
    yPercent: 0
},
{
    scale: 0.85,
    yPercent: -54
})
.to('.wallet', {
    rotationX: 720
})

let al = gsap.timeline({
    scrollTrigger: {
        trigger: ".alpine",
        start: "top center",
        end: "+=800",
        toggleClass: 'active'
    }
});


let mt = gsap.timeline({
    scrollTrigger: {
        trigger: ".main",
        start: "center center",
    }
})

mt.fromTo('.mainTxt', {
    xPercent: 0,
    opacity: 0
},
{
    xPercent: 10,
    opacity: 1
})


// OFFER 

var content = document.querySelector('.content').children;
var imgs = document.querySelector('.imgs').children;
let index = 0;

function autoPlay() {
    if(index == content.length - 1) {
        index = 0;
    }
    else {
        index++;
    }

    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        content[index].classList.add('active');

        imgs[i].classList.remove('active');
        imgs[index].classList.add('active');
    }
}
var timer = setInterval(autoPlay, 3000);


// SCROLL TO TOP 
const gotop = document.querySelector('.gotop');

gotop.addEventListener('click', function() {
    window.scrollTo(0,0);
});