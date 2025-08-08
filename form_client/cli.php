<?php



$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cliente</title>
</head>

<body>
    <form action="cli.php" method="post">
        <label for="nome">Nome: </label>
        <input type="text" name="nome">
        <br>
        <label for="cpf">CPF: </label>
        <input type="text" name="cpf">
        <br>
        <label for="rg">RG: </label>
        <input type="text" name="rg">
        <br>
        <label for="email">Email: </label>
        <input type="text" name="email">
        <br>
        <button type="submit">Enviar</button>
    </form>
</body>

</html>