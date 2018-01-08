Создать гостевую книгу, где любой человек может оставить комментарий в текстовом поле и добавить его.
Все добавленные комментарии выводятся над текстовым полем.
Реализовать проверку на наличие в тексте запрещенных слов, матов. При наличии таких слов - выводить сообщение
"Некорректный комментарий". Реализовать удаление из комментария всех тегов, кроме тега &lt;b&gt;.</p>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>задание 8</title>
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
    die('введите ваш коментарий!');
}
//Вводим не желательные слова в массив
$badwords = ['bad', 'dick', 'red', 'mad'];
$comment =  "&#032". date('r')."&#032". $_POST['comment'];
$comm = strip_tags($comment,'<b>');
if (valid($comm,$badwords)){
    die("Некорректный комментарий");
}
file_put_contents  ('comment.txt',$comm . "\r\n",FILE_APPEND);


//function

function valid ($words, $badwords)
{
    foreach ($badwords as $badword){
        if (preg_match("/$badword/",$words)){
            return true;
        }
    }
    return false;
}

?>
