<?php
$res = ($_COOKIE['visitpage']);
$arr = explode(',',$res);
$countarr = array_count_values($arr);
arsort($countarr);
echo "Вы посещали страницы<br>";
foreach ($countarr as $key=>$value ){
    echo $key . "-" . "$value"."раз<br>";
}
?>