<p>20.Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20
    рядов, а не 5.<br><br>
    x<br>
    xx<br>
    xxx<br>
    xxxx<br>
    xxxxx</p>

<?php
$x = "x";
for ($str = 1; $str <= 20; $str++) {
    for ($xx = 1; $xx <= $str; $xx++) {
        echo $x;
    }
    echo "<br />";
}
?>
