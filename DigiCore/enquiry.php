<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="description" content="Enquiry process" />
	<meta name="keywords" content="enquiry, process" />
	<meta name="author" content="assignment group 1 tutorial 2" />
	<link rel="stylesheet" type="text/css" href="styles/style.css"/>
	<link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
	<script src="./script/script.js"></script>
	<script src="./script/enhancements.js"></script>
	<link rel="shortcut icon" href="images/logo.ico"/>
	<title>DigiCore - Enquiry</title>
</head>

<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	
	$conn = mysqli_connect($servername, $username, $password);
	
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error()); 
	}
	
	$new_db = "CREATE DATABASE enquirydb";
	mysqli_query($conn, $new_db);
	
?>

<body id="enquirybody">
	<?php
		include("include/navigation.php");
	?>
	<h1 class="conus"> Product Form</h1>
	<p class="text">Please fill out the product form correctly so our team can send out</p> 
	<p class="text2"> the item as fast as possible and you can receive it happily! </p>

<div class="container">
<form id="enquiry" method="post" action="enquiry_process.php">
	
	<p class="name"><input type="text" id="fnm" name="Fname" placeholder="First name*"/></p>
	<p class="name"><input type="text" id="ltnm" name="Lname" placeholder="Last name*"/></p>
	<p class="email"><input type="text" id="el" name="contactemail" placeholder="Email address*"/></p>
	
	<div class="fieldset">
	<fieldset>
	<legend>Address</legend>
		<input type="text" id="stadd" name="streetaddress" placeholder="Street address*"/><br/>
		<input type="text" id="ct" name="citytown" placeholder="City/town*"/><br/>
		<div id="statediv">
		</div>
		<input type="text" id="pos" name="postcode" placeholder="Postcode*"/>
	</fieldset>
	</div>
		<p class="phonen"><input type="text" id="tel" name="phonenumber" placeholder="Phone number 012-3456789*"/></p>
		<p class="protype"></p>
		<div id="productdiv">
		</div>
		
		<p class="subj">
			<textarea name="prodlist" id="subj" rows="5" cols="5" placeholder="Product list here" ></textarea>
		</p>
			<p>
			<input type="button" id="resetbutton" value="Clear Product" onclick="eraseText();"/> 
			</p>
		
		<input type="number" value ="1" id="qty" name="quantity" min="1" max="50"/>
	<p class="textarea"><textarea name="message" rows="10" cols="15" placeholder=" Message (optional)" ></textarea></p>
	<p class="sendbutton"><input name="Send" type="submit" value="Send"/></p>
	
</form>
</div>
<br/>
	<?php
		include("include/footer.php");
	?>
</body>
</html>