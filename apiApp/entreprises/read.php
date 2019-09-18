<?php
require '../database.php';

$entreprises = [];
$sql = "SELECT entSiret, entNom, entAdresse, entPostal, entVille FROM entreprise";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $entreprises[$i]['entSiret']    = $row['entSiret'];
    $entreprises[$i]['entNom']    = $row['entNom'];
    $entreprises[$i]['entAdresse'] = $row['entAdresse'];
    $entreprises[$i]['entPostal']    = $row['entPostal'];
    $entreprises[$i]['entVille']    = $row['entVille'];

    $i++;
  }

  echo json_encode($entreprises);
}
else
{
  http_response_code(404);
}