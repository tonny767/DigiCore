var gErrorMsg = "";

function init() {
    var regForm = document.getElementById("enquiry");
	var disclaimer = document.getElementById("disclaimerbody");
	var enhancements = document.getElementById("enhancementsbody");
	var enhancements2 = document.getElementById("enhancements2body");
	var index = document.getElementById("indexbody");
	var enquiry = document.getElementById("enquirybody");
	var enquiryProcess = document.getElementById("enquiryprocess");
	var viewEnquiry = document.getElementById("viewenquiry");
	var product1 = document.getElementById("product1body");
	var product2 = document.getElementById("product2body");
	var product3 = document.getElementById("product3body");
	var product4 = document.getElementById("product4body");
	var aboutme1 = document.getElementById("aboutme1body");
	var aboutme2 = document.getElementById("aboutme2body");
	var aboutme3 = document.getElementById("aboutme3body");
	var aboutme4 = document.getElementById("aboutme4body");
	
	var button1 = document.getElementById("storeproduct1");
	var button2 = document.getElementById("storeproduct2");
	var button3 = document.getElementById("storeproduct3");
	var button4 = document.getElementById("storeproduct4");
	var button5 = document.getElementById("storeproduct5");
	
	var button6 = document.getElementById("storeproduct6");
	var button7 = document.getElementById("storeproduct7");
	var button8 = document.getElementById("storeproduct8");
	var button9 = document.getElementById("storeproduct9");
	var button10 = document.getElementById("storeproduct10");
	
	var button11 = document.getElementById("storeproduct11");
	var button12 = document.getElementById("storeproduct12");
	var button13 = document.getElementById("storeproduct13");
	var button14 = document.getElementById("storeproduct14");
	var button15 = document.getElementById("storeproduct15");
	
	var button16 = document.getElementById("storeproduct16");
	var button17 = document.getElementById("storeproduct17");
	var button18 = document.getElementById("storeproduct18");
	var button19 = document.getElementById("storeproduct19");
	var button20 = document.getElementById("storeproduct20");

	var mybutton = document.getElementById("myButton");
	var selection = document.getElementById("statediv");
	mybutton.onclick = topFunction;
	if (selection) {
		stateSel();
	}
	if (enquiry) {
		regForm.onsubmit = validateForm;
		prodSubj;
		prodddl();
		navddl();
		highlightNav();
		checkOption();
	}
	if (product1) { 
		button1.onclick = storeProduct1;
		button2.onclick = storeProduct2;
		button3.onclick = storeProduct3;
		button4.onclick = storeProduct4;
		button5.onclick = storeProduct5;
	}
	if (product2) {
		button6.onclick = storeProduct6;
		button7.onclick = storeProduct7;
		button8.onclick = storeProduct8;
		button9.onclick = storeProduct9;
		button10.onclick = storeProduct10;
	}
	if (product3) {
		button11.onclick = storeProduct11;
		button12.onclick = storeProduct12;
		button13.onclick = storeProduct13;
		button14.onclick = storeProduct14;
		button15.onclick = storeProduct15;
	}
	if (product4) {
		button16.onclick = storeProduct16;
		button17.onclick = storeProduct17;
		button18.onclick = storeProduct18;
		button19.onclick = storeProduct19;
		button20.onclick = storeProduct20;
	}
	if ( (index) || (enhancements) || (enhancements2) || (disclaimer) || (aboutme1) || (aboutme2) || (aboutme3) || (aboutme4) || (enquiryProcess) || (viewEnquiry) ) {
		navddl();
		highlightNav();
	}
	if ( (product1) || (product2) || (product3) || (product4) ) {
		navddl();
		highlightNav();
		document.getElementById("lp1png").onmouseover = enlarge1;
		document.getElementById("lp2png").onmouseover = enlarge2;
		document.getElementById("lp3png").onmouseover = enlarge3;
		document.getElementById("lp4png").onmouseover = enlarge4;
		document.getElementById("lp5png").onmouseover = enlarge5;
		document.getElementById("lp1png").onmouseout = cancelEnlarge;
		document.getElementById("lp2png").onmouseout = cancelEnlarge;
		document.getElementById("lp3png").onmouseout = cancelEnlarge;
		document.getElementById("lp4png").onmouseout = cancelEnlarge;
		document.getElementById("lp5png").onmouseout = cancelEnlarge;
	}
}
window.onload = init, prodSel;

function navddl() {
	var position = document.getElementById("nav-bar");
	var array = ["Product","Mouse & Keyboards","Audio","Laptops","Gaming Accessories","Enquiry","About Us","Xavier","Tonny","Kha Hau","Yin Han","Disclaimer"];
	var arrayhref = ["product1.php","product2.php","product3.php","product4.php","aboutme1.php","aboutme2.php","aboutme3.php","aboutme4.php"];
	
	var ul1 = document.createElement("ul");
	ul1.setAttribute("id","ullist");
	position.appendChild(ul1);
	
		var li1 = document.createElement("li");
		li1.setAttribute("class","dropdown");
		li1.setAttribute("id","list1");
		ul1.appendChild(li1);
		var a1 = document.createElement("a");
		a1.setAttribute("href","#");
		a1.setAttribute("class","dropbar");
		a1.text = array[0];
		li1.appendChild(a1);
	
			var ul2 = document.createElement("ul");
			ul2.setAttribute("class","dropdown-content");
			li1.appendChild(ul2);
			
			for (var i = 0; i < 4; i++) {
				var li2 = document.createElement("li");
				ul2.appendChild(li2);
				var a2 = document.createElement("a");
				a2.setAttribute("href",arrayhref[i]);
				a2.text = array[i+1];
				li2.appendChild(a2);
			}
			
		var li3 = document.createElement("li");
		li3.setAttribute("class","dropdown");
		li3.setAttribute("id","list2");
		ul1.appendChild(li3);
		var a3 = document.createElement("a");
		a3.setAttribute("href","enquiry.php");
		a3.text = array[5];
		li3.appendChild(a3);
		
		var li4 = document.createElement("li");
		li4.setAttribute("class","dropdown");
		li4.setAttribute("id","list3");
		ul1.appendChild(li4);
		var a4 = document.createElement("a");
		a4.setAttribute("href","#");
		a4.setAttribute("class","dropbar");
		a4.text = array[6];
		li4.appendChild(a4);
		
		var ul3 = document.createElement("ul");
			ul3.setAttribute("class","dropdown-content");
			li4.appendChild(ul3);
			
			for (var i = 7; i < 11; i++) {
				var li5 = document.createElement("li");
				ul3.appendChild(li5);
				var a5 = document.createElement("a");
				a5.setAttribute("href",arrayhref[i-3]);
				a5.text = array[i];
				li5.appendChild(a5);
			}
			
		var li6 = document.createElement("li");
		li6.setAttribute("class","dropdown");
		li6.setAttribute("id","list4");
		ul1.appendChild(li6);
		var a6 = document.createElement("a");
		a6.setAttribute("href","disclaimer.php");
		a6.text = array[11];
		li6.appendChild(a6);
			
}

function prodddl() {
	var position = document.getElementById("productdiv");
	var array = ["Select Product*","Audio Technica ATH-M50X","JBL Charge 4 Portable Bluetooth Speaker","1MORE Triple Driver","Sony Walkman NW-A55","Shure SM58-LC","Logitech G402 Hyperion Fury Gaming Mouse","Logitech M330 Wireless Mouse","Delogic KU830 Slim Keyboard","Dell Multimedia Keyboard KB216","Logitech G413 Mechanical Gaming Keyboard","Acer Nitro 5 AN515-54-51M5","HUAWEI MateBook X 2020","ASUS VivoBook 15","Dell G7 17","HP 15s-dr0002tu","CORSAIR Gaming RGB Headset Stand","Oculus Rift S PC-Powered VR Gaming Headset","Elgato Game Capture HD60 Pro","TTRacing Duo V3 Gaming Chair","Kingston HyperX CloudX Stinger Gaming Headset"];
	var arrayid = ["option1","option2","option3","option4","option5","option6","option7","option8","option9","option10","option11","option12","option13","option14","option15","option16","option17","option18","option19","option20"];
	
	var list = document.createElement("select");
	list.setAttribute("id", "producttype");
	list.setAttribute("onchange", "prodSubj();");
	position.appendChild(list);
	
	var placeholder = document.createElement("option");
	placeholder.setAttribute("value", "");
	placeholder.setAttribute("disabled", "");
	placeholder.setAttribute("selected", "");
	placeholder.text = array[0];
	list.appendChild(placeholder);
	
	var optgroup1 = document.createElement("optgroup");
	optgroup1.setAttribute("label", "Audio");
	list.appendChild(optgroup1);
	for (var i = 1; i < 6; i++) {
		var option1 = document.createElement("option");
		option1.setAttribute("value", array[i]);
		option1.setAttribute("id", arrayid[i-1]);
		option1.text = array[i];
		
		optgroup1.appendChild(option1);
	}
	
	var optgroup2 = document.createElement("optgroup");
	optgroup2.setAttribute("label", "Mouse & Keyboard");
	list.appendChild(optgroup2);
	for (var i = 6; i < 11; i++) {
		var option2 = document.createElement("option");
		option2.setAttribute("value", array[i]);
		option2.setAttribute("id", arrayid[i-1]);
		option2.text = array[i];
		
		optgroup2.appendChild(option2);
	}
	
	var optgroup3 = document.createElement("optgroup");
	optgroup3.setAttribute("label", "Laptops");
	list.appendChild(optgroup3);
	for (var i = 11; i < 16; i++) {
		var option3 = document.createElement("option");
		option3.setAttribute("value", array[i]);
		option3.setAttribute("id", arrayid[i-1]);
		option3.text = array[i];
		
		optgroup3.appendChild(option3);
	}
	
	var optgroup4 = document.createElement("optgroup");
	optgroup4.setAttribute("label", "Gaming Accessories");
	list.appendChild(optgroup4);
	for (var i = 16; i < 21; i++) {
		var option4 = document.createElement("option");
		option4.setAttribute("value", array[i]);
		option4.setAttribute("id", arrayid[i-1]);
		option4.text = array[i];
		
		optgroup4.appendChild(option4);
	}

}

function stateSel () {
	var selection = document.getElementById("statediv");
	//Create array of options to be added
	var array = ["","Johor","Kedah","Kelantan","Kuala Lumpur","Labuan","Malacca","Negeri Sembilan","Pahang","Perak","Perlis","Penang","Sabah","Sarawak","Selangor","Terengganu"];
	//Create and append select list
	var selectList = document.createElement("select");
	selectList.setAttribute("id", "state");
	selectList.setAttribute("name", "state");
	selection.appendChild(selectList);
	//Create and append the options
	for (var i = 0; i < array.length; i++) {
		var option1 = document.createElement("option");
		option1.setAttribute("value", array[i]);
		array[0] = "Select State*"
		option1.text = array[i];
		
		selectList.appendChild(option1);
	}
}
//End
function storeProduct1() {
	var optionnum = "option6";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";

}

function storeProduct2() {
	var optionnum = "option7";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct3() {
	var optionnum = "option8";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct4() {
	var optionnum = "option9";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct5() {
	var optionnum = "option10";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct6() {
	var optionnum = "option1";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct7() {
	var optionnum = "option2";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct8() {
	var optionnum = "option3";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct9() {
	var optionnum = "option4";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct10() {
	var optionnum = "option5";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct11() {
	var optionnum = "option11";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct12() {
	var optionnum = "option12";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct13() {
	var optionnum = "option13";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct14() {
	var optionnum = "option14";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct15() {
	var optionnum = "option15";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct16() {
	var optionnum = "option16";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct17() {
	var optionnum = "option17";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct18() {
	var optionnum = "option18";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct19() {
	var optionnum = "option19";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function storeProduct20() {
	var optionnum = "option20";
	sessionStorage.optionnum = optionnum;
	var buttonClicked = "buttonClicked";
	sessionStorage.buttonClicked = buttonClicked;
	window.location = "enquiry.php";
	
}

function checkOption() {
	var optionvalue = document.getElementById(sessionStorage.optionnum).value;
	sessionStorage.optionvalue = optionvalue;
	//alert("stored2:" + sessionStorage.optionvalue);
	if (sessionStorage.buttonClicked != undefined){
		document.getElementById("producttype").value = sessionStorage.optionvalue;
		document.getElementById("subj").value = document.getElementById(sessionStorage.optionnum).textContent + "\n" ;
	}
	sessionStorage.removeItem("buttonClicked");
}


function validateForm(){
"use strict"; //directive to ensure variables are declared
    var isAllOK = false;
    gErrorMsg = ""; //reset error message
    var fnameOK = chkFname();
	var lnameOK = chkLname();
	var emailOK = chkEmail();
	var addressOK = chkAdd();
	var cityOK = chkCity();
	var stateOK = chkState();
	var postOK = chkPost();
	var phoneOK = chkPhone();
	var prodOK = chkProd();
	var subjOK = chkSubj();
    if (fnameOK && lnameOK && emailOK && addressOK && cityOK && stateOK && postOK && phoneOK && prodOK && subjOK){
        isAllOK = true;
		alert("Submitted successfully!")
    }
    else{
        alert(gErrorMsg); //display concatenated error messages
        gErrorMsg = ""; //reset error msg
        isAllOK = false;
    }
return isAllOK;
}

function chkFname () {
    var fname = document.getElementById("fnm").value;
    var pattern1 = /^[A-Za-z]{1,25}$/; //check only alphabet characters or space
    var fnameOK = true;
    if (fname.trim()==""){
		gErrorMsg = gErrorMsg + "Please enter your first name.\n";
		fnameOK = false;
		//border invalid (same command for other functions)
		document.getElementById("fnm").style.border= "solid 2px red";
    }
    else{
        if (!pattern1.test(fname)){
            gErrorMsg = gErrorMsg + "Your first name must contain ONLY alphabet characters and max length of 25 letters\n"
            fnameOK = false;
			//border invalid (same command for other functions)
			document.getElementById("fnm").style.border= "solid 2px red";
		}
	document.getElementById("fnm").style.border= "solid 2px #7B7A7B";
    }
	return fnameOK;
}

function chkLname () {
    var lname = document.getElementById("ltnm").value;
    var pattern2 = /^[A-Za-z]{1,25}$/; //check only alphabet characters or space
    var lnameOK = true;
    if (lname.trim()==""){
		gErrorMsg = gErrorMsg + "Please enter your last name.\n";
		lnameOK = false;
		document.getElementById("ltnm").style.border= "solid 2px red";
    }
    else{
        if (!pattern2.test(lname)){
            gErrorMsg = gErrorMsg + "Your last name must contain ONLY alphabet characters and max length of 25 letters\n"
            lnameOK = false;
			document.getElementById("ltnm").style.border= "solid 2px red";
        }
	document.getElementById("ltnm").style.border= "solid 2px #7B7A7B";
    }
	return lnameOK;
}

function chkEmail(){
    var email = document.getElementById("el").value;
    var pattern3 = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-za-zA-Z0-9.-]{1,4}$/;
	var emailOK = true;
    if (email.trim()==""){
		gErrorMsg = gErrorMsg + "Email cannot be blank\n";
		emailOK = false;
		document.getElementById("el").style.border= "solid 2px red";
    }
    else {
		if (!pattern3.test(email)){
			gErrorMsg= gErrorMsg + "Please enter a valid email address.\n";
			emailOK = false;
			document.getElementById("el").style.border= "solid 2px red";
		}
	document.getElementById("el").style.border= "solid 2px #7B7A7B";
    }
	return emailOK;
}

function chkAdd() {
	var address = document.getElementById("stadd").value;
	var addOK = true;
	if (address.trim()=="") {
		gErrorMsg = gErrorMsg + "Please enter your street address.\n"
		addOK = false;	
		document.getElementById("stadd").style.border= "solid 2px red";
	}
    else {
		document.getElementById("stadd").style.border= "solid 2px #7B7A7B";
    }
	return addOK;
}

function chkCity() {
	var city = document.getElementById("ct").value;
	var cityOK = true;
	if (city.trim()=="") {
		gErrorMsg = gErrorMsg + "Please enter your city/town.\n"
		cityOK = false;	
		document.getElementById("ct").style.border= "solid 2px red";
	}
	else {
		document.getElementById("ct").style.border= "solid 2px #7B7A7B";
	}
	return cityOK;
}

function chkState() {
	var state = document.getElementById("state").value;
	var stateOK = true;
	if (state.trim()=="") {
		gErrorMsg = gErrorMsg + "Please select your state.\n"
		stateOK = false;	
		document.getElementById("state").style.border= "solid 2px red";
	}
	else {
		document.getElementById("state").style.border= "solid 2px #7B7A7B";
	}
	return stateOK;
}

function chkPost() {
	var post = document.getElementById("pos").value;
    var pattern5 = /[0-9]{5,5}$/;
    var postOK = true;
    if (post.trim()==""){
		gErrorMsg = gErrorMsg + "Postcode cannot be blank.\n"
		postOK = false;
		document.getElementById("pos").style.border= "solid 2px red";
    }
    else{
        if (!pattern5.test(post)){
            gErrorMsg = gErrorMsg + "Postcode can only be made of 5 numbers\n"
            postOK = false;
			document.getElementById("pos").style.border= "solid 2px red";
        }
	document.getElementById("pos").style.border= "solid 2px #7A7B7A";
    }
	return postOK;
}

function chkPhone() {
	var phone = document.getElementById("tel").value;
    var pattern4 = /[0-9]{3}[-][0-9]{5,7}$/;
    var phoneOK = true;
    if (phone.trim()==""){
		gErrorMsg = gErrorMsg + "Phone number cannot be blank.\n"
		phoneOK = false;
		document.getElementById("tel").style.border= "solid 2px red";
    }
    else{
        if (!pattern4.test(phone)){
            gErrorMsg = gErrorMsg + "Phone number must be 8-10 digits and cannot be letters\n"
            phoneOK = false;
			document.getElementById("tel").style.border= "solid 2px red";
        }
		else {
			document.getElementById("tel").style.border= "solid 2px #7A7B7A";
		}
    }
	return phoneOK;
}

function chkProd() {
	var product = document.getElementById("producttype").value;
	var prodOK = true;
	if (product.trim()=="") {
		gErrorMsg = gErrorMsg + "Please select your product.\n"
		prodOK = false;
		document.getElementById("producttype").style.border= "solid 2px red";
	}
	else {
		document.getElementById("producttype").style.border= "solid 2px #7A7B7A";
	}
	return prodOK;
}

function chkSubj() {
	var subj = document.getElementById("subj").value;
	var subjOK = true;
	if (subj.trim()=="") {
		gErrorMsg = gErrorMsg + "Subject field cannot be blank.\n"
		subjOK = false;
		document.getElementById("subj").style.border= "solid 2px red";
	}
	else {
		document.getElementById("subj").style.border= "solid 2px #7A7B7A";
	}
	return subjOK;
}

//End of Validation

//Data transfer in the same page
function prodSubj() {
    var prod = document.getElementById("producttype").value;
    document.getElementById("subj").value += prod + "\n";
}

//clear text
function eraseText() {
    document.getElementById("subj").value = "";
}
