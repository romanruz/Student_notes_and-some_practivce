<p>18. Составьте массив дней недели. С помощью цикла foreach выведите все дни недели,
    выходные дни следует вывести жирным.</p>
<?php
$arr = ['sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
$weekend = ['sunday','Saturday'];
foreach ($arr as $day ){
    foreach ($weekend as $wday){
        if ($day === $wday){
            echo "<b>$day</b>";
        }
        else {
            echo $day;
        }
    }
}
?>

