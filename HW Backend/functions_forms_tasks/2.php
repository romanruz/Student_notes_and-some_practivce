<p>2. Создать форму с элементом textarea. При отправке формы скрипт должен выдавать ТОП3 длинных слов в тексте.
    Реализовать с помощью функции.</p>
</p>
<?php
if  (!$_POST){
    echo ('input smth');
    $_POST['textarea'] = '';
}
$biggest = getBigWord($_POST["textarea"]);
?>
<?php
function getBigWord (string $a):string{
    $textwords = explode(' ',$a);
    foreach ($textwords as $word) {
        $res[$word] = mb_strlen($word);
    }
    arsort($res);
    array_splice($res, 3);
    $res = array_flip($res);
    $comma_separated = implode(",", $res);
    return $comma_separated;
//    $result = array_slice($res,0,3);
//    $x = 'Cамые длинные слова в этой строке - ';
//    foreach ($result as $resword=>$value){
//        $x.= "$resword,";
//    }
//    return $x;
}
?>
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


<form name="test" action="2.php" method="post">
    <div><textarea name="textarea" type="textarea" cols="20" rows="20"></textarea></div>
    <input type="submit" name="done" value="готово">
    <?php if ($_POST['textarea']!=''){
        echo '<p>Самые длинные слова - ' . "$biggest". '<p>';
    }
    ?>
</form>
</body>
</html>
