<p>5. Написать функцию, которая выводит список файлов в заданной директории, которые содержат искомое слово.
    Директория и искомое слово задаются как параметры функции.
<?php
$path = 'gallery';
$wordYouLookFor = 'map';
fileSearch($path,$wordYouLookFor);


function fileSearch ($path,$wordYouLookFor)
{
    $mask = '/*.*';
    $filelist = glob($path.$mask);
    $result = array();
    foreach ($filelist as $file){
        preg_match_all("/$wordYouLookFor/",$file, $res);
        if (!empty($res[0])){
            $result[] = $file;
        }
    }
    $res = implode('<br>',$result);
    echo $res;
}
