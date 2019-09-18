<?php

require 'database.php';

// Extract, validate and sanitize the id.
$cliId = ($_GET['cliId'] !== null && (int)$_GET['cliId'] > 0)? mysqli_real_escape_string($con, (int)$_GET['cliId']) : false;

if(!$id)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM `client` WHERE `cliId` ='{$cliId}' LIMIT 1";

if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}