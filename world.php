<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

if (isset($_GET['country'])){
  $country = $_GET['country'];
  

  $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
  //$stmt = $conn->query("SELECT * FROM countries");

  $stmt = $conn->prepare("SELECT * FROM countries WHERE name LIKE '%$country%'");
  //$stmt->bindParam(':country', $country, PDO::PARAM_STR);
  $stmt->execute();

  //$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

  if ($results){
    echo "<ul>";
      foreach ($results as $result) {
        echo "<li>{$result['name']} is ruled by {$result['head_of_state']}</li>";
      }
    echo "</ul>";
  }
  else{
    echo "<p>Country Not Found</p>";
  }
}
?>




