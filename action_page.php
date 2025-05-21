<?php

  $name = $email = $phone = $successMessage = "";

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    $website = test_input($_POST["phone"]);

      if ($name && $email && $phone) {
      $successMessage = "Інформація успішно надіслана!";
        echo $successMessage;
      $name = $email = $phone = "";
    }
  }

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);

  return $data;
}
