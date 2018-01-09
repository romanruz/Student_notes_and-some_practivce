<p>Создать сайт из четырех страниц. На четвертой странице пользователь видит список страниц, которые он посещал.</p>
<?php
setcookie('visitpage','main');
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
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