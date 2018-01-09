<?php
$visitedpage = $_COOKIE['visitpage'];
setcookie('visitpage','contact'.",". $visitedpage)
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact</title>
</head>
<body>
<h1>Contact</h1>
<a href="content.php"> Content </a>
<a href="contact.php"> Contact </a>
<a href="gallery.php"> Gallery </a>
<a href="visitpage.php"> Visited page </a>
</body>
</html>