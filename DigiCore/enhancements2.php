<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<meta name="description" content="Digicore Main Page"/>
	<meta name="keywords" content="HTML, DigiCore"/>
	<meta name="author" content="DC"/>
	<title>DigiCore - Enhancements 2</title>
	<link rel="stylesheet" type="text/css" href="styles/style.css"/>
	<script src="./script/script.js"></script>
	<script src="./script/enhancements.js"></script>
	<link rel="shortcut icon" href="images/logo.ico"/>
	<link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> 
</head>

<body id="enhancements2body">
	<?php
		include("include/navigation.php");
	?>
	<div class="container">
		<h2 style="padding:15px 0;">List of Enhancements made:</h2>
		<h3 style="padding:15px 0;">Red border for validation</h3>
		<ul class="padenhance">
		<li>Appears after form validation is done</li>
		<li>The page will notify user when they have placed an invalid input in the form</li>
		<li>Form elements with invalid inputs will have their border color changed to red</li>
		<li>The border color changes back to its original colour after form has been validated again and the data is considered valid</li>
		<li>Below is the code needed for the feature to work: </li>
		</ul>
		<img src="images/redborder.jpg" alt="Needed"/>
		<p class="padenhancep">The picture above shows a function that validates the email address.</p>
		<p class="padenhancep">If the user left the email to be empty or they placed an invalid format for their email, the page will alert the user and the email border will be changed to red.</p>
		<p class="padenhancep">This enhancement is only used in the enquiry page.</p>
		<a href="enquiry.html">Enquiry Page</a>
		
		<h3 style="padding:15px 0;">Back-to-Top button</h3>
		<ul class="padenhance">
		<li>A button that sends the user to the top of the page</li>
		<li>Activates once the user clicks on the button on the side of the page</li>
		<li>Below is the code needed for the feature to work: </li>
		</ul>
		<img src="images/topbutton1.jpg" alt="topbutton1"/>
		<img src="images/topbutton2.png" alt="topbutton2"/>
		<p class="padenhancep">The image above shows a function that can take the user to the top of the page when the button is clicked.</p>
		<p class="padenhancep">When the user hovers over the "top" button, it will turn light blue.</p>
		<p class="padenhancep">The button is on every page of the website.</p>
		<a href="index.html">Home Page</a> |
		<a href="enquiry.html">Enquiry Page</a> |
		<a href="product1.html">Mouse &amp; Keyboard</a> |
		<a href="product2.html">Audio</a> |
		<a href="product3.html">Laptops</a> |
		<a href="product4.html">Gaming Accessories</a> |
		<a href="aboutme1.html">About Us: Xavier</a> |
		<a href="aboutme2.html">About Us: Tonny</a> |
		<a href="aboutme3.html">About Us: Kha Hau</a> |
		<a href="aboutme4.html">About Us: Yin Han</a> |
		<a href="disclaimer.html">Disclaimer</a>
		
		<h3 style="padding:15px 0;">Nav Menu automatically hightlights current page</h3>
		<ul class="padenhance">
		<li>The navigation bar at the top of the page will highlight the page that the user is currently at</li>
		<li>The highlight only happens when the user goes to pages that isn't the home page</li>
		<li>Below is the code needed for the feature to work: </li>
		</ul>
		<img src="images/autonav.png" alt="autonav1"/>
		<p class="padenhancep">The image above shows the function that changes the background color of the navigation menu according to the current page being viewed</p>
		<p class="padenhancep">When pages that are not in the navigation menu are being viewed, the background color will remains white</p>
		<p class="padenhancep">The hightlight works on these pages:</p>
		<a href="enquiry.html">Enquiry Page</a> |
		<a href="product1.html">Mouse &amp; Keyboard</a> |
		<a href="product2.html">Audio</a> |
		<a href="product3.html">Laptops</a> |
		<a href="product4.html">Gaming Accessories</a> |
		<a href="aboutme1.html">About Us: Xavier</a> |
		<a href="aboutme2.html">About Us: Tonny</a> |
		<a href="aboutme3.html">About Us: Kha Hau</a> |
		<a href="aboutme4.html">About Us: Yin Han</a> |
		<a href="disclaimer.html">Disclaimer</a>
		
		<h3 style="padding:15px 0;">Regular expression validation in Javascript</h3>
		<ul class="padenhance">
		<li>This enhancement can only trigger through form validation. There is no visual display involved.</li>
		<li>Activates when form validation determines that there is an invalid input</li>
		<li>Below is the code needed for the feature to work: </li>
		</ul>
		<img src="images/regex.jpg" alt="regex"/>
		<p class="padenhancep">This function validates the phone number entered by the user. The regular expression is made to be /[0-9]{3}[-][0-9]{5,7}$/.</p>
		<p class="padenhancep">[0-9] is validation for numbers and {3} means that there can only be 3 numbers. [-] means the form only accepts a '-' after the first 3 numbers.</p>
		<p class="padenhancep">[0-9] {5,7} is validation for numbers where there must be at least 5 numbers and a maximum of numbers.</p>
		<p class="padenhancep">Thus, the acceptable format would be something like 012-3456789.</p>
		<p class="padenhancep">The enhancement only works in the enquiry page.</p>
		<a href="enquiry.html">Enquiry Page</a>
	
		<h3 style="padding:15px 0;">Product images will enlarge when cursor hovers over it</h3>
		<ul class="padenhance">
		<li>The images of product at the four product pages will enlarge when cursor hovering on it</li>
		<li>Once the cursor is moved away from the image, it turns back to original size</li>
		<li>Below is the code needed for the feature to work: </li>
		</ul>
		<img src="images/enlargeimg.png" alt="code of this enhancement"/>
		<p class="padenhancep">The image above shows the functions</p>
		<p class="padenhancep">This feature works on these pages:</p>
		<a href="product1.html">Mouse &amp; Keyboard</a> |
		<a href="product2.html">Audio</a> |
		<a href="product3.html">Laptops</a> |
		<a href="product4.html">Gaming Accessories</a>
		<p class="padenhancep"></p>
	</div>
	
	<?php
		include("include/footer.php");
	?>
</body>
</html>