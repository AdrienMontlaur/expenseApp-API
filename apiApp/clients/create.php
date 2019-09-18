<?php
require '../database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Sanitize.
  $cliNom = mysqli_real_escape_string($con, trim($request->cliNom));
  $cliPrenom = mysqli_real_escape_string($con, trim($request->cliPrenom));
  $cliFonction  = mysqli_real_escape_string($con, trim($request->cliFonction));
  $cliMail = mysqli_real_escape_string($con, trim($request->cliMail));
  $cliNumeroTelephone = mysqli_real_escape_string($con, trim($request->cliNumeroTelephone));
  $entSiret = mysqli_real_escape_string($con, trim($request->entSiret));
  $salId = mysqli_real_escape_string($con, (int)$request->salId);

  // Create.
  $sql = "INSERT INTO `client`(`cliId`,`cliNom`,`cliPrenom`,`cliFonction`,`cliMail`,`cliNumeroTelephone`,`entSiret`,`salId`)
          VALUES (null,'$cliNom','$cliPrenom','$cliFonction','$cliMail','$cliNumeroTelephone','$entSiret','$salId')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $client = [
      'cliNom' => $cliNom,
      'cliPrenom' => $cliPrenom,
      'cliFonction' => $cliFonction,
      'cliMail' => $cliMail,
      'cliNumeroTelephone' => $cliNumeroTelephone,
      'entSiret' => $entSiret,
      'salId' => $salId,
      'cliId'    => $cliId
    ];
    echo json_encode($client);
  }
  else
  {
    http_response_code(422);
  }
}
