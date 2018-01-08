
<p>6. Создать страницу, на которой можно загрузить несколько фотографий в галерею.
    Все загруженные фото должны помещаться в папку gallery и выводиться на странице в виде таблицы.</p>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>Галерея</title>
</head>
<body>

<form action="" method="post" enctype="multipart/form-data">

    <p>
        <b>Uploader:</b>
    </p>

    <p>
        File:
        <input type="file" name="picture" multiple><br>
    </p>
    <p>
        <button type="submit" value="Send">Upload</button>
    </p>
</form>
<?php
$dir = 'gallery/';
$file = [];
if (!$_FILES){
    die('upload files');
}
$file = $_FILES['picture'];

if (!in_array($file['type'],avalibleMime ())){
    die('error');
}
if (!file_exists($dir)){
    mkdir($dir);
}
move_uploaded_file($file['tmp_name'],$dir . $file['name']);

//----------------------------ТАБЛИЦА-------------------------
  $cols = 4;
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
?>
<!--Функции-->
<?php
function avalibleMime ()
{
    return ['image/png','image/jpeg'];
}
?>

</body>
</html>

