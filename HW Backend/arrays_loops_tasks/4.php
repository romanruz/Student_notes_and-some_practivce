<p>4. Дан массив $arr. С помощью первого цикла foreach выведите на экран столбец ключей, с
помощью второго — столбец элементов.</p>
<?php
$arr = ['chees' => 'food','mersedes'=>'car','girls' => 'good'];
foreach ($arr as $key=>$value){
    echo "$key<br>";
}
?>
<hr>
<?php
foreach ($arr as $key=>$value){
    echo "$value <br>";
}
?>