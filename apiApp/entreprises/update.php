<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if ((int)$request->entSiret < 1 || trim($request->entNom) == '' || trim($request->entAdresse) == '' 
      || trim($request->entPostal) == '' || trim($request->entVille) == ''{
    return http_response_code(400);
  }

  // Sanitize.
  $entSiret = mysqli_real_escape_string($con, trim($request->entSiret));
  $entNom = mysqli_real_escape_string($con, trim($request->entNom));
  $entAdresse  = mysqli_real_escape_string($con, trim($request->entAdresse));
  $entPostal    = mysqli_real_escape_string($con, (int)$request->entPostal);
  $entVille = mysqli_real_escape_string($con, trim($request->entVille));

  // Update.
  $sql = "UPDATE `client` SET 
      `entNom`='$entNom',
      `entAdresse`='$entAdresse',
      `entPostal`='$entPostal',
      `entVille`='$entVille',

   WHERE `entSiret` = '{$entSiret}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}
