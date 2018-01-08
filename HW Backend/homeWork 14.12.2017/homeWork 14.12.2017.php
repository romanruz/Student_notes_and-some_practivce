Написать скрипт для загрузки пользовательских файлов. При загрузке, в зависимости от типа файла – он на сервере должен
помещаться в папку /doc, или /img..etc
Должно быть ограничение на прием файлов – не более 2 мб.
Ссылку на форму загрузки разместить на главной странице сайта.
После добавления файлов, при заходе на главную, пользователь должен видеть галерею ранее загруженных картинок,
и список загруженных документов (все, что не картинки).
Код максимально писать функциями.
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>Загрузчик файлов</title>
</head>
<body>
<form action="" method="post" enctype="multipart/form-data">
    <p>
        <b>Uploader:</b>
    </p>

    <p>
        File:
        <input type="file" name="picAndTxt" multiple><br>
        <input type="hidden" name="MAX_FILE_SIZE" value="2097152" />
    </p>
    <p>
        <button type="submit" value="Send">Upload</button>
    </p>
</form>
<?php
$dirPic = 'img/';
$dirDoc = 'doc/';
$file = [];
$file = $_FILES['picAndTxt'];
if (in_array($file['type'],mimePic ())){
    if (!file_exists($dirPic)){
        mkdir($dirPic);
    }
    move_uploaded_file($file['tmp_name'],$dirPic . $file['name']);
}
elseif (in_array($file['type'],mimeDoc())){
    if (!file_exists($dirDoc)){
        mkdir($dirDoc);
    }
    move_uploaded_file($file['tmp_name'],$dirDoc . $file['name']);
}
else{
    echo "incorrect file" . "<br>";
}
fileList ($dirDoc);
table($dirPic,4);
?>

<!--Функции-->
<?php
//выводит список файлов с директории
function fileList ($dir){
    $mask = '/*.*';
    $filelist = glob($dir . $mask);
    foreach ($filelist as $file){
        $list = basename($file);
        echo "$list<br>";
    }
}
//возвращает нужный тип файлов
function mimeDoc()
{
    return ['text/plain'];
}
function mimePic ()
{
    return ['image/png','image/jpeg'];
}
//генерирует таблицу с картинками из директории
function table ($dir,$cols)
{
    $files = scandir($dir);
    echo "<table>";
    $k = 0; // Вспомогательный счётчик для перехода на новые строки
    for ($i = 0; $i < count($files); $i++) {
        if (($files[$i] != ".") && ($files[$i] != "..")) {
            if ($k % $cols == 0) echo "<tr>"; // Добавляем новую строку
            echo "<td>"; // Начинаем столбец
            $path = $dir.$files[$i];
            echo "<a href='$path'>";
            echo "<img src='$path' alt='' width='100' />";
            echo "</a>";
            echo "</td>";
            /* Закрываем строку, если необходимое количество было выведено, либо данная итерация последняя */
            if ((($k + 1) % $cols == 0) || (($i + 1) == count($files))) echo "</tr>";
            $k++;
        }
    }
    echo "</table>";
}
?>