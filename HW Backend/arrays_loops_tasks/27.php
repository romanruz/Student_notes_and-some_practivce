<p>27. Создать генератор случайных таблиц. Есть переменные: $row - кол-во строк в таблице, $cols - кол-во столбцов в таблице.
    Есть список цветов, в массиве: $colors = array('red','yellow','blue','gray','maroon','brown','green'). Необходимо
    создать скрипт, который по заданным условиям выведет таблицу размера $rows на $cols, в которой все ячейки будут иметь
    цвета, выбранные случайным образом из массива $colors. В каждой ячейке должно находиться случайное число. <br><br>
</p>
<table border = 2 width = 1000 height = 1000>
<?php
$row = 20;
$cols = 20;
for ($rows = 1;$rows<=$row;$rows++){
    echo "<tr align = \"center\">";
    for ($col = 1;$col<=$cols;$col++){
        $clr = rand(0,6);
        $num = rand(1,100);
        $colors = ['red','yellow','blue','gray','maroon','brown','green'];
        echo "<td align = \"center\" bgcolor = ".$colors[$clr].">".$num."</td>";
        }
    echo "</tr>";
}
?>
</table>

