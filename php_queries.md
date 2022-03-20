<!-- MySQL DB with PHP connection  -->
  $conn = new mysqli('servername','username','password','dbname');
  
<!-- Insert Query -->
  $query = "INSERT INTO `tableName` (`field1`,`field2`,`field3`,`field4`) VALUES ('value1','value2','value3','value4')";

<!-- Delete Query -->
  $query = "DELETE FROM `table` WHERE `primary_key`='value' ";

<!-- Update/Edit Query -->
  $query = "UPDATE `tableName` SET `field1`='value1',`field2`='value2',`field3`='value3',`field4`='value4' WHERE `primary_key`='value'";
  
<!-- Select Query -->
  $query = "SELECT * FROM `tableName`";
