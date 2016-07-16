<?php
include '../connection.php';

if(isset($_GET)){
    
    if($_GET['action']=='menu'){
        
        $rows=$conn->query("select module_name,page_action,pagename from erp_modules m, erp_pages p  where m.enabled='Y' and p.page_enabled='Y' and m.module_id= p.module_id order by m.priority,p.priority");
   $links=array();
        foreach($rows as $page){
            if (array_key_exists($page['module_name'], $links)) {
     $existing=$links[$page['module_name']];
     array_push($existing, array($page['page_action'],$page['pagename']));
     $links[$page['module_name']]=$existing;
}else{
    $links[$page['module_name']]=array(array($page['page_action'],$page['pagename']));
}
          
        }
        
        json($links);
        
    }
}
?>

