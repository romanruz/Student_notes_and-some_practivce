<p>18. Составьте массив дней недели. С помощью цикла foreach выведите все дни недели,
    выходные дни следует вывести жирным.</p>

<?php
$arr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
$weekend = ['Sunday','Saturday'];
 foreach ($arr as $day){
     if (in_array($day,$weekend)){
         echo "<b>$day</b>";
         }
         else{
             echo $day;
         }
 }

?>

