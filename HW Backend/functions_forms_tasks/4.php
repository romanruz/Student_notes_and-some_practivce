<p>4. Написать функцию, которая выводит список файлов в заданной директории. Директория задается как
    параметр функции.</p>
<?php

$path = 'gallery';
echo fileList($path);

function fileList ($dir){
    $mask = '/*.*';
    $filelist = glob($dir . $mask);
    foreach ($filelist as $file){
        $list = basename($file);
        echo "$list<br>";
    }
}
?>



