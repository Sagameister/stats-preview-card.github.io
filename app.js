// GSAP


function init() {
	gsap.set(".main-wrapper", {autoAlpha:1})
	
	
	let tl = gsap.timeline({delay: 1, defaults:{duration:0.8, ease:"Power4.easeOut"}})
        tl.from(".main-wrapper", {width:0, height:"auto", duration:2})
        .from(".img-wrapper", {opacity:0, duration:5}, "<10%")
        .from(".content-wrapper h1", {opacity:0,y:30, duration:1}, "<20%")
        .from(".content-wrapper p", {opacity:0,y:30, duration:1}, "<20%")
        .from(".stat-wrapper", {opacity:0,y:30, duration:1}, "<20%")
        .from("stat", {opacity:0,y:30, stagger:1}, "<20%")
}

window.addEventListener('load', init);