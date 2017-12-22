<p>6.Дан массив $arr. С помощью цикла foreach запишите английские названия в массив $en, а
русские — в массив $ru.<p>
<?php
$arr = ['green'=>'зеленый', 'red'=>'красный','blue'=>'голубой'];
$en = [];
$ru = [];
foreach ($arr as $eni=>$rui){
    $en[] = $eni;
    $ru[] = $rui;
}
var_dump($en);
var_dump($ru);
?>