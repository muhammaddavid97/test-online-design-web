window.onscroll = function(){
	myFunction()
};

const navbar = document.querySelector("#navbar");
const sticky = navbar.offsetTop;

function myFunction(){
	if (window.pageYOffset >= sticky){
		navbar.classList.add("sticky");
	}else{
		navbar.classList.remove("sticky");
	}
}


/// scroll top when button navbar on click
const rootElement = document.documentElement;
const buttonNavbar = document.querySelector("#button-navbar");


function handleScroll(){
	const scrollTotal = rootElement.scrollHeight - rootElement.clienHeight;
	if ((rootElement.scrollTo / scrollTotal) > 0.02){
		scrollTop();
	}
}

function scrollTop(){
	rootElement.scrollTo({
		top: 0,
		behavior:"smooth"
	});
}
buttonNavbar.addEventListener("click", scrollTop);
document.addEventListener("scroll", handleScroll);


/// scrol animation newsletter
window.sr = ScrollReveal();
sr.reveal("#newsletter", {
	origin:"top",
	duration:3000,
	distance:"300px"
});


/// close event handler
const close = document.querySelector("#close");
const newsletter = document.querySelector("#newsletter");
 
close.addEventListener("click", function(){
	// newsletter.classList.add("newsletter-lost");
	setTimeout(() => {
		newsletter.classList.add("newsletter-lost")
	}, localStorage.setItem("timeout", 600000));

});

	window.onload = function(){
		if (localStorage.getItem("timeout") !== null){
			setInterval(() => {
				if (newsletter.classList.contains("newsletter-lost")){
					newsletter.classList.remove("newsletter-lost");
				}
			}, localStorage.getItem("timeout"));
		}else{
			console.error(new Error());
		}
	}
