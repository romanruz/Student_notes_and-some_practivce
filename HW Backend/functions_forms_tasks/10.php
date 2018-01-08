<p>10. Написать функцию, которая считает количество уникальных слов в тексте. Слова разделяются пробелами.
    Текст должен вводиться с формы.</p>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>задание 10</title>
    <style>
        div {display: inline-block;}
    </style>
</head>
<body>
<form name ="test" action="" method="post">
    Добавьте коментарий:
    <textarea name="string" type="textarea" cols="20" rows="20"></textarea>
    <input type="submit" name="done" value="готово">
</form>
</body>
<?php
if (!$_POST){
    die ('input text');
}
$string = $_POST['string'];
echo countUniq($string);
//Function
function countUniq ($string)
{
// str_word_count не хотело работать с русскимт букавами
    $arr = str_word_count($string, 1,"АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя");
    $cauntarr = array_count_values($arr);
    $res = count($cauntarr);
    return $res;
}
?>