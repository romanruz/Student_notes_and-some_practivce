<p>19. Составьте массив дней недели. С помощью цикла foreach выведите все дни недели, а
    текущий день выведите курсивом. Текущий день должен храниться в переменной $day.</p>
<?php
$day = date("l");
$arr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
foreach ($arr as $Days){
    if ($Days == $day){
        echo "<i>$Days</i>". ',';
    }
    else {
        echo $Days . ',';
        }
}
echo $day;
?>