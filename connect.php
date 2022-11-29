<?php
	$name = $_POST['name'];
	$surname = $_POST['surname'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$confirm = $_POST['confirm'];
  $host="127.0.0.1";
  $port=3306;
  $socket="";
  $user="root";
  $password="";
  $dbname="userlogin";

	// Database connection
	$con = new Mysqli($host, $user, $password, $dbname, $port, $socket);
	
	$sql = "INSERT INTO `userdata`(`name`, `surname`, `email`, `password`, `confirm`) VALUES (\"?\", \"?\", \"?\", \"?\", \"?\");";

	$sql = "INSERT INTO `userdata` (`uid`, `name`, `surname`, `email`, `password`, `confirm`, `timestamp`) VALUES (?, ?, ?, ?, ?, ?, ?)";

	$stmt=$con->prepare("INSERT INTO `userData`(`firstName`, `lastName`, `email`, `password`, `confirm`) VALUES (?, ?, ?, ?, ?)");
  $stmt->bind_param("issssss", $uid, $name, $surname, $email, $password, $confirm, $timestamp);
	$stmt->execute();
	echo "Registered successfully...";
	$stmt->close();
	$con->close();

	$sql = "INSERT INTO `userdata` (`uid`, `name`, `surname`, `email`, `password`, `confirm`, `timestamp`) VALUES (\'0001\', \'admin\', \'admin\', \'seandylanpatterson@gmail.com\', \'LL0921jj\', \'LL0921jj\', current_timestamp());";
?>
