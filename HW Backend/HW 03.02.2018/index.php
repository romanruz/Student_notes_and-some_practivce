<?php
require_once 'db.php';
require_once 'class.php';
var_dump(Db::getDb());
$data = $_POST;
$login = new User($data);
$login->valid($con);
if ($login->errors == false){
    $login->regi($con);
}


?>
<!doctype html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
if (!empty($login->errors)) {
    echo '<div style = "color:red;">' . array_shift($login->errors) . '</div><hr>';
}
?>
<form action="" method="post">
    <label for="name">Name</label>
    <input type="text" id="name" name="name"><br/>
    <label for="password">Password</label>
    <input type="text" id="password" name="password"><br/>
    <label for="password2">Password2</label>
    <input type="text" id="password2" name="password2"><br/>
    <label for="email">Email</label>
    <input type="text" id="email" name="email"><br/>
    <button> Login</button>
</form>
</body>
</html>