<?php
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$confirm = $_POST['confirm'];

	// Database connection
	$conn = new Mysqli('localhost','root','','userLogin');
	if($conn -> connect_error){
		echo "$conn -> connect_error";
		die("Connection Failed: ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("INSERT INTO `userData`(`firstName`, `lastName`, `email`, `password`, `confirm`) VALUES (?, ?, ?, ?, ?)");
		$stmt -> bind_param("sssss", $firstName, $lastName, $email, $password, $confirm);
		$stmt -> execute();
		echo "Registered successfully...";
		$stmt -> close();
		$conn -> close();
	}
?>