<?php
require "dbcontroller.php";
$conn = new medoo(array('database_type' => 'mysql',	'database_name' => 'erp_school',	'server' => 'localhost',	'username' => 'erp_school',	'password' => 'erp_school',	'charset' => 'utf8','port' => 3306,	'prefix' => '','option' => array(PDO::ATTR_CASE => PDO::CASE_NATURAL)));

function json($object){
    echo json_encode($object);
}
?>