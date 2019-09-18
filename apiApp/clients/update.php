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
  $cliId    = mysqli_real_escape_string($con, (int)$request->cliId);

  // Update.
  $sql = "UPDATE `client` SET 
      `cliNom`='$cliNom',
      `cliPrenom`='$cliPrenom',
      `cliFonction`='$cliFonction',
      `cliMail`='$cliMail',
      `cliNumeroTelephone`='$cliNumeroTelephone',
      `entSiret`='$entSiret',
      `salId`='$salId'

   WHERE `client`.`cliId` = $cliId";

  if(mysqli_query($con,$sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}
