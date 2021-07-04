//Auto highlight current page at nav mennu
function highlightNav() {
	var disclaimer = document.getElementById("disclaimerbody");
	var enquiry = document.getElementById("enquirybody");
	var product1 = document.getElementById("product1body");
	var product2 = document.getElementById("product2body");
	var product3 = document.getElementById("product3body");
	var product4 = document.getElementById("product4body");
	var aboutme1 = document.getElementById("aboutme1body");
	var aboutme2 = document.getElementById("aboutme2body");
	var aboutme3 = document.getElementById("aboutme3body");
	var aboutme4 = document.getElementById("aboutme4body");
	
	if (disclaimer) {
		document.getElementById("list4").style.backgroundColor = "#D3D2D3";	
	}
	
	if (enquiry) {
		document.getElementById("list2").style.backgroundColor = "#D3D2D3";	
	}
	
	if ( (product1) || (product2) || (product3) || (product4) ) {
		document.getElementById("list1").style.backgroundColor = "#D3D2D3";
	}
	
	if ( (aboutme1) || (aboutme2) || (aboutme3) || (aboutme4) ) {
		document.getElementById("list3").style.backgroundColor = "#D3D2D3";
	}
	
}

//Enlarge image 
	//Image is enlarged when cursor moves over it
function enlarge1() {
	var img1 = document.getElementById("lp1png");
	img1.style.transform = "scale(2.0) translateX(50%)"; 
	img1.style.transition = "1s";
}

function enlarge2() {
	var img2 = document.getElementById("lp2png");
	img2.style.transform = "scale(2.0) translateX(50%)"; 
	img2.style.transition = "1s";
}

function enlarge3() {
	var img3 = document.getElementById("lp3png");
	img3.style.transform = "scale(2.0) translateX(50%)"; 
	img3.style.transition = "1s";
}

function enlarge4() {
	var img4 = document.getElementById("lp4png");
	img4.style.transform = "scale(2.0) translateX(50%)"; 
	img4.style.transition = "1s";
}

function enlarge5() {
	var img5 = document.getElementById("lp5png");
	img5.style.transform = "scale(2.0) translateX(50%)"; 
	img5.style.transition = "1s";
}
	//Image back to normal after the cursor leave the image
function cancelEnlarge() {
	document.getElementById("lp1png").style.transform = "none" ;
	document.getElementById("lp2png").style.transform = "none" ;
	document.getElementById("lp3png").style.transform = "none" ;
	document.getElementById("lp4png").style.transform = "none" ;
	document.getElementById("lp5png").style.transform = "none" ;
	document.getElementById("lp1png").style.transition = "none";
	document.getElementById("lp2png").style.transition = "none";
	document.getElementById("lp3png").style.transition = "none";
	document.getElementById("lp4png").style.transition = "none";
	document.getElementById("lp5png").style.transition = "none";
}

//Back to top button
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}