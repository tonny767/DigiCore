<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<meta name="description" content="Digicore Main Page"/>
	<meta name="keywords" content="HTML, DigiCore"/>
	<meta name="author" content="DC"/>
	<title>DigiCore - Enhancements</title>
	<link rel="stylesheet" type="text/css" href="styles/style.css"/>
	<script src="./script/script.js"></script>
	<script src="./script/enhancements.js"></script>
	<link rel="shortcut icon" href="images/logo.ico"/>
	<link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> 
</head>

<body id="enhancementsbody">
	<?php
		include("include/navigation.php");
	?>
	<div class="container">
		<h2 style="padding:15px 0;"> List of Enhancements made:</h2>
		<h3 style="padding:15px 0;">Dropdown Menu</h3>
		<ul class="padenhance">
		<li>Allows user to navigate through the products offered by the website through each category</li>
		<li>Also available in enquiry section where the users can select the state that they currently reside in</li>
		<li>Also available in the ‘About Us’ section to allow users to select the team members’ individual profile</li>
		<li>Below is the code needed for the feature to work: </li>
		</ul>
		<img src="images/needed1.png" alt="Needed"/>
		<p class="padenhancep">Specifically the class dropdown,dropbar and dropdown-content, is to classify the list so other list codes would not be affected.</p>
		<img src="images/needed2.png" alt="Needed"/>
		<p class="padenhancep">This is the style codes, used to first make the dropdown lists hidden, then show it upon hovering.</p>
		<p class="padenhancep" style="padding-bottom:15px;">The code is sourced and modified from <a href="https://www.w3schools.com/howto/howto_css_dropdown.asp">W3Schools</a></p>

		<h3 style="padding:15px 0;">Slideshow</h3>
		<ul class="padenhance">
		<li>To attract the attention of the user </li>
		<li>Highlights the types of product available on the website</li>
		<li>Makes the website/main page looks nice</li>
		<li>Below is the code needed for the feature to work: </li>
		</ul>
		<img src="images/needed3.png" alt="Needed"/>
		<p class="padenhancep">Specifically id slider</p>
		<img src="images/needed4.png" alt="Needed"/>
		<p class="padenhancep">This is the style codes, used to slideshow products we sell, then click to go to desired page.</p>
		<p class="padenhancep">The code is sourced and modified from <a href="https://code.sololearn.com/WySlq83B2MC7/">Solo Learn</a></p>
	</div>
	<div class="sh-footer">
	<div class="container">
		<div id="nav-menu1" class="listfont widget-item">
			<h3>PRODUCT</h3>
			<ul>
				<li><a href="product2.html">Audio</a></li>
				<li><a href="product1.html">Mouse &amp; Keyboards</a></li>
				<li><a href="product3.html">Laptops</a></li>
				<li><a href="product4.html">Gaming Accessories</a></li>
			</ul>
		</div>
		<div id="nav-menu2" class="listfont widget-item">
			<h3>CONTACT US</h3>
			<ul>
				<li><a href="#">Email</a></li>
				<li><a href="#">Instagram</a></li>
				<li><a href="#">Twitter</a></li>
				<li><a href="#">Location</a></li>
			</ul>
		</div>
		<div id="nav-menu3" class="listfont widget-item">
			<h3>ABOUT US</h3>
			<ul>
				<li><a href="aboutme2.html">Tonny</a></li>
				<li><a href="aboutme1.html">Xavier</a></li>
				<li><a href="aboutme3.html">Kha Hau</a></li>
				<li><a href="aboutme4.html">Yin Han</a></li>
			</ul>			
		</div>
	</div>
	</div>
	<?php
		include("include/footer.php");
	?>
</body>
</html>