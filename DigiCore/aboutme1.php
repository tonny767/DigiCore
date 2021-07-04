<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<meta name="description" content="Digicore Main Page"/>
	<meta name="keywords" content="HTML, DigiCore"/>
	<meta name="author" content="DC"/>
	<title>DigiCore - About Us: Xavier</title>
	<link rel="stylesheet" type="text/css" href="styles/style.css"/>
	<script src="./script/script.js"></script>
	<script src="./script/enhancements.js"></script>
	<link rel="shortcut icon" href="images/logo.ico"/>
	<link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> 
</head>

<body id="aboutme1body">
	<?php
		include("include/navigation.php");
	?>
	
	<div class="container">
	<h1 id="disclaimer2">About Us</h1>
	<h2 id="membername">Xavier O'neal Durin</h2>
	<img id="memberpicture" src="images/xavier.jpg" alt="aboutme1"/>
	<h3 class="middlealign">Student ID: 100069221</h3>
	<h3 id="course">Course: Bachelor of Engineering (Electrical and Electronic) (Honours)</h3>
	
	<table class = "viewtable">
		<tr>
			<th class = "td1">Contributions</th>
			<th class = "td1">Details</th>
		</tr>
	
		<tr>
			<td class = "td2">product1.html</td>
			<td class = "td2">Made tweaks to the page aside from adding sample products</td>
		</tr>
		
		<tr>
			<td class = "td2">index.html</td>
			<td class = "td2">Added respective hyperlinks and did some testing</td>
		</tr>
		
		<tr>
			<td class = "td2">disclaimer.html</td>
			<td class = "td2">Decreased the disclaimer font size to a reasonable value</td>
		</tr>
	</table>
	<br/>
	<p class="middlealign">My hobbies are playing video games in my spare time and playing musical instruments such as the piano and guitar.</p>
	<br/>
	</div>
	
	<?php
		include("include/footer.php");
	?>
</body>
</html>