<?php
require '../database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  if(trim($request->entSiret) === '' || (integer)$request->entSiret < 0)
  {
    return http_response_code(400);
  }

  // Sanitize.
  $entSiret = mysqli_real_escape_string($con, trim($request->entSiret));
  $entNom = mysqli_real_escape_string($con, trim($request->entNom));
  $entAdresse  = mysqli_real_escape_string($con, trim($request->entAdresse));
  $entPostal = mysqli_real_escape_string($con, (int)($request->entPostal));
  $entVille = mysqli_real_escape_string($con, trim($request->entVille));

  // Create.
  $sql = "INSERT INTO `entreprise`(`entSiret`,`entNom`,`entAdresse`,`entPostal`,`entVille`) 
          VALUES ('{$entSiret}','{$entNom}','{$entAdresse}','{$entPostal}','{$entVille}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $entreprises = [
      'entSiret' => $entSiret,
      'entNom' => $entNom,
      'entAdresse' => $entAdresse,
      'entPostal' => $entPostal,
      'entVille' => $entVille
    ];
    echo json_encode($entreprises);
  }
  else
  {
    http_response_code(422);
  }
}