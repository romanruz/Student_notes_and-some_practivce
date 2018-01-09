Сделайте две страницы: index.php и hello.php. При заходе на index.php спросите с помощью формы имя пользователя,
запишите его в сессию. При заходе на hello.php поприветствуйте пользователя фразой "Привет, %Имя%!".
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Домашка от 23</title>
</head>
<body>
<form action="index.php"method="post">
    <p>Input name</p>
    <input type="text"name="name">
    <input type="submit">
</form>
    <?php
    session_start();
    if (!$_POST){
        die();
    }
    echo "<a href=\"hellow.php\">push</a>";
    $name = $_POST['name'];
    $_SESSION ['name'] = $name;
    ?>
</body>
</html>