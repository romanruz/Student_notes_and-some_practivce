<?php
$con = new mysqli("localhost","root","","authorization");

if ($con->connect_errno)
{
    echo "Failed to connect to MySQL: " . $con->connect_errno;
}

?>
