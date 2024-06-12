<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Validate uploaded files
  if (!isset($_FILES['file1']) || !isset($_FILES['file2'])) {
    die('Please select files to upload');
  }

  // Allow less than 1MB files
  if ($_FILES['file1']['size'] > 1000000 || $_FILES['file2']['size'] > 1000000) {
    die('File size is too large');
  }

  // Check if the uploaded files are the same in content without hashing
  if (file_get_contents($_FILES['file1']['tmp_name']) === file_get_contents($_FILES['file2']['tmp_name'])) {
    die('Please upload different files');
  }

  // Upload files
  $uploadDir = 'd0j08v7l1mtishu1egix3pekxsi3yphl/';
  $file1Path = $uploadDir . basename($_FILES['file1']['name']) . time() . '.txt';
  $file2Path = $uploadDir . basename($_FILES['file2']['name']) . time() . '.txt';

  if (move_uploaded_file($_FILES['file1']['tmp_name'], $file1Path) && move_uploaded_file($_FILES['file2']['tmp_name'], $file2Path)) {
    echo 'Files uploaded successfully.<br>';
  } else {
    echo 'Error uploading files.<br>';
  }

  // Check if the uploaded files has the same md5 hash
  if (md5_file($file1Path) === md5_file($file2Path)) {
    echo 'You did it! Here is your flag: N7-CTF{d0j08v7l1mtishu1egix3pekxsi3yphl}';
  } else {
    echo 'Nice Try!';
  }
}

?>

<!DOCTYPE html>
<html>

<head>
  <title>File Upload</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      padding: 0;
    }

    h1 {
      color: #333;
    }

    p {
      color: #666;
      margin-bottom: 20px;
    }

    input[type="file"] {
      margin-bottom: 10px;
    }

    input[type="submit"] {
      padding: 5px 15px;
      background-color: #007bff;
      color: #fff;
      border: none;
      cursor: pointer;
    }

    input[type="submit"]:hover {
      background-color: #0056b3;
    }
  </style>
</head>

<body>
  <h1>File Upload Example</h1>
  <p>Select files to upload:</p>
  <form method="post" enctype="multipart/form-data">
    <input type="file" name="file1" id="file1"><br>
    <input type="file" name="file2" id="file2"><br>
    <input type="submit" value="Upload">
  </form>
</body>

</html>
