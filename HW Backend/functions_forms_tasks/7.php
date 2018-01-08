7. Создать гостевую книгу, где любой человек может оставить комментарий в текстовом поле и добавить его.
Все добавленные комментарии выводятся над текстовым полем.</p>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>задание 7</title>
    <style>
        div {display: inline-block;}
    </style>
</head>
<body>
<?php

$arr = file('comment.txt');
?>
<div>
    <p><?php foreach ($arr as $com){
        echo "Комментарий<br>";
        echo "$com<br>";
        }?></p>
</div>
<form name ="test" action="" method="post">
    Добавьте коментарий:
    <textarea name="comment" type="textarea" cols="20" rows="20"></textarea>
    <input type="submit" name="done" value="готово">
</form>
</body>
</html>
<?php
if (!$_POST){
    die('Введите ваш коментарий!!!');
}
$comment =  date('r')." ". $_POST['comment'];
file_put_contents  ('comment.txt',$comment . "\r\n",FILE_APPEND);
?>
