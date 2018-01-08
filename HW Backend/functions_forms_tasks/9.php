<p>9. Написать функцию, которая переворачивает строку. Было "abcde", должна выдать "edcba".
    Ввод текста реализовать с помощью формы.</p>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>задание 9</title>
    <style>
        div {display: inline-block;}
    </style>
</head>
<body>
<?php

?>

<form name ="test" action="" method="post">
    Добавьте коментарий:
    <textarea name="string" type="textarea" cols="20" rows="20"></textarea>
    <input type="submit" name="done" value="готово">
</form>
</body>

<?php
if  (!$_POST){
    die('input text');
}
$s = $_POST['string'];
if (!$s){
    die('Input text');
}
echo mySrtrev($s);

//функции
function mySrtrev(string $s):string {
    $leght = strlen($s);
    for ($i = strlen($s)-1; $i >= 0; $i--) {
        $s.= $s[$i];
    }
    $res = mb_substr($s,$leght);
    return $res;
}
?>