<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>задание 2</title>
    <style>
        div {
            display: inline-block;
        }
    </style>
</head>
<body>
<p>2. Создать форму с элементом textarea. При отправке формы скрипт должен выдавать ТОП3 длинных слов в тексте.
    Реализовать с помощью функции.</p>
</p>

<form name="test" action="2.php" method="post">
    <div><textarea name="textarea" type="textarea" cols="20" rows="20"></textarea></div>
    <input type="submit" name="done" value="готово">
</form>
</body>
</html>
<?php
if  (!$_POST){
    die('input smth');
}
$biggest = getBigWord($_POST["textarea"]);
echo $biggest;
?>


<!--functions-->
<?php
function getBigWord (string $a):string{
    $textwords = explode(' ',$a);
    foreach ($textwords as $word) {
        $res[$word] = mb_strlen($word);
    }
    arsort($res);
    $result = array_slice($res,0,3);
    $x = 'Cамые длинные слова в этой строке - ';
    foreach ($result as $resword=>$value){
        $x.= "$resword,";
    }
    return $x;
}
?>