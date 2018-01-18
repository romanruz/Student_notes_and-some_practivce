<p>3. Есть текстовый файл. Необходимо удалить из него все слова, длина которых превыщает N символов. Значение N задавать
    через форму. Проверить работу на кириллических строках - найти ошибку, найти решение.</p>
<form action = "3.php" method ="post">
<input type="text" name="lenght">
    <input type="submit">
</form>
<?php
$string = file_get_contents('comment.txt');
$stringarr = explode(' ',$string);
if (!$_POST){
    die("введите значение");
}
$lenght = $_POST["lenght"];
$result =array();
foreach ($stringarr as $word){
    if (mb_strlen($word)<$lenght){
        $result[] = $word;
        }
}

$resstr = (implode(' ',$result));
echo "$resstr";
?>








