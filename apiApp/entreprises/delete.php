<?php

require 'database.php';

// Extract, validate and sanitize the id.
$entSiret = ($_GET['entSiret'] !== null && (int)$_GET['entSiret'] > 0)? mysqli_real_escape_string($con, trim($_GET['entSiret'])) : false;

if(!$id)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM `entreprise` WHERE `entSiret` ='{$entSiret}' LIMIT 1";

if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}