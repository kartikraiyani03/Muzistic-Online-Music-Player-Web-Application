<?php
    include 'db.php';
    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $username = $_POST["username"];
        $password = $_POST["password"];

        $sql = "INSERT INTO `user_info` (`Username`, `Password`, `Date`) VALUES ('$username', '$password', current_timestamp())";
        mysqli_query($conn,$sql);
        if(!$conn)
        {
            die("Error".mysqli_connect_error());
        }
    }
?>
