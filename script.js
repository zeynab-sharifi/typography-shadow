const textEf = document.querySelector('.text-efect');
const txt = document.querySelector('h1');
const walk = 700;

textEf.addEventListener('mousemove' , function(event){
    const {offsetWidth: widht,offsetHeight: height} = textEf;
    let {offsetX : x, offsetY: y} = event;
    
    
    x += event.target.offsetLeft;
    y += event.target.offsetTop;

    const xWalk = Math.round((x / widht * walk)-(walk / 2));
    const yWalk = Math.round((y / height * walk)-(walk / 2));
    console.log(xWalk,yWalk)

    txt.style.textShadow =`
        ${xWalk}px ${yWalk}px 0 rgba(238, 122,83,.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(238, 52,73,.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(28, 182,83,.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(258, 42,43,.7)
    `
});