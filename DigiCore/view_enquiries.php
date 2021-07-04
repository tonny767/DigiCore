<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="description" content="laptop product" />
	<meta name="keywords" content="laptop, digicore" />
	<meta name="author" content="assignment group 1 tutorial 2" />
	<link rel="stylesheet" type="text/css" href="styles/style.css"/>
	<link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
	<script src="./script/script.js"></script>
	<script src="./script/enhancements.js"></script>
	<link rel="shortcut icon" href="images/logo.ico"/>
	<title>DigiCore - View Enquiries</title>
</head>
<body id="viewenquiry">
<?php
	include("include/navigation.php");
?>

<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "enquirydb";
	
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	
	if(!$conn) {
		die("Connection failed: " . mysqli_connect_error()); 
	}
	
	// Retrieve all information stored in table enquiry
	$select = "SELECT * FROM enquiry";
	$result = mysqli_query($conn, $select);
	
	// Display all information retrieved
	if (mysqli_num_rows($result) > 0) {
		while($table = mysqli_fetch_assoc($result)) {
		echo '<table class = "viewtable">';
		echo '<tr><td class = "td1">First name</td><td class = "td2">' . $table["firstname"]."</td></tr>";
		echo '<tr><td class = "td1">Last name</td><td class = "td2">' . $table["lastname"]."</td></tr>";
		echo '<tr><td class = "td1">email</td><td class = "td2">' . $table["email"]."</td></tr>";
		echo '<tr><td class = "td1">street</td><td class = "td2">' . $table["street"]."</td></tr>";
		echo '<tr><td class = "td1">city</td><td class = "td2">' . $table["city"]."</td></tr>";
		echo '<tr><td class = "td1">state</td><td class = "td2">' . $table["state"]."</td></tr>";
		echo '<tr><td class = "td1">postcode</td><td class = "td2">' . $table["postcode"]."</td></tr>";
		echo '<tr><td class = "td1">phone</td><td class = "td2">' . $table["phone"]."</td></tr>";
		echo '<tr><td class = "td1">product</td><td class = "td2">' . $table["product"]."</td></tr>";
		echo '<tr><td class = "td1">quantity</td><td class = "td2">' . $table["quantity"]."</td></tr>";
		echo '<tr><td class = "td1">comment</td><td class = "td2">' . $table["comment"]."</td></tr>";
		echo "</table>";
		}
	}	
	
?>


<?php
	include("include/footer.php");
?>
</body>
</html>