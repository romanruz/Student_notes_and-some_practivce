<p>25. Ваше задание создать массив, наполнить это случайными значениями (функция rand),
    найти максимальное и минимальное значение и поменять их местами.</p>
<?php
$arr = [];
for ($i = 1;$i<=20;$i++){
    $arr[] = rand(1,20);
}
echo '<pre>';
var_dump($arr);
$max = max($arr);
$min = min($arr);
foreach ($arr as $key => $value){
    if ($value == $max){
        $arr[$key] = $min;
    }
    if ($value == $min){
        $arr [$key] = $max;
    }
}
var_dump($arr);
echo '<pre>';
?>