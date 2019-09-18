<?php
require '../database.php';

$clients = [];
$sql = "SELECT cliId, cliNom, cliPrenom, cliFonction, cliMail, cliNumeroTelephone, entSiret, salId FROM client";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $clients[$i]['cliId']    = $row['cliId'];
    $clients[$i]['cliNom']    = $row['cliNom'];
    $clients[$i]['cliPrenom'] = $row['cliPrenom'];
    $clients[$i]['cliFonction']    = $row['cliFonction'];
    $clients[$i]['cliMail']    = $row['cliMail'];
    $clients[$i]['cliNumeroTelephone']    = $row['cliNumeroTelephone'];
    $clients[$i]['entSiret']    = $row['entSiret'];
    $clients[$i]['salId']    = $row['salId'];
    $i++;
  }

  echo json_encode($clients);
}
else
{
  http_response_code(404);
}