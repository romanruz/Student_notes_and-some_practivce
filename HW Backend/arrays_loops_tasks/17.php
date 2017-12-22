<p>17.Сосктавьте массив месяцев. С помощью цикла foreach выведите все месяцы, а текущий
    месяц выведите жирным. Текущий месяц должен храниться в переменной $month.</p>
<?php
$month = 'December';
$arr = ['January', 'February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
foreach ($arr as $item) {
    if ($item === $month){
        echo "<b>$item</b>" . ",";
    }
    else {
        echo $item . ",";
    }
}
?>



