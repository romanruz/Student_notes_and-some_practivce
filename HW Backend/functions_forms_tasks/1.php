<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>задание 1</title>
    <style>
        div {display: inline-block;}
    </style>
</head>
<body>
<p>1. Создать форму с двумя элементами textarea. При отправке формы скрипт должен выдавать только те
    слова, которые есть и в первом и во втором поле ввода.
    Реализацию это логики необходимо поместить в функцию getCommonWords($a, $b), которая будет
    возвращать массив с общими словами.
</p>

<form name ="test" action="1.php" method="post">
    <div> <textarea name="textarea1" type="textarea" cols="20" rows="20"></textarea></div>
    <div><textarea name="textarea2" type="textarea" cols="20" rows="20"></textarea></div>
    <input type="submit" name="done" value="готово">
</form>
</body>
</html>
<hr>
<br>
<!-- Ниже только PHP -->
<?php
$c = 'НЕТ СОВПАДАЮЩИХ СЛОВ';
if  (!$_POST){
    die ('input words');
}
$a = ($_POST["textarea1"]);
$b = ($_POST["textarea2"]);
$answer = '';
$commonwords = getCommonWords($a,$b);
foreach ($commonwords as $ans){
    $answer.= "$ans,";
}
if ($answer !== ',') {
    echo "В данных полях совпадают слова - " . "$answer";
    }
    else {
    echo $c;
    }


// function

function getCommonWords (string $a, string $b):array {
    $words1 = splitstr($a);
    $words2 = splitstr($b);
    $common = [];
    foreach ($words1 as $word1){
        foreach ($words2 as $word2){
            if ($word1===$word2){
                $common[] = $word1;
            }
        }
    }
return $common;
}
function splitstr(string $a):array {
    return explode(' ',$a);
}
