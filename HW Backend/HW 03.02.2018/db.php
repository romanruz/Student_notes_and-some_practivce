<?php
class Db
{
    private static $_db = null;
    public static function getDb (){
        if (self::$_db === null){
            self::$_db = new mysqli("localhost","root","","authorization");
        }
        return self::$_db;
    }
    private function __construct(){}
    private function __clone(){}
    private function __wakeup(){}
}



//global $con;
//$con = new mysqli("localhost","root","","authorization");
//
//if ($con->connect_errno)
//{
//    echo "Failed to connect to MySQL: " . $con->connect_errno;
//}

?>
