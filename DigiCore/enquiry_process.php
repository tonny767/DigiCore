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
	<title>DigiCore - Enquiry Process</title>
</head>

<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "enquirydb";	//database name
	
	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	
	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error()); 
	}
	
	// sql to create table
	$sql = 
	"CREATE TABLE enquiry(
		firstname	VARCHAR(255),
		lastname	VARCHAR(255),
		email		VARCHAR(255),
		street		VARCHAR(255),
		city		VARCHAR(255),
		state		VARCHAR(255),
		postcode	VARCHAR(255),
		phone		VARCHAR(255),
		product		VARCHAR(255),
		quantity	INT (100),
		comment		VARCHAR(255))";
	
	//Creates a table in the database
	if (mysqli_query($conn, $sql)) {
		echo "\nEnquiry table created successfully";
	} 
	
	//define variables with empty values
	$E_Fname = $E_Lname = $E_Email = $E_Street = $E_City = $E_State = $E_Postcode = $E_Phone = $E_Product = $E_Qty = $E_Comment = "";
	
	//get the value from enquiry.php
	if(isset($_POST["Send"])){
		$E_Fname = test_input($_POST["Fname"]);
		$E_Lname = test_input($_POST["Lname"]);
		$E_Email = test_input($_POST["contactemail"]);
		$E_Street = test_input($_POST["streetaddress"]);
		$E_City = test_input($_POST["citytown"]);
		$E_State = test_input($_POST["state"]);	
		$E_Postcode = test_input($_POST["postcode"]);
		$E_Phone = test_input($_POST["phonenumber"]);
		$E_Product = test_input($_POST["prodlist"]);
		$E_Qty = test_input($_POST["quantity"]);
		$E_Comment = test_input($_POST["message"]);
	}

	//server side validation
	//Reference: https://www.w3schools.com/php/php_form_validation.asp
	function test_input($data){
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
		
	//Add values to database table
	$sql_add = 
	"INSERT INTO enquiry(firstname,lastname,email,street,city,state,postcode,phone,product,quantity,comment)
	VALUES('$E_Fname', '$E_Lname', '$E_Email', '$E_Street', '$E_City', '$E_State', '$E_Postcode', '$E_Phone', '$E_Product', '$E_Qty', '$E_Comment')";
	
	//checks if query is successful
	if (mysqli_query($conn, $sql_add)) {
		echo "\nData added successfully\n";
	} else {
		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}
	
?>

<body id="enquiryprocess">
<?php
	include("include/navigation.php");
?>

<h1 class="conus">Confirmation page</h1>
<p class="text">Data has been successfully saved to the database</p>
<br>

<table class = "viewtable">
	<tr><td class="td1">First name</td><td class="td2"><?php echo $E_Fname; ?></td></tr> 
	<tr><td class="td1">Last name</td><td class="td2"><?php echo $E_Lname; ?></td></tr> 
	<tr><td class="td1">Email</td><td class="td2"><?php echo $E_Email; ?></td></tr> 
	<tr><td class="td1">Street</td><td class="td2"><?php echo $E_Street; ?></td></tr> 
	<tr><td class="td1">City</td><td class="td2"><?php echo $E_City; ?></td></tr> 
	<tr><td class="td1">State</td><td class="td2"><?php echo $E_State; ?></td></tr>
	<tr><td class="td1">Postcode</td><td class="td2"><?php echo $E_Postcode; ?></td></tr> 
	<tr><td class="td1">Phone number</td><td class="td2"><?php echo $E_Phone; ?></td></tr>
	<tr><td class="td1">Product</td><td class="td2"><?php echo $E_Product; ?></td></tr> 
	<tr><td class="td1">Quantity</td><td class="td2"><?php echo $E_Qty; ?></td></tr>
	<tr><td class="td1">Comment</td><td class="td2"><?php echo $E_Comment; ?></td></tr>
</table> 

<?php
	include("include/footer.php");
?>

</body>
</html>