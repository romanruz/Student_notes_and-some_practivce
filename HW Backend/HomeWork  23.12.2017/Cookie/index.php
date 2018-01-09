<p>Создать сайт из четырех страниц. На четвертой странице пользователь видит список страниц, которые он посещал.</p>
<?php
setcookie('visitpage','main');
?>
<!doctype html>
<html lang="en">
<head>
    <title>Main</title>
</head>
<body>
<h1>Main</h1>
<a href="content.php"> Content </a>
<a href="contact.php"> Contact </a>
<a href="gallery.php"> Gallery </a>
<a href="visitpage.php"> Visited page </a>
</body>
</html>