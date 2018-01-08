<p>5. Написать функцию, которая выводит список файлов в заданной директории, которые содержат искомое слово.
    Директория и искомое слово задаются как параметры функции.
   <?php
    $path = 'gallery';
    $wordYouLookFor = 'map';
    echo fileList($path,$wordYouLookFor);

    function fileList ($dir,$word){
     $mask = "/$word" . '.*';
     $filelist = glob($dir . $mask);
     foreach ($filelist as $file){
      $list = basename($file);
      echo "$list<br>";
     }
    }
    ?>