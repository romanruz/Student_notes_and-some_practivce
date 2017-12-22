<p>22. Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for или while.<br><br>
    xx<br>
    xxxx<br>
    xxxxxx<br>
    xxxxxxxx<br>
    xxxxxxxxxx</p>
<?php
$x = 'xx';
for ($str = 1;$str<=5;$str++){
    for ($sym = 1;$sym<=$str;$sym++){
        echo $x;
    }
    echo "<br>";
}
?>