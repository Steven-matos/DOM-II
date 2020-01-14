// Your code goes here
const newLogo = document.querySelector('.logo-heading');

// 1) Mouse Enter

newLogo.addEventListener('mouseenter', () => {
    newLogo.style.color = 'Gold';
})

// 2) Mouse Leave
newLogo.addEventListener('mouseleave', () => {
    newLogo.style.color = 'black';
})

// 3) resize

const newHeadingImg = document.querySelector('.intro img');

window.addEventListener('resize', () => {
    newHeadingImg.src = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80';
})

// 4) click

document.querySelectorAll('.btn').forEach( elem => {
    elem.addEventListener('click', () => {
        elem.style.backgroundColor = 'salmon'
    }) 
})

// 5) dblclick

document.querySelectorAll('.btn').forEach(elem => {
    elem.addEventListener('dblclick', () => {
        elem.style.backgroundColor = '#17A2B8'
    })
})

// 6) onload

// window.onload = () => {
//     document.querySelector("#my_audio").play();
// }

// 7) mouseover

document.querySelectorAll('h2').forEach(elem => {
    elem.addEventListener('mouseover', () => {
        elem.style.color = 'teal';
    })
})

// 8) mousemove

const rotateImg = document.querySelector('.img-content');

rotateImg.addEventListener('mousemove', () => {
    rotateImg.style.transform = "scale(1.2)"
    rotateImg.style.transition = "transform 0.3s"
})

rotateImg.addEventListener('mouseleave', () => {
    rotateImg.style.transform = "scale(1)"
})

// 9) context menu

noContext = document.querySelector('img');

noContext.addEventListener('contextmenu', e => {
    e.preventDefault();
});

// 10) wheel 

function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.intro img');
el.onwheel = zoom;






// prevent refresh

document.querySelectorAll('.nav-link').forEach(elem => {
    elem.addEventListener('click', (e) => { 
        e.preventDefault(); 
    })
});

